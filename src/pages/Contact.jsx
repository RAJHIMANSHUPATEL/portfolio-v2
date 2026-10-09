import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuDownload, LuMapPin } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { site } from '../data/site';
import Availability from '../components/Availability';
import Button from '../components/Button';
import CopyEmail from '../components/CopyEmail';

const projectTypes = [
  'Backend / API development',
  'Real-time system',
  'Payments or third-party integration',
  'Performance or cost reduction',
  'Full-stack product',
  'Something else',
];

export default function Contact() {
  usePageMeta(
    'Contact',
    'Start a project or ask a question. Email Himanshu Raj Patel or send a short brief using the form.',
  );

  // idle | sending | success | error
  const [status, setStatus] = useState('idle');

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Availability />
          <h1 className="page-title">Let&apos;s talk about your project</h1>
          <p className="page-lead">
            A few sentences about what you&apos;re building and what&apos;s in the way is plenty to
            get started.
          </p>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="container contact-grid">
          <aside className="contact-aside" aria-label="Direct contact">
            <div className="contact-block">
              <p className="contact-label">Email</p>
              <CopyEmail large />
            </div>

            <div className="contact-block">
              <p className="contact-label">Elsewhere</p>
              <ul className="contact-links">
                <li>
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </li>
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn aria-hidden="true" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaXTwitter aria-hidden="true" /> X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-block">
              <p className="contact-label">Based in</p>
              <p className="contact-place">
                <LuMapPin aria-hidden="true" /> {site.location}
              </p>
            </div>

            <Button
              href={site.resumePath}
              variant="ghost"
              size="sm"
              icon={<LuDownload aria-hidden="true" />}
              download="Himanshu_Raj_Patel_Resume.pdf"
            >
              Download résumé
            </Button>
          </aside>

          <form className="form" onSubmit={onSubmit} noValidate={false}>
            <input type="hidden" name="_subject" value="New project enquiry from portfolio" />
            {/* Honeypot: hidden from people, filled by bots. */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hp"
              aria-hidden="true"
            />

            <div className="form-row">
              <label className="field" htmlFor="name">
                <span>Name</span>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </label>
              <label className="field" htmlFor="email">
                <span>Email</span>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </label>
            </div>

            <label className="field" htmlFor="type">
              <span>What do you need?</span>
              <select id="type" name="project_type" defaultValue="" required>
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="field" htmlFor="message">
              <span>Tell me about it</span>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                placeholder="What are you building, what's the problem, and when do you need it?"
              />
            </label>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary btn-md" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
              </button>
              <p className="form-status" role="status" aria-live="polite">
                {status === 'success' && 'Thanks, your message has been sent.'}
                {status === 'error' &&
                  `Something went wrong. Please email me directly at ${site.email}.`}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
