import { gsap, ScrollTrigger, useGsap, EASE } from '../motion/gsap';

/** Fades and lifts a block into place once, when it enters the viewport. */
export default function Reveal({ as: Tag = 'div', delay = 0, y = 32, className = '', children, ...rest }) {
  const ref = useGsap((el) => {
    gsap.set(el, { opacity: 0, y });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: EASE.out, delay }),
    });
    return () => trigger.kill();
  });

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
