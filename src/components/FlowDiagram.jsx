/** An ordered pipeline of steps, drawn with hairlines. Reads as a numbered list. */
export default function FlowDiagram({ title, steps }) {
  return (
    <figure className="flow">
      <figcaption className="label">{title}</figcaption>
      <ol className="flow-steps">
        {steps.map((step, i) => (
          <li key={step.label} className="flow-step">
            <span className="flow-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="flow-label">{step.label}</span>
            {step.sub ? <span className="flow-sub">{step.sub}</span> : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
