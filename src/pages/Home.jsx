import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { processSteps, proofPoints, site } from '../data/site';
import { services } from '../data/services';
import { featuredProjects } from '../data/projects';
import Button from '../components/Button';
import Availability from '../components/Availability';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ServiceIcon from '../components/ServiceIcon';
import CopyEmail from '../components/CopyEmail';
import Reveal from '../components/Reveal';

const terminalRows = [
  { key: 'firebase.reads', value: '-80%', note: 'redis cache layer' },
  { key: 'gameserver.cpu', value: '-35%', note: 'redis coordination' },
  { key: 'sessions.concurrent', value: '200', note: '6 players each, 2 GB server' },
  { key: 'couriers.integrated', value: '5+', note: 'behind one internal API' },
];

export default function Home() {
  usePageMeta(
    null,
    'Freelance backend and full-stack engineer in Bangalore. APIs, real-time systems, payments and third-party integrations built to stay fast and reliable under load.',
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Availability />
            <h1 className="hero-title">
              Backend systems that stay <span className="accent-text">fast under load.</span>
            </h1>
            <p className="hero-lead">
              I&apos;m {site.shortName}, a software engineer in {site.location}. I design and build
              APIs, real-time systems and integrations for products that can&apos;t afford to be slow
              or flaky.
            </p>
            <div className="hero-actions">
              <Button to="/contact" icon={<LuArrowRight aria-hidden="true" />}>
                Start a project
              </Button>
              <Button to="/work" variant="ghost">
                See selected work
              </Button>
            </div>
            <p className="hero-stack">
              Node.js <span aria-hidden="true">/</span> Go <span aria-hidden="true">/</span>{' '}
              PostgreSQL <span aria-hidden="true">/</span> Redis <span aria-hidden="true">/</span>{' '}
              React
            </p>
          </div>

          <div className="terminal" role="img" aria-label="Summary of measured results from past work">
            <div className="terminal-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>impact.log</p>
            </div>
            <div className="terminal-body" aria-hidden="true">
              <p className="terminal-cmd">
                <span className="prompt">$</span> impact --summary
              </p>
              {terminalRows.map((row) => (
                <p key={row.key} className="terminal-row">
                  <span className="t-key">{row.key}</span>
                  <span className="t-value">{row.value}</span>
                  <span className="t-note"># {row.note}</span>
                </p>
              ))}
              <p className="terminal-cmd">
                <span className="prompt">$</span> <span className="caret" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section section-tight" aria-label="Results at a glance">
        <div className="container">
          <ul className="proof-grid">
            {proofPoints.map((p, i) => (
              <Reveal as="li" key={p.label} delay={i * 70} className="proof-item">
                <span className="proof-value">{p.value}</span>
                <span className="proof-label">{p.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Problems I've solved"
            intro="A few projects where the engineering made a measurable difference."
            action={
              <Link to="/work" className="text-link">
                All projects <LuArrowRight aria-hidden="true" />
              </Link>
            }
          />
          <div className="card-grid card-grid-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What I do"
            title="How I can help"
            intro="Focused on the backend, comfortable owning the whole product when needed."
            action={
              <Link to="/services" className="text-link">
                All services <LuArrowRight aria-hidden="true" />
              </Link>
            }
          />
          <div className="card-grid card-grid-2">
            {services.slice(0, 4).map((service, i) => (
              <Reveal key={service.id} delay={i * 70} className="service-card">
                <ServiceIcon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="From first call to launch"
            intro="A simple, predictable way of working."
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

      {/* CTA */}
      <section className="section section-tight">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Got a system that&apos;s slow, fragile or not built yet?</h2>
            <p>Tell me what you&apos;re working on. I&apos;ll tell you honestly whether I can help.</p>
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
