// The two overlapping diamonds from the original portfolio, redrawn.
export default function Logo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
      <polygon points="14,2 26,14 14,26 2,14" fill="none" stroke="currentColor" strokeWidth="2.25" />
      <polygon points="20,8 30,18 20,28 10,18" fill="var(--signal)" stroke="currentColor" strokeWidth="2.25" />
    </svg>
  );
}
