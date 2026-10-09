/**
 * The visual identity of a project. Maati has interface artwork; the backend
 * projects have no public screens, so their headline result becomes the image.
 */
export default function ProjectVisual({ project }) {
  if (project.cover) {
    return <img src={project.cover} alt="" width="640" height="400" loading="lazy" decoding="async" />;
  }

  return (
    <div className="visual-metric" aria-hidden="true">
      <span className="visual-metric-value">{project.headline.value}</span>
      <span className="visual-metric-label">{project.headline.label}</span>
    </div>
  );
}
