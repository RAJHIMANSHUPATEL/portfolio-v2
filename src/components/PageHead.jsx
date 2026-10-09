import { getEntranceDelay } from '../motion/gsap';
import MaskText from './MaskText';
import Reveal from './Reveal';

/** The opening of every inner page: label, large title, optional lead. */
export default function PageHead({ label, title, lead, titleClass = 'display-1', children }) {
  return (
    <header className="page-head wrap">
      <p className="label">{label}</p>
      <MaskText as="h1" mode="load" className={titleClass} text={title} duration={1.2} stagger={0.1} />
      {lead ? (
        <Reveal className="page-lead" delay={getEntranceDelay() + 0.5} y={20}>
          {lead}
        </Reveal>
      ) : null}
      {children}
    </header>
  );
}
