import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';

export default function ProjectCard({ project }) {
  const { slug, title, summary, context, stack, cover, headline } = project;

  return (
    <Link to={`/work/${slug}`} className="project-card">
      <div className={`project-media ${cover ? 'has-image' : ''}`}>
        {cover ? (
          <img src={cover} alt="" loading="lazy" />
        ) : (
          <div className="project-metric" aria-hidden="true">
            <span className="metric-value">{headline.value}</span>
            <span className="metric-label">{headline.label}</span>
          </div>
        )}
      </div>
      <div className="project-body">
        <p className="project-context">{context}</p>
        <h3 className="project-title">{title}</h3>
        <p className="project-summary">{summary}</p>
        <ul className="chips" aria-label="Technologies">
          {stack.slice(0, 4).map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
        <span className="project-link">
          Read case study <LuArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
