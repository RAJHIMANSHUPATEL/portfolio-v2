import { gsap, useGsap } from '../motion/gsap';

/** Frames media and drifts it a few percent against the scroll. */
export default function ParallaxMedia({ amount = 5, className = '', children }) {
  const ref = useGsap((frame) => {
    const inner = frame.firstElementChild;
    gsap.fromTo(
      inner,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  return (
    <div ref={ref} className={`parallax ${className}`}>
      <div className="parallax-inner">{children}</div>
    </div>
  );
}
