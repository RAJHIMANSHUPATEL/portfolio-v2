import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { LuArrowUpRight } from 'react-icons/lu';
import { nav, site } from '../data/site';
import { TLink } from '../motion/PageTransition';
import { getLenis, scrollToTop } from '../motion/smoothScroll';
import Button from './Button';
import CopyEmail from './CopyEmail';
import LocalTime from './LocalTime';
import MaskText from './MaskText';
import Reveal from './Reveal';

const pages = [{ to: '/', label: 'Home' }, ...nav, { to: '/contact', label: 'Contact' }];

function backToTop() {
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(0, { duration: 1.6 });
  else scrollToTop();
}

/**
 * The page's closing statement. `compact` drops the call to action on the
 * contact page, where the form already is one.
 */
export default function Footer({ compact = false }) {
  return (
    <footer className="footer theme-signal" data-nav-theme="signal">
      {!compact && (
        <div className="footer-cta wrap">
          <p className="label">(05) Contact</p>
          <MaskText as="h2" className="footer-title" text={'Let\u2019s build\nsomething that\nholds up.'} />
          <Reveal className="footer-actions">
            <CopyEmail large />
            <Button to="/contact" transitionLabel="Contact" icon={<LuArrowUpRight aria-hidden="true" />}>
              Start a project
            </Button>
          </Reveal>
        </div>
      )}

      <div className="footer-bar wrap">
        <div className="footer-col">
          <p className="footer-name">{site.name}</p>
          <p className="footer-note">
            {site.role}. {site.location} &middot; <LocalTime />
          </p>
        </div>

        <nav className="footer-col" aria-label="Pages">
          <p className="label">Pages</p>
          <ul>
            {pages.map((item) => (
              <li key={item.to}>
                <TLink to={item.to} label={item.label} className="link-u">
                  {item.label}
                </TLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <p className="label">Elsewhere</p>
          <ul>
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
            <li>
              <a className="link-u" href={site.resumePath} download>
                R&eacute;sum&eacute; (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-base wrap">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <button type="button" className="link-u" onClick={backToTop}>
          Back to top
        </button>
      </div>
    </footer>
  );
}
