import { gsap, ScrollTrigger, useGsap } from '../motion/gsap';

const PATTERN = /^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/;

/**
 * Counts a figure up from zero once it scrolls into view. Values without a
 * number ("Auto", "RBAC") render as plain text. Assistive tech always reads
 * the final value.
 */
export default function Counter({ value, className = '' }) {
  const match = value.match(PATTERN);
  const [, prefix = '', digits = '', suffix = ''] = match || [];
  const target = match ? parseFloat(digits.replace(/,/g, '')) : 0;

  const ref = useGsap(
    (root) => {
      if (!match) return undefined;
      const out = root.querySelector('[data-count]');
      const state = { v: 0 };
      out.textContent = '0';

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: 'top 88%',
        once: true,
        onEnter: () =>
          gsap.to(state, {
            v: target,
            duration: 1.8,
            ease: 'power3.out',
            onUpdate: () => {
              out.textContent = Math.round(state.v).toString();
            },
            onComplete: () => {
              out.textContent = digits;
            },
          }),
      });

      return () => {
        trigger.kill();
        out.textContent = digits;
      };
    },
    [value],
  );

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {prefix}
        <span data-count>{digits}</span>
        {suffix}
      </span>
    </span>
  );
}
