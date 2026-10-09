import { LuArrowRight } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import Button from '../components/Button';

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for does not exist.');

  return (
    <section className="page-hero not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page doesn&apos;t exist</h1>
        <p className="page-lead">The link may be broken, or the page may have moved.</p>
        <div className="hero-actions">
          <Button to="/" icon={<LuArrowRight aria-hidden="true" />}>
            Back to home
          </Button>
          <Button to="/work" variant="ghost">
            View work
          </Button>
        </div>
      </div>
    </section>
  );
}
