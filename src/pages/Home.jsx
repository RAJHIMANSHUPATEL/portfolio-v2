import { LuArrowDown, LuArrowRight, LuArrowUpRight } from 'react-icons/lu';
import usePageMeta from '../hooks/usePageMeta';
import { processSteps, proofPoints, site } from '../data/site';
import { featuredProjects } from '../data/projects';
import { services } from '../data/services';
import { experience, education } from '../data/experience';
import { TLink } from '../motion/PageTransition';
import { gsap, useGsap, fontsReady, getEntranceDelay, EASE } from '../motion/gsap';
import Availability from '../components/Availability';
import Button from '../components/Button';
import Counter from '../components/Counter';
import LocalTime from '../components/LocalTime';
import MaskText from '../components/MaskText';
import Reveal from '../components/Reveal';
import ScrubText from '../components/ScrubText';
import WorkIndex from '../components/WorkIndex';

const statement = [
  { text: 'I work on the parts of software that' },
  { text: 'have to keep working:', em: true },
  { text: 'caching, concurrency, real-time ingestion and the integrations that tie systems together.' },
];

function Hero() {
  // Secondary hero content arrives after the name, then the name drifts away
  // slightly slower than the page as you scroll.
  const ref = useGsap((root) => {
    const rise = root.querySelectorAll('[data-hero-in]');
    gsap.set(rise, { opacity: 0, y: 24 });

    let live = true;
    fontsReady.then(() => {
      if (!live) return;
      gsap.to(rise, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: EASE.out,
        stagger: 0.1,
        delay: getEntranceDelay() + 0.75,
      });
    });

    gsap.to(root.querySelector('.hero-name'), {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to(root.querySelector('.hero-bottom'), {
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: root, start: '55% top', end: 'bottom top', scrub: true },
    });

    return () => {
      live = false;
    };
  });

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-top" data-hero-in>
        <p className="label">{site.role}</p>
        <p className="label">
          Bangalore, IN &middot; <LocalTime />
        </p>
      </div>

      <div className="wrap hero-stage">
        <MaskText as="h1" id="hero-title" className="hero-name" mode="load" delay={0.1} stagger={0.12} duration={1.3} text={'Himanshu\nRaj Patel'} />
        <TLink to="/work/performance" label="Redis performance" className="hero-stamp" data-hero-in>
          <span className="hero-stamp-num">80%</span>
          <span className="hero-stamp-copy">fewer Firebase reads after a Redis cache layer</span>
        </TLink>
      </div>

      <div className="wrap hero-bottom">
        <p className="hero-lead" data-hero-in>
          I build the backend systems that stay fast under load: APIs, real-time pipelines and the
          integrations around them.
        </p>
        <div className="hero-actions" data-hero-in>
          <Availability />
          <div className="btn-row">
            <Button to="/work" transitionLabel="Work" icon={<LuArrowRight aria-hidden="true" />}>
              See selected work
            </Button>
            <Button to="/contact" variant="outline" transitionLabel="Contact">
              Start a project
            </Button>
          </div>
        </div>
        <p className="hero-scroll label" data-hero-in aria-hidden="true">
          Scroll <LuArrowDown />
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    '',
    'Freelance backend and full-stack engineer in Bangalore. APIs, real-time systems, payments and third-party integrations built to stay fast and reliable under load.',
  );

  const now = experience[0];
  const before = experience[1];

  return (
    <>
      <Hero />

      <section className="proof theme-ink" data-nav-theme="ink" aria-labelledby="proof-title">
        <div className="wrap">
          <header className="section-head">
            <p className="label">(01) Results</p>
            <MaskText as="h2" id="proof-title" className="display-2" text={'What changed\nafter I shipped.'} />
          </header>

          <ol className="proof-list">
            {proofPoints.map((point) => (
              <li key={point.label}>
                <Reveal y={20}>
                  <TLink to={`/work/${point.slug}`} label="Work" className="proof-row">
                    <Counter value={point.value} className="proof-num" />
                    <span className="proof-body">
                      <span className="proof-label">{point.label}</span>
                      <span className="proof-link label">
                        Read the case study <LuArrowUpRight aria-hidden="true" />
                      </span>
                    </span>
                  </TLink>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="work-home" aria-labelledby="work-title">
        <div className="wrap">
          <header className="section-head">
            <p className="label">(02) Selected work</p>
            <MaskText as="h2" id="work-title" className="display-2" text={'Problems I\u2019ve\nsolved.'} />
          </header>
          <WorkIndex items={featuredProjects} />
          <Reveal className="section-foot">
            <Button to="/work" variant="outline" transitionLabel="Work" icon={<LuArrowRight aria-hidden="true" />}>
              All case studies
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="about-home" aria-labelledby="about-title">
        <div className="wrap">
          <p className="label" id="about-title">
            (03) About
          </p>
          <ScrubText segments={statement} className="statement" />

          <dl className="facts">
            <Reveal className="fact">
              <dt className="label">Now</dt>
              <dd>
                {now.role}, Krishworks Technologies and Research Labs
                <span className="fact-sub">{now.period}</span>
              </dd>
            </Reveal>
            <Reveal className="fact" delay={0.08}>
              <dt className="label">Before</dt>
              <dd>
                {before.role}, {before.company.replace(' Pvt. Ltd.', '')}
                <span className="fact-sub">{before.period}</span>
              </dd>
            </Reveal>
            <Reveal className="fact" delay={0.16}>
              <dt className="label">Education</dt>
              <dd>
                {education[0].detail}, {education[0].school}
                <span className="fact-sub">{education[0].period}</span>
              </dd>
            </Reveal>
          </dl>

          <Reveal className="section-foot">
            <Button to="/about" variant="outline" transitionLabel="About" icon={<LuArrowRight aria-hidden="true" />}>
              More about me
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="services-home" data-nav-theme="raised" aria-labelledby="services-title">
        <div className="wrap">
          <header className="section-head">
            <p className="label">(04) Services</p>
            <MaskText as="h2" id="services-title" className="display-2" text={'What I can\nbuild for you.'} />
          </header>
          <ol className="lines">
            {services.map((service, i) => (
              <li key={service.id}>
                <Reveal y={20}>
                  <TLink to="/services" label="Services" className="line-row">
                    <span className="line-idx">{String(i + 1).padStart(2, '0')}</span>
                    <span className="line-title">{service.title}</span>
                    <span className="line-text">{service.summary}</span>
                  </TLink>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="process-line label">
            {processSteps.map((step) => step.title).join('  /  ')}
          </p>
        </div>
      </section>
    </>
  );
}
