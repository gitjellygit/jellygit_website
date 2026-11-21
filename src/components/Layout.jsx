import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import FloatingIcons from './FloatingIcons.jsx';
import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

// Pages that used header.php (variant 1); all others used header2.php (variant 2)
const V1_PAGES = new Set([
  '/', '/index', '/branding', '/business-technology-services',
  '/cmsdevelopment-services', '/design-services', '/digital-marketing-services',
  '/digital-transformation-services', '/mobility-services',
  '/product-engineering-services', '/products', '/qat-services',
  '/staffingsolution', '/technology-consultancy-services',
]);

// Legacy global scripts, loaded in the same effective order the PHP site had:
// jQuery -> Popper -> Bootstrap 4 JS -> animations/plugins.
const GLOBAL_SCRIPTS = [
  '/js/jquery.min.js',
  'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
  '/lib/wow/wow.min.js',
  '/lib/superfish/hoverIntent.js',
  '/lib/superfish/superfish.min.js',
  '/js/main.js',
  '/js/particles.js',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
];

let scriptsLoaded = false;

function loadScriptsSequentially(list) {
  return list.reduce(
    (p, src) =>
      p.then(
        () =>
          new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = () => resolve();
            s.onerror = () => resolve(); // don't block the site on a CDN failure
            document.body.appendChild(s);
          })
      ),
    Promise.resolve()
  );
}

function isInternalLink(anchor, href) {
  if (!href) return false;
  if (href.startsWith('#') || /^(mailto:|tel:|javascript:)/i.test(href)) return false;
  if (anchor.target === '_blank' || anchor.hasAttribute('download')) return false;
  try {
    const url = new URL(href, window.location.origin + window.location.pathname);
    if (url.origin !== window.location.origin) return false;
    // skip asset paths (they contain a file extension)
    const last = url.pathname.split('/').pop() || '';
    if (last.includes('.')) return false;
    return true;
  } catch {
    return false;
  }
}

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const variant = V1_PAGES.has(location.pathname) ? 1 : 2;

  // Load legacy global scripts once, after first mount
  useEffect(() => {
    if (scriptsLoaded) return;
    scriptsLoaded = true;
    loadScriptsSequentially(GLOBAL_SCRIPTS);
  }, []);

  // SPA navigation for internal links + scroll restoration
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor || e.defaultPrevented) return;
      const href = anchor.getAttribute('href');
      if (!isInternalLink(anchor, href)) return;
      e.preventDefault();
      const url = new URL(href, window.location.origin);
      navigate(url.pathname + url.search + url.hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // re-init WOW for freshly mounted .wow elements
    const t = setTimeout(() => {
      try {
        if (window.WOW) new window.WOW().init();
      } catch {}
    }, 60);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <FloatingIcons />
      <SiteHeader variant={variant} />
      <Outlet />
      <SiteFooter />
    </>
  );
}
