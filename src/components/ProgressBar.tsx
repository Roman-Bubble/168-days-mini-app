export function ProgressBar({ value, max }: { value: number; max: number }) {
  const percent = Math.min(100, (value / max) * 100);

  return (
    <div className="h-2 overflow-hidden rounded-full border border-white/5 bg-black/45 p-[2px]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-ember via-gold to-amber-200 shadow-[0_0_18px_rgba(255,122,24,.75)] transition-all duration-700"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
