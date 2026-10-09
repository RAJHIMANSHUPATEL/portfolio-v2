import { LuDownload } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { site } from '../data/site';
import { education, experience, skillGroups } from '../data/experience';
import Button from '../components/Button';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';

export default function About() {
  usePageMeta(
    'About',
    'Himanshu Raj Patel is a backend-oriented software engineer in Bangalore working on caching, concurrency, real-time systems and integrations.',
  );

  return (
    <>
      <PageHead label="About" title={'The parts of\nsoftware that\nhave to keep\nworking.'} titleClass="display-1 about-title" />

      <section className="about-intro wrap">
        <Reveal className="about-copy">
          <p>
            I&rsquo;m a backend-oriented software engineer based in Bangalore, India. I work on systems that need
            to stay fast and reliable under load: caching, concurrency coordination, real-time ingestion and
            external integrations.
          </p>
          <p>
            I also ship full-stack products when a project needs it, using React, Next.js and React Native. My
            direction is backend architecture, system design and production engineering.
          </p>
          <div className="btn-row">
            <Button to="/contact" transitionLabel="Contact">
              Work with me
            </Button>
            <Button href={site.resumePath} variant="outline" download icon={<LuDownload aria-hidden="true" />}>
              Download r&eacute;sum&eacute;
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="exp wrap" aria-labelledby="exp-title">
        <h2 className="label" id="exp-title">
          Experience
        </h2>
        <ol className="exp-list">
          {experience.map((job) => (
            <li key={job.company}>
              <Reveal className="exp-row" y={28}>
                <div className="exp-when">
                  <p>{job.period}</p>
                  <p className="exp-where">{job.location}</p>
                </div>
                <div className="exp-what">
                  <h3 className="exp-company">{job.company}</h3>
                  <p className="exp-role">{job.role}</p>
                  <ul className="exp-points">
                    {job.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="skills theme-ink" data-nav-theme="ink" aria-labelledby="skills-title">
        <div className="wrap">
          <h2 className="label" id="skills-title">
            Tools, grouped by what they&rsquo;re for
          </h2>
          <dl className="skill-list">
            {skillGroups.map((group) => (
              <Reveal key={group.title} className="skill-row" y={20}>
                <dt className="skill-name">{group.title}</dt>
                <dd className="skill-items">{group.items.join(' \u00b7 ')}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="edu wrap" aria-labelledby="edu-title">
        <h2 className="label" id="edu-title">
          Education
        </h2>
        {education.map((item) => (
          <Reveal key={item.school} className="exp-row" y={28}>
            <div className="exp-when">
              <p>{item.period}</p>
              <p className="exp-where">{item.note}</p>
            </div>
            <div className="exp-what">
              <h3 className="exp-company">{item.school}</h3>
              <p className="exp-role">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
