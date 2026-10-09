import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';
import { nav, site } from '../data/site';
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`;

  return (
    <header className={`nav ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label={`${site.name}, home`}>
          <span className="brand-mark" aria-hidden="true">
            H
          </span>
          <span className="brand-name">{site.shortName}</span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Button to="/contact" size="sm" className="nav-cta">
            Start a project
          </Button>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`nav-mobile ${open ? 'is-open' : ''}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <div className="container nav-mobile-inner">
          {[{ to: '/', label: 'Home' }, ...nav, { to: '/contact', label: 'Contact' }].map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
