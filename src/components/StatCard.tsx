export function StatCard({ label, value, icon = '◎' }: { label: string; value: string | number; icon?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.06)]">
      <div className="flex items-center gap-1.5 text-white/50">
        <span className="text-ember/80">{icon}</span>
        <span className="tiny truncate">{label}</span>
      </div>
      <div className="mt-1 text-lg font-black tracking-tight">{value}</div>
    </div>
  );
}
