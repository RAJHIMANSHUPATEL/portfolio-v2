import { useParams } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa6';
import usePageMeta from '../hooks/usePageMeta';
import { getProject, projects } from '../data/projects';
import { TLink } from '../motion/PageTransition';
import { getEntranceDelay } from '../motion/gsap';
import Button from '../components/Button';
import Counter from '../components/Counter';
import FlowDiagram from '../components/FlowDiagram';
import MaskText from '../components/MaskText';
import ParallaxMedia from '../components/ParallaxMedia';
import Reveal from '../components/Reveal';
import NotFound from './NotFound';

function Showcase({ item, index }) {
  return (
    <article className="showcase">
      <Reveal className="showcase-media-wrap" y={40}>
        <ParallaxMedia className="showcase-media">
          <img src={item.image} alt="" width="640" height="400" loading="lazy" decoding="async" />
        </ParallaxMedia>
      </Reveal>

      <div className="showcase-body">
        <p className="label">App {String(index + 1).padStart(2, '0')}</p>
        <h3 className="showcase-title">{item.title}</h3>
        <p className="showcase-text">{item.summary}</p>

        <div className="btn-row">
          {item.portal ? (
            <Button href={item.portal} size="sm" icon={<LuArrowUpRight aria-hidden="true" />}>
              Live demo
            </Button>
          ) : (
            <span className="soon label">Live demo coming soon</span>
          )}
          {item.github && (
            <Button href={item.github} variant="outline" size="sm" icon={<FaGithub aria-hidden="true" />}>
              Source
            </Button>
          )}
        </div>

        {item.logins?.length > 0 && (
          <details className="demo">
            <summary>Demo access</summary>
            <div className="demo-grid">
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
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <header className="case-head wrap">
        <TLink to="/work" label="Work" className="back label">
          &larr; Index
        </TLink>
        <p className="label case-context">
          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} &middot;{' '}
          {project.context}
        </p>
        <MaskText as="h1" mode="load" className="case-title" text={project.title} duration={1.2} stagger={0.1} />
        <Reveal className="case-tagline" delay={getEntranceDelay() + 0.45} y={20}>
          {project.tagline}
        </Reveal>

        <dl className="case-meta">
          <div>
            <dt className="label">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="label">Context</dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt className="label">Focus</dt>
            <dd>{project.categories.join(', ')}</dd>
          </div>
          <div>
            <dt className="label">Stack</dt>
            <dd>{project.stack.join(', ')}</dd>
          </div>
        </dl>
      </header>

      <section className="case-results theme-ink" data-nav-theme="ink" aria-label="Results">
        <ul className="wrap results">
          {project.results.map((result) => (
            <li key={result.label} className="result">
              <Counter value={result.value} className="result-value" />
              <span className="result-label">{result.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="case-body wrap">
        <section className="case-row" aria-labelledby="problem">
          <h2 className="label" id="problem">
            The problem
          </h2>
          <Reveal as="p" className="case-problem">
            {project.problem}
          </Reveal>
        </section>

        <section className="case-row" aria-labelledby="built">
          <h2 className="label" id="built">
            What I built
          </h2>
          <ol className="built">
            {project.built.map((item, i) => (
              <Reveal as="li" key={item} className="built-item" y={20}>
                <span className="built-idx">{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {project.flows?.length > 0 && (
          <section className="case-row" aria-labelledby="fits">
            <h2 className="label" id="fits">
              How it fits together
            </h2>
            <Reveal className="flows">
              {project.flows.map((flow) => (
                <FlowDiagram key={flow.title} title={flow.title} steps={flow.steps} />
              ))}
            </Reveal>
          </section>
        )}
      </div>

      {project.showcases?.length > 0 && (
        <section className="showcases wrap" aria-labelledby="apps">
          <h2 className="label" id="apps">
            The apps
          </h2>
          {project.showcases.map((item, i) => (
            <Showcase key={item.title} item={item} index={i} />
          ))}
        </section>
      )}

      <TLink to={`/work/${next.slug}`} label={next.title} className="next theme-ink" data-nav-theme="ink">
        <span className="wrap next-inner">
          <span className="label">Next project</span>
          <span className="next-title">{next.title}</span>
          <LuArrowUpRight className="next-arrow" aria-hidden="true" />
        </span>
      </TLink>
    </>
  );
}
