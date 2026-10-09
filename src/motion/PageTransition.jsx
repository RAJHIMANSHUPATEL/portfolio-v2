import { createContext, useCallback, useContext, useRef } from 'react';
import { Link, useLocation, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { gsap, ScrollTrigger, EASE, reducedMotion, setEntranceDelay } from './gsap';
import { scrollToTop } from './smoothScroll';

// Page transitions: a signal-coloured panel wipes up, names the destination,
// then lifts away. Routing stays plain React Router; this only wraps navigation.
const TransitionContext = createContext({ go: () => {} });

export const usePageNav = () => useContext(TransitionContext);

export function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const overlay = useRef(null);
  const label = useRef(null);
  const busy = useRef(false);

  const go = useCallback(
    (to, text) => {
      if (busy.current) return;
      if (reducedMotion() || !overlay.current) {
        navigate(to);
        return;
      }

      busy.current = true;
      const panel = overlay.current;
      const word = label.current;
      word.textContent = text || '';

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(panel, { display: 'none' });
          setEntranceDelay(0.1);
          busy.current = false;
          ScrollTrigger.refresh();
        },
      });

      tl.set(panel, { display: 'grid', clipPath: 'inset(100% 0% 0% 0%)' })
        .set(word, { yPercent: 115 })
        .to(panel, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: EASE.inOut })
        .to(word, { yPercent: 0, duration: 0.6, ease: EASE.out }, '-=0.3')
        .add(() => {
          // The new page mounts underneath the panel and queues its entrance
          // to begin as the panel lifts.
          setEntranceDelay(0.55);
          navigate(to);
          scrollToTop();
        })
        .to(word, { yPercent: -115, duration: 0.5, ease: 'power3.in' }, '+=0.3')
        .to(panel, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8, ease: EASE.inOut }, '-=0.25');
    },
    [navigate],
  );

  return (
    <TransitionContext.Provider value={{ go, pathname }}>
      {children}
      <div ref={overlay} className="transition" aria-hidden="true">
        <span className="transition-mask">
          <span ref={label} className="transition-label" />
        </span>
      </div>
    </TransitionContext.Provider>
  );
}

const isModified = (event) =>
  event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

/** Drop-in replacement for <Link> that plays the page transition. */
export function TLink({ to, label: text, onClick, children, ...rest }) {
  const { go, pathname } = usePageNav();

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || isModified(event) || rest.target === '_blank') return;
    if (typeof to === 'string' && to.split('#')[0] === pathname) return;
    event.preventDefault();
    go(to, text);
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

/** Like NavLink: sets aria-current and an is-active class. */
export function TNavLink({ to, label, end = false, className = '', children, ...rest }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end });

  return (
    <TLink
      to={to}
      label={label}
      className={`${className} ${match ? 'is-active' : ''}`.trim()}
      aria-current={match ? 'page' : undefined}
      {...rest}
    >
      {children}
    </TLink>
  );
}
