import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, reducedMotion } from './gsap';

// One scroll system: Lenis owns the scroll position and GSAP's ticker drives
// it, so ScrollTrigger and Lenis can never disagree about where the page is.
let lenis = null;

export const getLenis = () => lenis;

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function initSmoothScroll() {
  if (reducedMotion() || lenis) return () => {};

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // Touch devices keep their native momentum scrolling.
    syncTouch: false,
  });

  lenis.on('scroll', ScrollTrigger.update);
  const raf = (time) => lenis && lenis.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    lenis?.destroy();
    lenis = null;
  };
}
