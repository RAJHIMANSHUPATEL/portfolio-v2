import { LuArrowRight } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import Button from '../components/Button';
import PageHead from '../components/PageHead';

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for does not exist.');

  return (
    <PageHead
      label="404"
      title={'Nothing\nhere.'}
      lead="The link may be broken, or the page may have moved."
    >
      <div className="btn-row page-actions">
        <Button to="/" transitionLabel="Home" icon={<LuArrowRight aria-hidden="true" />}>
          Back to home
        </Button>
        <Button to="/work" variant="outline" transitionLabel="Work">
          View work
        </Button>
      </div>
    </PageHead>
  );
}
