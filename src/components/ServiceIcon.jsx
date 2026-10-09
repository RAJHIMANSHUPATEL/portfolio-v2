import { LuServer, LuActivity, LuPlug, LuGauge, LuLayoutDashboard } from 'react-icons/lu';

const icons = {
  api: LuServer,
  realtime: LuActivity,
  plug: LuPlug,
  speed: LuGauge,
  layout: LuLayoutDashboard,
};

export default function ServiceIcon({ name }) {
  const Icon = icons[name] || LuServer;
  return (
    <span className="service-icon" aria-hidden="true">
      <Icon />
    </span>
  );
}
