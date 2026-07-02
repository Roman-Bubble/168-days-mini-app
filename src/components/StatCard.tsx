export function StatCard({
  label,
  value,
  icon = '◎',
}: {
  label: string;
  value: string | number;
  icon?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/25 p-3">
      <div className="flex items-center gap-2 text-white/50">
        <span>{icon}</span>
        <span className="tiny">{label}</span>
      </div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
