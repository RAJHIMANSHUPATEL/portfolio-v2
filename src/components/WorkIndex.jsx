import { useEffect, useRef, useState } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { TLink } from '../motion/PageTransition';
import { gsap, reducedMotion } from '../motion/gsap';
import ProjectVisual from './ProjectVisual';
import Reveal from './Reveal';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/**
 * The project index. Every row is a link with its headline result visible.
 * On devices with a mouse, a preview follows the pointer and swaps per row.
 * On touch devices the preview is hidden and the result stays in the row.
 */
export default function WorkIndex({ items }) {
  const list = useRef(null);
  const preview = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const listEl = list.current;
    const el = preview.current;
    if (!listEl || !el || reducedMotion()) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0.7, opacity: 0, rotation: 0 });
    const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3' });
    const rotTo = gsap.quickTo(el, 'rotation', { duration: 0.6, ease: 'power3' });
    let lastX = 0;
    let first = true;

    const onMove = (event) => {
      if (first) {
        // Jump to the pointer instead of flying in from the corner.
        gsap.set(el, { x: event.clientX, y: event.clientY });
        first = false;
      }
      xTo(event.clientX);
      yTo(event.clientY);
      rotTo(clamp((event.clientX - lastX) * 0.35, -9, 9));
      lastX = event.clientX;
    };
    let shown = false;
    const onEnter = () => {
      shown = true;
      gsap.to(el, { scale: 1, opacity: 1, duration: 0.5, ease: 'expo.out', overwrite: 'auto' });
    };
    const onLeave = () => {
      shown = false;
      first = true;
      gsap.to(el, { scale: 0.7, opacity: 0, duration: 0.35, ease: 'power2.in', overwrite: 'auto' });
    };
    // Smooth scrolling can move the list out from under a still pointer without
    // a mouseleave, so hide the preview whenever the list is no longer hovered.
    const onScroll = () => {
      if (shown && !listEl.matches(':hover')) onLeave();
    };

    listEl.addEventListener('mousemove', onMove);
    listEl.addEventListener('mouseenter', onEnter);
    listEl.addEventListener('mouseleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      listEl.removeEventListener('mousemove', onMove);
      listEl.removeEventListener('mouseenter', onEnter);
      listEl.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <>
      <ol ref={list} className={`wi ${active ? 'has-active' : ''}`}>
        {items.map((project, i) => (
          <li key={project.slug}>
            <Reveal y={24}>
              <TLink
                to={`/work/${project.slug}`}
                label={project.title}
                className={`wi-row ${active === project.slug ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(project.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(project.slug)}
                onBlur={() => setActive(null)}
              >
                <span className="wi-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="wi-main">
                  <span className="wi-title">{project.title}</span>
                  <span className="wi-meta">
                    {project.context} &middot; {project.categories.join(' / ')}
                  </span>
                </span>
                <span className="wi-metric">
                  <span className="wi-metric-value">{project.headline.value}</span>
                  <span className="wi-metric-label">{project.headline.label}</span>
                </span>
                <LuArrowUpRight className="wi-arrow" aria-hidden="true" />
              </TLink>
            </Reveal>
          </li>
        ))}
      </ol>

      <div ref={preview} className="wi-preview" aria-hidden="true">
        {items.map((project) => (
          <div key={project.slug} className={`wi-layer ${active === project.slug ? 'is-active' : ''}`}>
            <ProjectVisual project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
