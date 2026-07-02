const icons = ['🏆', '◷', '◉', '⚙', '?', 'ⓘ'];

export function MenuRow({ label, index }: { label: string; index: number }) {
  return (
    <button type="button" className="flex w-full items-center gap-3 border-b border-white/[.06] px-1 py-3 text-left transition last:border-b-0 hover:text-ember active:scale-[.99]">
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[.055] text-sm">{icons[index]}</span>
      <span className="flex-1 text-sm font-semibold text-white/80">{label}</span>
      <span className="text-lg text-white/30">›</span>
    </button>
  );
}
