export function BadgeCard({
  title,
  icon,
  locked,
}: {
  title: string;
  icon: string;
  locked?: boolean;
}) {
  return (
    <div
      className={`grid min-h-24 place-items-center rounded-xl border p-3 text-center ${
        locked
          ? 'border-white/10 bg-white/[.025] opacity-45'
          : 'border-ember/30 bg-ember/10 shadow-glow'
      }`}
    >
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 text-[10px] uppercase text-white/60">{title}</div>
    </div>
  );
}
