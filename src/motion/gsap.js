import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Motion tokens. These mirror --dur-* and --ease-* in styles/tokens.css.
export const DUR = { fast: 0.2, base: 0.45, slow: 0.9, xslow: 1.3 };
export const EASE = {
  out: 'expo.out', // entrances
  inOut: 'power4.inOut', // wipes and page transitions
  std: 'power2.out', // small state changes
};

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Entrance animations wait for the web fonts so text never reflows mid-reveal.
// A timeout guarantees we never wait longer than 1.2s.
export const fontsReady =
  typeof document === 'undefined' || !document.fonts
    ? Promise.resolve()
    : Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 1200))]);

// How long a freshly mounted page should wait before its entrance plays.
// The page-transition wipe raises this so entrances start as the wipe lifts.
let entranceDelay = 0.1;
export const getEntranceDelay = () => entranceDelay;
export const setEntranceDelay = (value) => {
  entranceDelay = value;
};

/**
 * Runs a GSAP setup function inside a context scoped to the returned ref.
 * Everything created is reverted on unmount. Skipped entirely when the
 * visitor prefers reduced motion, so content simply stays in its final state.
 */
export function useGsap(setup, deps = []) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    if (reducedMotion()) return undefined;
    const ctx = gsap.context(() => setup(scope.current), scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}

export { gsap, ScrollTrigger };
