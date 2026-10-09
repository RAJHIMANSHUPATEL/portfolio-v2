import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { nav, site } from '../data/site';

const socials = [
  { href: site.social.github, label: 'GitHub', Icon: FaGithub },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: site.social.twitter, label: 'X (Twitter)', Icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-name">{site.name}</p>
          <p className="footer-text">
            {site.role} based in {site.location}. Building APIs, real-time systems and integrations
            that stay fast and reliable.
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <p className="footer-heading">Pages</p>
          {[{ to: '/', label: 'Home' }, ...nav, { to: '/contact', label: 'Contact' }].map((item) => (
            <Link key={item.to} to={item.to} className="footer-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-col">
          <p className="footer-heading">Get in touch</p>
          <a href={`mailto:${site.email}`} className="footer-link">
            {site.email}
          </a>
          <a href={site.resumePath} className="footer-link" target="_blank" rel="noopener noreferrer">
            Résumé (PDF)
          </a>
          <ul className="footer-socials">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
