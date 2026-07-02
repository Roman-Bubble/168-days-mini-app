import type { Startup } from '@/data/mock';

export function StartupCard({ startup }: { startup: Startup }) {
  return (
    <button type="button" className="card tap w-full overflow-hidden p-0 text-left">
      <div className="h-24 bg-[radial-gradient(circle_at_70%_30%,rgba(255,122,24,.22),transparent_35%),linear-gradient(135deg,rgba(53,243,255,.08),rgba(255,255,255,.03))]" />
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br ${startup.accent} p-[2px]`}
          >
            <span className="grid h-full w-full place-items-center rounded-full bg-night text-sm font-bold">
              {startup.logo}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold tracking-wide">{startup.name}</h3>
            <p className="text-xs text-white/50">{startup.category}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Metric label="Day" value={startup.day} />
          <Metric label="Revenue" value={startup.revenue} />
          <Metric label="Users" value={startup.users} />
        </div>

        <div className="mt-4 rounded-xl bg-white/[.05] py-3 text-center text-xs font-semibold uppercase tracking-wider">
          View profile →
        </div>
      </div>
    </button>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="tiny">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
