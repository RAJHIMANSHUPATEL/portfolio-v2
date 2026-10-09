import { useState } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import { categories, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import CopyEmail from '../components/CopyEmail';
import Button from '../components/Button';

export default function Work() {
  usePageMeta(
    'Work',
    'Case studies in backend engineering: logistics APIs, Redis performance work, real-time systems, payments and full-stack products.',
  );

  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Work</p>
          <h1 className="page-title">Case studies</h1>
          <p className="page-lead">
            Each one starts with the problem, then covers what I built and what changed. Open any
            project for the details.
          </p>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${active === cat ? 'is-active' : ''}`}
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="filter-count" role="status">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          <div className="card-grid card-grid-2">
            {visible.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Have something similar in mind?</h2>
            <p>Send a short description and I&apos;ll get back to you.</p>
            <div className="cta-actions">
              <Button to="/contact">Start a project</Button>
              <CopyEmail />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
