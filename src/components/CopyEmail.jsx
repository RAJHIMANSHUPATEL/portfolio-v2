import { useRef, useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';
import { site } from '../data/site';

/** Email link with a one-click copy button and an accessible status message. */
export default function CopyEmail({ large = false }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const area = document.createElement('textarea');
      area.value = site.email;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`copy-email ${large ? 'is-large' : ''}`}>
      <a className="copy-email-link" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <button type="button" className="copy-email-btn" onClick={copy}>
        {copied ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <span className="sr-only" role="status">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </div>
  );
}
