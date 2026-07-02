export function ProgressBar({ value, max }: { value: number; max: number }) {
  const percent = Math.min(100, (value / max) * 100);

  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-ember to-gold shadow-[0_0_14px_rgba(255,122,24,.7)] transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
