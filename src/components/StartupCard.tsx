import type { Startup } from '@/data/mock';

export function StartupCard({ startup }: { startup: Startup }) {
  return (
    <button type="button" className="card tap w-full overflow-hidden p-0 text-left">
      <div className="relative h-20 overflow-hidden bg-[linear-gradient(135deg,#111a2b,#03050b)]">
        <div className={`absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${startup.accent} opacity-35 blur-xl`} />
        <div className="noise absolute inset-0 opacity-[.14]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05070d] to-transparent" />
        <div className="absolute bottom-3 left-4 rounded-full border border-ember/25 bg-black/35 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.14em] text-ember">Day {startup.day}</div>
      </div>
      <div className="p-4 pt-0">
        <div className="-mt-6 flex items-end gap-3">
          <div className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${startup.accent} p-[2px] shadow-glow`}>
            <span className="grid h-full w-full place-items-center rounded-2xl bg-[#05070d] text-sm font-black">{startup.logo}</span>
          </div>
          <div className="min-w-0 pb-1">
            <h3 className="font-black tracking-wide">{startup.name}</h3>
            <p className="text-[11px] font-medium text-white/48">{startup.category}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Metric label="Day" value={startup.day} />
          <Metric label="Revenue" value={startup.revenue} />
          <Metric label="Users" value={startup.users} />
        </div>

        <div className="mt-3 rounded-2xl border border-ember/20 bg-ember/10 py-2.5 text-center text-xs font-black uppercase tracking-[.14em] text-ember">
          View profile →
        </div>
      </div>
    </button>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/25 px-1 py-2">
      <div className="tiny">{label}</div>
      <div className="mt-0.5 text-sm font-black">{value}</div>
    </div>
  );
}
