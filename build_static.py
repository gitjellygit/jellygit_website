#!/usr/bin/env python3
"""Build static HTML from the legacy PHP pages.

- Inlines nav.php / header.php / header2.php / footer.php partials.
- Evaluates the blog-posts.json lookups used by blog-*.php.
- Converts the $_GET alert block in products.php to a client-side script.
- Rewrites internal .php links to extensionless URLs.
- Rewrites form actions pointing at send_email.php to /send-email.

Run from the site root:  python3 build_static.py
"""
import json
import os
import re
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
POSTS = json.load(open(os.path.join(BASE, "blog-posts.json")))["blogPosts"]

PARTIALS = {}
for name in ("nav.php", "header.php", "header2.php", "footer.php"):
    PARTIALS[name] = open(os.path.join(BASE, name)).read()

warnings = []


# ---------- tiny PHP expression evaluator ----------

def php_nl2br(s):
    # PHP nl2br() inserts "<br />" before every newline
    return s.replace("\n", "<br />\n")


def unescape_php(s):
    return s.replace("\\'", "'").replace("\\\\", "\\")


def eval_expr(expr):
    """Evaluate the limited echo expressions used in blog-*.php."""
    expr = expr.strip()

    # Concatenation with '.' (top-level only; our exprs are flat)
    parts = []
    depth = 0
    cur = ""
    for ch in expr:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == "." and depth == 0 and cur.strip():
            # ensure it's a concat dot, not inside a string/number
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        parts.append(cur)

    out = ""
    for p in parts:
        p = p.strip()
        if p.startswith("nl2br(") and p.endswith(")"):
            out += php_nl2br(eval_expr(p[len("nl2br("):-1]))
        elif p.startswith("'") and p.endswith("'"):
            out += unescape_php(p[1:-1])
        else:
            m = re.fullmatch(r"\$data\['blogPosts'\]\[(\d+)\]\['(\w+)'\]", p)
            if not m:
                raise ValueError(f"unsupported expr: {p!r}")
            idx, key = int(m.group(1)), m.group(2)
            try:
                out += str(POSTS[idx][key])
            except (IndexError, KeyError):
                out += ""
    return out


IF_RE = re.compile(
    r"if\s*\(\s*isset\(\s*\$data\['blogPosts'\]\[(\d+)\]\['(\w+)'\]\s*\)\s*\)"
    r"\s*\{(?P<then>[^{}]*)\}\s*else\s*\{(?P<els>[^{}]*)\}",
    re.S,
)
ECHO_RE = re.compile(r"echo\s+(.+?);", re.S)


def eval_php_block(block):
    """Return HTML output for a <?php ... ?> block."""
    # Live $_GET alert block (products.php) -> client-side equivalent
    code = re.sub(r"//[^\n]*", "", block)  # strip // comments
    if "$_GET" in code:
        return GET_ALERT_JS

    out = []
    pos = 0
    for m in IF_RE.finditer(block):
        # any non-comment code before this if that we don't understand?
        prefix = block[pos:m.start()]
        leftover = re.sub(r"//[^\n]*", "", prefix)
        leftover = re.sub(r"\$jsonContent\s*=\s*file_get_contents\([^)]*\)\s*;", "", leftover)
        leftover = re.sub(r"\$data\s*=\s*json_decode\([^)]*\)\s*;", "", leftover)
        leftover = leftover.strip()
        if leftover:
            warnings.append(f"unhandled PHP before if: {leftover[:80]!r}")
        pos = m.end()

        idx, key = int(m.group(1)), m.group(2)
        then_m = ECHO_RE.search(m.group("then"))
        else_m = ECHO_RE.search(m.group("els"))
        try:
            value = POSTS[idx][key]
        except (IndexError, KeyError):
            value = None
        if value is not None and then_m:
            try:
                out.append(eval_expr(then_m.group(1)))
            except Exception as e:
                warnings.append(f"expr eval failed ({e}): {then_m.group(1)[:60]!r}")
        elif else_m:
            em = re.match(r"'((?:[^'\\]|\\.)*)'", else_m.group(1).strip())
            if em:
                out.append(unescape_php(em.group(1)))
            else:
                warnings.append(f"unhandled else echo: {else_m.group(1)[:60]!r}")

    tail = block[pos:]
    leftover = re.sub(r"//[^\n]*", "", tail)
    leftover = re.sub(r"\$jsonContent\s*=\s*file_get_contents\([^)]*\)\s*;", "", leftover)
    leftover = re.sub(r"\$data\s*=\s*json_decode\([^)]*\)\s*;", "", leftover)
    leftover = leftover.strip()
    if leftover:
        warnings.append(f"unhandled PHP tail: {leftover[:80]!r}")

    return "".join(out)


GET_ALERT_JS = """<script>
(function () {
  var q = new URLSearchParams(window.location.search);
  var msg = "";
  if (q.has("error")) {
    msg = '<div class="alert alert-danger"> Please Fill in the Blanks </div>';
  } else if (q.has("success")) {
    msg = '<div class="alert alert-success"> Your Message Has Been Sent </div>';
  }
  if (msg) {
    var slot = document.currentScript.previousElementSibling;
    if (slot) slot.insertAdjacentHTML("afterend", msg);
  }
})();
</script>"""


PHP_BLOCK_RE = re.compile(r"<\?php(.*?)\?>", re.S)
INCLUDE_RE = re.compile(r"<\?php\s*include\s*'([^']+\.php)'\s*;?\s*\?>")


def render_php_file(path):
    src = open(path).read()

    # 1) inline includes first (partials contain no PHP)
    def include_sub(m):
        name = m.group(1)
        if name not in PARTIALS:
            warnings.append(f"{os.path.basename(path)}: missing partial {name}")
            return m.group(0)
        return PARTIALS[name]

    src = INCLUDE_RE.sub(include_sub, src)

    # 2) evaluate remaining PHP blocks
    def block_sub(m):
        return eval_php_block(m.group(1))

    src = PHP_BLOCK_RE.sub(block_sub, src)

    # 3) rewrite internal .php links -> extensionless
    def link_sub(m):
        url = m.group(2)
        if url.endswith(".php") and not url.startswith(("http", "/")):
            url = url[:-4]
        return m.group(1) + '="' + url + '"'

    src = re.sub(r'(href|src|action)="([^"]*)"', link_sub, src)

    # 4) form actions -> backend endpoint
    src = src.replace('action="send_email"', 'action="/send-email"')
    src = src.replace("action='send_email'", "action='/send-email'")

    return src


def main():
    pages = sorted(
        f for f in os.listdir(BASE)
        if f.endswith(".php")
        and f not in PARTIALS
        and f != "send_email.php"
    )
    for f in pages:
        out = render_php_file(os.path.join(BASE, f))
        if "<?php" in out:
            warnings.append(f"{f}: leftover <?php after render")
        out_name = f[:-4] + ".html"
        open(os.path.join(BASE, out_name), "w").write(out)
        print(f"{f} -> {out_name}")

    print("\nPages:", len(pages))
    if warnings:
        print("\nWARNINGS:")
        for w in warnings:
            print(" -", w)
        sys.exit(1)


if __name__ == "__main__":
    main()
