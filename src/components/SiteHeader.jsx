import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { href: 'index', label: 'Home' },
  { href: 'about', label: 'About Us' },
  {
    href: 'services',
    label: 'Services',
    submenu: [
      ['product-engineering-services', 'Product Engineering Services'],
      ['mobility-services', 'Mobility Services'],
      ['business-technology-services', 'Business Technology Services'],
      ['cmsdevelopment-services', 'CMS Development'],
      ['digital-marketing-services', 'Digital Marketing Services'],
      ['design-services', 'Design Services'],
      ['qat-services', 'Quality Assurance and Testing'],
      ['digital-transformation-services', 'Digital Transformation Services'],
      ['technology-consultancy-services', 'Technology Consultancy'],
    ],
  },
  { href: 'staffingsolution', label: 'Staffing Solutions' },
  { href: 'products', label: 'JellyGit ERP' },
  { href: 'branding', label: 'Branding' },
  { href: 'team', label: 'Team' },
  { href: 'portfolio', label: 'Portfolio' },
  { href: 'blog', label: 'Blog' },
  { href: 'contact', label: 'Contact Us' },
];

export default function SiteHeader({ variant = 2 }) {
  const location = useLocation();
  const headerRef = useRef(null);

  // Replicates the legacy jQuery "menu-active" highlight on route change
  useEffect(() => {
    const cur = location.pathname === '/' ? '/index' : location.pathname;
    headerRef.current?.querySelectorAll('.nav-menu > li > a').forEach((a) => {
      const menuURL = (a.getAttribute('href') || '').replace('.php', '');
      const li = a.closest('li');
      li?.classList.remove('menu-active');
      if (menuURL && (cur.endsWith(menuURL) || menuURL === '')) {
        li?.classList.add('menu-active');
      }
    });
  }, [location]);

  const isV2 = variant === 2;

  return (
    <header id="header" className={isV2 ? 'header-custome2' : 'header-custome'} ref={headerRef}>
      <div className="container">
        <div id="logo" className="pull-left">
          <a href="/">
            <h1>
              <img src="/img/Logo.png" alt="JELLYGIT" />
            </h1>
          </a>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={item.submenu ? 'menu-has-children' : undefined}>
                <a href={`/${item.href}`}>{item.label}</a>
                {item.submenu && (
                  <ul className={isV2 ? 'ul-new-sub-menu' : undefined}
                      style={isV2 ? { color: '#fff' } : undefined}>
                    {item.submenu.map(([href, label]) => (
                      <li key={href}>
                        <a href={`/${href}`}>{label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
