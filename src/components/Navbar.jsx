import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { nav, site } from '../data/site';
import { TLink, TNavLink } from '../motion/PageTransition';
import { getLenis } from '../motion/smoothScroll';
import Logo from './Logo';

const items = [...nav, { to: '/contact', label: 'Contact' }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const header = useRef(null);
  const toggle = useRef(null);
  const { pathname } = useLocation();

  openRef.current = open;

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll behaviour: hide while reading downward, return on any upward scroll,
  // and adopt the colour theme of whichever section sits beneath the bar.
  useEffect(() => {
    const el = header.current;
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const probe = el.offsetHeight / 2;
      let theme = 'paper';
      document.querySelectorAll('[data-nav-theme]').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) theme = section.dataset.navTheme;
      });
      el.dataset.theme = theme;
      el.classList.toggle('is-stuck', y > 24);
      el.classList.toggle('is-hidden', y > last && y > 160 && !openRef.current);
      last = y;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    last = window.scrollY;
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  // Menu: lock scroll, make the page inert, Escape to close, return focus.
  useEffect(() => {
    const page = document.getElementById('page');
    if (!open) return undefined;

    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.classList.add('menu-open');
    if (page) page.inert = true;
    header.current?.classList.remove('is-hidden');

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-open');
      if (page) page.inert = false;
      lenis?.start();
    };
  }, [open]);

  return (
    <header ref={header} className="nav" data-theme="paper">
      <div className="nav-bar">
        <TLink to="/" label="Home" className="brand" aria-label={`${site.name}, home`}>
          <Logo />
          <span className="brand-name">{site.name}</span>
          <span className="brand-short" aria-hidden="true">
            HRP
          </span>
        </TLink>

        <nav className="nav-links" aria-label="Primary">
          {items.map((item) => (
            <TNavLink key={item.to} to={item.to} label={item.label} className="nav-link">
              {item.label}
            </TNavLink>
          ))}
        </nav>

        <button
          ref={toggle}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="menu" className={`menu theme-ink ${open ? 'is-open' : ''}`} aria-hidden={!open} {...(!open ? { inert: '' } : {})}>
        <nav className="menu-inner" aria-label="Mobile">
          <ol className="menu-list">
            {[{ to: '/', label: 'Home' }, ...items].map((item, i) => (
              <li key={item.to} style={{ '--i': i }}>
                <TNavLink to={item.to} label={item.label} end={item.to === '/'} className="menu-link">
                  <span className="menu-idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="menu-text">{item.label}</span>
                </TNavLink>
              </li>
            ))}
          </ol>
          <p className="menu-foot">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.location}</span>
          </p>
        </nav>
      </div>
    </header>
  );
}
