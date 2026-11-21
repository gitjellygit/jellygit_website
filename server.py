#!/usr/bin/env python3
"""Serves the built React SPA (dist/) + contact-form email endpoint.

Stdlib only. Run from the site root:  python3 server.py
Configure via environment variables (see .env.example):
    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM, PORT
"""
import mimetypes
import os
import smtplib
import sys
import urllib.parse
from email.message import EmailMessage
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

BASE = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(BASE, "dist")
if not os.path.isdir(DIST):
    DIST = BASE  # dev fallback: serve project root
PORT = int(os.environ.get("PORT", "8000"))

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.hostinger.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "465"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASS = os.environ.get("SMTP_PASS", "")
MAIL_TO = os.environ.get("MAIL_TO", "contact@jellygit.com")
MAIL_FROM = os.environ.get("MAIL_FROM", SMTP_USER or MAIL_TO)


def send_mail(form):
    msg = EmailMessage()
    msg["From"] = MAIL_FROM
    msg["To"] = MAIL_TO
    msg["Reply-To"] = form.get("Email", "")
    msg["Subject"] = f"Website contact: {form.get('UName', '')} ({form.get('Contact', '')})"
    msg.set_content(
        "New message from the jellygit.com contact form:\n\n"
        f"Name:    {form.get('UName', '')}\n"
        f"Email:   {form.get('Email', '')}\n"
        f"Contact: {form.get('Contact', '')}\n\n"
        f"Message:\n{form.get('msg', '')}\n"
    )
    if SMTP_PORT == 465:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=15) as s:
            smtp_login(s)
            s.send_message(msg)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=15) as s:
            s.starttls()
            smtp_login(s)
            s.send_message(msg)


def smtp_login(server):
    try:
        server.login(SMTP_USER, SMTP_PASS)
    except TypeError:
        # Python 3.9 smtplib CRAM-MD5 bytes/str bug — retry with PLAIN
        import base64
        token = base64.b64encode(f"\0{SMTP_USER}\0{SMTP_PASS}".encode()).decode()
        code, resp = server.docmd("AUTH", "PLAIN " + token)
        if code != 235:
            raise smtplib.SMTPException(f"SMTP auth failed: {code} {resp}")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=DIST, **kw)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def _redirect(self, location):
        self.send_response(301)
        self.send_header("Location", location)
        self.end_headers()

    def do_GET(self):
        path = urllib.parse.urlparse(self.path).path

        if path.endswith(".php"):
            self._redirect(path[:-4] or "/")
            return
        # strip a trailing .html for canonical clean URLs
        if path.endswith(".html"):
            self._redirect(path[:-5] or "/")
            return

        # SPA fallback: serve real files; everything else -> index.html
        fs_path = os.path.join(DIST, path.lstrip("/"))
        if path != "/" and os.path.isfile(fs_path):
            return super().do_GET()
        if path == "/":
            self.path = "/index.html"
            return super().do_GET()
        # known asset-ish extensions that are missing -> real 404
        if os.path.splitext(path)[1]:
            self.send_error(404)
            return
        self.path = "/index.html"
        return super().do_GET()

    def do_HEAD(self):
        return self.do_GET()

    def do_POST(self):
        path = urllib.parse.urlparse(self.path).path
        if path != "/send-email":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", 0))
        form = urllib.parse.parse_qs(self.rfile.read(length).decode("utf-8", "replace"))
        form = {k: v[0] for k, v in form.items()}

        ok = all(form.get(k, "").strip() for k in ("UName", "Email", "Contact", "msg", "btn-send"))
        try:
            if ok:
                send_mail(form)
            target = "/contact?" + ("success" if ok else "error")
        except Exception as e:
            sys.stderr.write(f"send_mail failed: {e}\n")
            target = "/contact?error"

        self.send_response(303)
        self.send_header("Location", target)
        self.send_header("Content-Length", "0")
        self.end_headers()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(f"Serving {DIST} on http://0.0.0.0:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
