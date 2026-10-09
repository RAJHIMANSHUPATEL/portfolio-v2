import { Link } from 'react-router-dom';

// One button for internal links (to), external/mailto links (href) and real buttons.
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = null,
  className = '',
  children,
  ...rest
}) {
  const cls = `btn btn-${variant} btn-${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
