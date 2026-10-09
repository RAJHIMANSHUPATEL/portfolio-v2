import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuArrowUpRight, LuDownload } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { site } from '../data/site';
import Availability from '../components/Availability';
import Button from '../components/Button';
import CopyEmail from '../components/CopyEmail';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';

const projectTypes = [
  'Backend / API development',
  'Real-time system',
  'Payments or third-party integration',
  'Performance or cost reduction',
  'Full-stack product',
  'Something else',
];

export default function Contact() {
  usePageMeta('Contact', 'Start a project or ask a question. Email Himanshu Raj Patel or send a short brief using the form.');

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
      <PageHead
        label="Contact"
        title={'Let\u2019s talk.'}
        lead={'A few sentences about what you\u2019re building and what\u2019s in the way is plenty to get started.'}
      >
        <Availability />
      </PageHead>

      <section className="contact wrap">
        <Reveal as="aside" className="contact-aside" aria-label="Direct contact">
          <div className="contact-block">
            <p className="label">Email</p>
            <CopyEmail large />
          </div>

          <div className="contact-block">
            <p className="label">Elsewhere</p>
            <ul className="contact-links">
              <li>
                <a className="link-u" href={site.social.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" /> GitHub<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a className="link-u" href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn aria-hidden="true" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a className="link-u" href={site.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaXTwitter aria-hidden="true" /> X<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-block">
            <p className="label">Based in</p>
            <p>{site.location}</p>
          </div>

          <Button href={site.resumePath} variant="outline" size="sm" download icon={<LuDownload aria-hidden="true" />}>
            Download r&eacute;sum&eacute;
          </Button>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.1}>
          <form className="form" onSubmit={onSubmit} noValidate={false}>
            <input type="hidden" name="_subject" value="New project enquiry from the portfolio" />
            {/* Honeypot: real visitors never see or fill this in. */}
            <input type="text" name="_gotcha" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="form-row">
              <label className="field">
                <span className="field-label label">Name</span>
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label className="field">
                <span className="field-label label">Email</span>
                <input type="email" name="email" required autoComplete="email" />
              </label>
            </div>

            <label className="field">
              <span className="field-label label">What do you need?</span>
              <select name="project_type" required defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field-label label">Tell me about it</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder={'What are you building, what\u2019s the problem, and when do you need it?'}
              />
            </label>

            <div className="form-foot">
              <Button type="submit" disabled={status === 'sending'} icon={<LuArrowUpRight aria-hidden="true" />}>
                {status === 'sending' ? 'Sending\u2026' : 'Send message'}
              </Button>
              <p className={`form-status form-${status}`} role="status">
                {status === 'success' && 'Thanks, your message is in. I\u2019ll reply by email.'}
                {status === 'error' && `Something went wrong. Please email ${site.email} directly.`}
              </p>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}
