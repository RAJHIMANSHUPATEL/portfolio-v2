import { Fragment } from 'react';
import { gsap, useGsap } from '../motion/gsap';

/**
 * A statement whose words come into focus as you scroll past them, so the
 * reading pace is set by the reader. Segments marked `em` render in the serif
 * italic. All words are in the DOM at full opacity without JavaScript.
 */
export default function ScrubText({ segments, className = '' }) {
  const ref = useGsap((el) => {
    const words = el.querySelectorAll('.sw');
    gsap.fromTo(
      words,
      { opacity: 0.22 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 58%', scrub: true },
      },
    );
  });

  return (
    <p ref={ref} className={`scrub ${className}`}>
      {segments.map((segment, si) =>
        segment.text.split(' ').map((word, wi, arr) => (
          <Fragment key={`${si}-${wi}`}>
            {segment.em ? (
              <em className="sw">{word}</em>
            ) : (
              <span className="sw">{word}</span>
            )}
            {wi < arr.length - 1 || si < segments.length - 1 ? ' ' : null}
          </Fragment>
        )),
      )}
    </p>
  );
}
