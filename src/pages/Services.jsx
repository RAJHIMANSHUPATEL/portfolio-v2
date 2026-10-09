import { Link } from 'react-router-dom';
import { LuArrowRight, LuCheck } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { bestFor, services } from '../data/services';
import { processSteps } from '../data/site';
import { getProject } from '../data/projects';
import Button from '../components/Button';
import CopyEmail from '../components/CopyEmail';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import ServiceIcon from '../components/ServiceIcon';

export default function Services() {
  usePageMeta(
    'Services',
    'Freelance services: backend and API development, real-time systems, payments and integrations, performance work and full-stack products.',
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1 className="page-title">What I can build for you</h1>
          <p className="page-lead">
            Backend-first engineering, with the full-stack skills to take a product from database to
            interface when that&apos;s what you need.
          </p>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="container service-list">
          {services.map((service) => (
            <Reveal as="article" key={service.id} className="service-row" id={service.id}>
              <div className="service-row-head">
                <ServiceIcon name={service.icon} />
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <div className="service-row-body">
                <ul className="check-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="service-proof">
                  Related work:{' '}
                  {service.slugs.map((slug, i) => {
                    const project = getProject(slug);
                    return (
                      <span key={slug}>
                        <Link to={`/work/${slug}`} className="inline-link">
                          {project.title}
                        </Link>
                        {i < service.slugs.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Fit"
            title="Who this is for"
            intro="Projects I'm usually a good match for."
          />
          <ul className="fit-list">
            {bestFor.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                <LuCheck aria-hidden="true" />
                <span>{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="How an engagement works"
            intro="Four stages, with you in the loop throughout."
          />
          <ol className="steps">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="step">
                <span className="step-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Let&apos;s talk about your project</h2>
            <p>Share what you&apos;re building and what&apos;s getting in the way.</p>
            <div className="cta-actions">
              <Button to="/contact" icon={<LuArrowRight aria-hidden="true" />}>
                Start a project
              </Button>
              <CopyEmail />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
