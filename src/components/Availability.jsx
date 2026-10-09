import { site } from '../data/site';

export default function Availability() {
  if (!site.available) return null;
  return (
    <p className="availability">
      <span className="availability-dot" aria-hidden="true" />
      {site.availabilityLabel}
    </p>
  );
}
