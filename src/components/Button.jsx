import { TLink } from '../motion/PageTransition';

/**
 * variant: solid | outline
 * size: md | sm
 * Use `to` for internal routes (plays the page transition), `href` for
 * external links, mailto: and downloads.
 */
export default function Button({
  to,
  href,
  variant = 'solid',
  size = 'md',
  icon,
  transitionLabel,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();
  const inner = (
    <>
      <span className="btn-sweep" aria-hidden="true" />
      <span className="btn-label">{children}</span>
      {icon ? <span className="btn-icon">{icon}</span> : null}
    </>
  );

  if (to) {
    return (
      <TLink to={to} label={transitionLabel} className={classes} {...rest}>
        {inner}
      </TLink>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {inner}
    </button>
  );
}
