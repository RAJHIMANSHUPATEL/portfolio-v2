import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, intro, action, as: Tag = 'h2' }) {
  return (
    <Reveal className="section-head">
      <div className="section-head-text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag className="section-title">{title}</Tag>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {action}
    </Reveal>
  );
}
