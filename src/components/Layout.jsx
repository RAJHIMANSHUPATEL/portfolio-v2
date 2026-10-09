import { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollTrigger, fontsReady } from '../motion/gsap';
import { initSmoothScroll, scrollToTop } from '../motion/smoothScroll';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => initSmoothScroll(), []);

  // New route: start at the top, then let ScrollTrigger re-measure once the
  // new page and its fonts have settled.
  useLayoutEffect(() => {
    scrollToTop();
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    fontsReady.then(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <div id="page">
        <main id="main" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer compact={pathname === '/contact'} />
      </div>
    </>
  );
}
