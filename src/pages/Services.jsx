import usePageMeta from '../hooks/usePageMeta';
import { processSteps } from '../data/site';
import { bestFor, services } from '../data/services';
import { getProject } from '../data/projects';
import { TLink } from '../motion/PageTransition';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import MaskText from '../components/MaskText';

export default function Services() {
  usePageMeta(
    'Services',
    'Backend and API development, real-time systems, payments and integrations, performance work and full-stack products, backed by shipped case studies.',
  );

  return (
    <>
      <PageHead
        label="Services"
        title={'What I can\nbuild for you.'}
        lead="Backend-first engineering, with the full-stack skills to take a product from database to interface when that is what you need."
      />

      <section className="svc-section wrap" aria-label="Services">
        <ol>
          {services.map((service, i) => (
            <li key={service.id}>
              <Reveal as="article" className="svc" y={28}>
                <span className="svc-idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="svc-head">
                  <h2 className="svc-title">{service.title}</h2>
                  <p className="svc-summary">{service.summary}</p>
                </div>
                <div className="svc-body">
                  <ul className="svc-points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="svc-work label">
                    Related work:{' '}
                    {service.slugs.map((slug, n) => {
                      const project = getProject(slug);
                      return (
                        <span key={slug}>
                          {n > 0 ? ', ' : ''}
                          <TLink to={`/work/${slug}`} label={project.title} className="link-u">
                            {project.title}
                          </TLink>
                        </span>
                      );
                    })}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="fit theme-ink" data-nav-theme="ink" aria-labelledby="fit-title">
        <div className="wrap">
          <p className="label">Who this is for</p>
          <MaskText as="h2" id="fit-title" className="display-2" text={'Projects I\u2019m usually\na good match for.'} />
          <ul className="fit-list">
            {bestFor.map((item) => (
              <Reveal as="li" key={item} y={20}>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="process wrap" aria-labelledby="process-title">
        <p className="label" id="process-title">
          How an engagement works
        </p>
        <ol className="process-list">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} className="process-step" delay={i * 0.08} y={24}>
              <span className="process-idx">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="process-title">{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
