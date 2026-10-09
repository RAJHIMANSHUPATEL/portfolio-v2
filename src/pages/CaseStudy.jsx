import { Link, useParams } from 'react-router-dom';
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa6';
import usePageMeta from '../hooks/usePageMeta';
import { getProject, projects } from '../data/projects';
import FlowDiagram from '../components/FlowDiagram';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import NotFound from './NotFound';

function Showcase({ item }) {
  return (
    <article className="showcase">
      <div className="showcase-media">
        <img src={item.image} alt="" loading="lazy" />
      </div>
      <div className="showcase-body">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>

        <div className="showcase-links">
          {item.portal ? (
            <Button href={item.portal} size="sm" icon={<LuArrowUpRight aria-hidden="true" />}>
              Live demo
            </Button>
          ) : (
            <span className="badge-soft">Live demo coming soon</span>
          )}
          {item.github && (
            <Button href={item.github} variant="ghost" size="sm" icon={<FaGithub aria-hidden="true" />}>
              Source
            </Button>
          )}
        </div>

        {item.logins?.length > 0 && (
          <details className="demo-access">
            <summary>Demo access</summary>
            <div className="demo-list">
              {item.logins.map((login) => (
                <dl key={login.who} className="demo-login">
                  <dt>{login.who}</dt>
                  {login.fields.map(([label, value]) => (
                    <dd key={label}>
                      <span>{label}</span>
                      <code>{value}</code>
                    </dd>
                  ))}
                </dl>
              ))}
            </div>
            {item.notes?.map((note) => (
              <p key={note} className="demo-note">
                {note}
              </p>
            ))}
          </details>
        )}
      </div>
    </article>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageMeta(project?.title, project?.summary);

  if (!project) return <NotFound />;

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="page-hero case-hero">
        <div className="container">
          <Link to="/work" className="back-link">
            <LuArrowLeft aria-hidden="true" /> All work
          </Link>
          <p className="eyebrow">{project.context}</p>
          <h1 className="page-title">{project.title}</h1>
          <p className="page-lead">{project.tagline}</p>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="container case-layout">
          <aside className="case-meta" aria-label="Project details">
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Context</dt>
                <dd>{project.context}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{project.categories.join(', ')}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>
                  <ul className="chips">
                    {project.stack.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="case-content">
            <Reveal as="ul" className="metrics" aria-label="Results">
              {project.results.map((r) => (
                <li key={r.label} className="metric">
                  <span className="metric-value">{r.value}</span>
                  <span className="metric-label">{r.label}</span>
                </li>
              ))}
            </Reveal>

            <Reveal as="section" className="case-block">
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </Reveal>

            <Reveal as="section" className="case-block">
              <h2>What I built</h2>
              <ul className="check-list">
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>

            {project.flows?.length > 0 && (
              <Reveal as="section" className="case-block">
                <h2>How it fits together</h2>
                <div className="flow-stack">
                  {project.flows.map((flow) => (
                    <FlowDiagram key={flow.title} title={flow.title} steps={flow.steps} />
                  ))}
                </div>
              </Reveal>
            )}

            {project.showcases?.length > 0 && (
              <section className="case-block">
                <h2>The apps</h2>
                <div className="showcase-list">
                  {project.showcases.map((item) => (
                    <Reveal key={item.title}>
                      <Showcase item={item} />
                    </Reveal>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <nav className="pager" aria-label="More case studies">
            <Link to={`/work/${prev.slug}`} className="pager-link">
              <span className="pager-dir">
                <LuArrowLeft aria-hidden="true" /> Previous
              </span>
              <span className="pager-title">{prev.title}</span>
            </Link>
            <Link to={`/work/${next.slug}`} className="pager-link is-next">
              <span className="pager-dir">
                Next <LuArrowRight aria-hidden="true" />
              </span>
              <span className="pager-title">{next.title}</span>
            </Link>
          </nav>

          <Reveal className="cta-band">
            <h2>Need something like this built?</h2>
            <p>Tell me about your project and I&apos;ll reply with how I&apos;d approach it.</p>
            <div className="cta-actions">
              <Button to="/contact" icon={<LuArrowRight aria-hidden="true" />}>
                Start a project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
