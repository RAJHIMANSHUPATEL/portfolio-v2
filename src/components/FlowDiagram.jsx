// A simple labelled pipeline. Used on case studies to show how a system fits together.
export default function FlowDiagram({ title, steps }) {
  return (
    <figure className="flow">
      {title && <figcaption className="flow-title">{title}</figcaption>}
      <ol className="flow-steps">
        {steps.map((step, i) => (
          <li className="flow-node" key={step.label}>
            <span className="flow-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="flow-label">{step.label}</span>
            {step.sub && <span className="flow-sub">{step.sub}</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}
