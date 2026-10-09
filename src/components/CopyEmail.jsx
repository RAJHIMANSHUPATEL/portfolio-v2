import { useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';
import { site } from '../data/site';

export default function CopyEmail({ large = false }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  };

  return (
    <div className={`copy-email ${large ? 'is-large' : ''}`}>
      <a href={`mailto:${site.email}`} className="copy-email-link">
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
