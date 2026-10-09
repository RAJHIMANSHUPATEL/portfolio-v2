import { useState } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { categories, projects } from '../data/projects';
import PageHead from '../components/PageHead';
import WorkIndex from '../components/WorkIndex';

export default function Work() {
  usePageMeta(
    'Work',
    'Case studies from Himanshu Raj Patel: Redis performance work, a courier-aggregation logistics API, real-time ballistic tracking, a CRM, a booking platform and a three-app grocery system.',
  );

  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <PageHead
        label="Index"
        title="Work"
        lead="Each project starts with the problem, then covers what I built and what changed. Open any row for the full case study."
      />

      <section className="work-index">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter ${active === cat ? 'is-active' : ''}`}
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
            <p className="filter-count label" role="status">
              {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          <WorkIndex key={active} items={visible} />
        </div>
      </section>
    </>
  );
}
