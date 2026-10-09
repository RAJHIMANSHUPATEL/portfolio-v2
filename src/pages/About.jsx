import { LuArrowRight, LuDownload } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { site } from '../data/site';
import { education, experience, skillGroups } from '../data/experience';
import Button from '../components/Button';
import Availability from '../components/Availability';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  usePageMeta(
    'About',
    'Backend-oriented software engineer in Bangalore focused on real-time systems, performance and reliable APIs. Experience, skills and education.',
  );

  return (
    <>
      <section className="page-hero">
        <div className="container about-hero">
          <div>
            <Availability />
            <h1 className="page-title">
              Hi, I&apos;m {site.shortName}. I build the parts of software that have to keep working.
            </h1>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a backend-oriented software engineer based in {site.location}. I work on
              systems that need to stay fast and reliable under load: caching, concurrency
              coordination, real-time ingestion and external integrations.
            </p>
            <p>
              I also ship full-stack products when a project needs it, using React, Next.js and React
              Native. My direction is backend architecture, system design and production engineering.
            </p>
            <div className="hero-actions">
              <Button to="/contact" icon={<LuArrowRight aria-hidden="true" />}>
                Work with me
              </Button>
              <Button
                href={site.resumePath}
                variant="ghost"
                icon={<LuDownload aria-hidden="true" />}
                download="Himanshu_Raj_Patel_Resume.pdf"
              >
                Download résumé
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <ol className="timeline">
            {experience.map((job) => (
              <Reveal as="li" key={job.company} className="timeline-item">
                <div className="timeline-meta">
                  <p className="timeline-period">{job.period}</p>
                  <p className="timeline-place">{job.location}</p>
                </div>
                <div className="timeline-body">
                  <h3>{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <ul className="check-list">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I work with"
            intro="Grouped by what I use them for."
          />
          <div className="skill-grid">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 50} className="skill-group">
                <h3>{group.title}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Education" title="Background" />
          {education.map((item) => (
            <Reveal key={item.school} className="education">
              <div>
                <h3>{item.school}</h3>
                <p>{item.detail}</p>
              </div>
              <div className="education-meta">
                <p>{item.period}</p>
                <p>{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
