import { Fragment } from 'react';
import { gsap, ScrollTrigger, useGsap, EASE, fontsReady, getEntranceDelay } from '../motion/gsap';

/**
 * Text that rises out of a mask, word by word.
 * - Use "\n" in `text` to force a line break.
 * - mode="load" plays after fonts are ready; mode="scroll" plays on entering the viewport.
 * The real text is always present for assistive tech and for no-JS / reduced motion.
 */
export default function MaskText({
  text,
  as: Tag = 'span',
  mode = 'scroll',
  delay = 0,
  stagger = 0.06,
  duration = 1.1,
  className = '',
}) {
  const lines = text.split('\n');

  const ref = useGsap(
    (root) => {
      const inners = root.querySelectorAll('.mask-in');
      gsap.set(inners, { yPercent: 115 });

      const play = () =>
        gsap.to(inners, { yPercent: 0, duration, ease: EASE.out, stagger });

      if (mode === 'load') {
        let live = true;
        fontsReady.then(() => {
          if (!live) return;
          gsap.delayedCall(getEntranceDelay() + delay, play);
        });
        return () => {
          live = false;
        };
      }

      const trigger = ScrollTrigger.create({
        trigger: root,
        start: 'top 90%',
        once: true,
        onEnter: () => gsap.delayedCall(delay, play),
      });
      return () => trigger.kill();
    },
    [text, mode],
  );

  return (
    <Tag ref={ref} className={`mask-text ${className}`}>
      <span className="sr-only">{text.replace(/\n/g, ' ')}</span>
      <span aria-hidden="true">
        {lines.map((line, li) => (
          <span key={li} className="mask-line">
            {line.split(' ').map((word, wi, arr) => (
              <Fragment key={wi}>
                <span className="mask">
                  <span className="mask-in">{word}</span>
                </span>
                {wi < arr.length - 1 ? ' ' : null}
              </Fragment>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  );
}
