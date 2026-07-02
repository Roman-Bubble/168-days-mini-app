export function BadgeCard({ title, icon, locked }: { title: string; icon: string; locked?: boolean }) {
  return (
    <div className={`grid min-h-[5.2rem] place-items-center rounded-2xl border p-2 text-center ${locked ? 'border-white/10 bg-black/25 opacity-45' : 'border-ember/35 bg-gradient-to-b from-ember/20 to-white/[.035] shadow-glow'}`}>
      <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/35 text-xl">{icon}</div>
      <div className="mt-1 text-[9px] font-bold uppercase leading-tight tracking-wide text-white/60">{title}</div>
    </div>
  );
}
