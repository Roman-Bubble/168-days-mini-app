const icons = ['🏆', '◷', '◉', '⚙', '?', 'ⓘ'];

export function MenuRow({ label, index }: { label: string; index: number }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 border-b border-white/5 px-1 py-3 text-left transition last:border-b-0 hover:text-ember active:scale-[.99]"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[.05]">
        {icons[index]}
      </span>
      <span className="flex-1 text-sm">{label}</span>
      <span className="text-white/35">›</span>
    </button>
  );
}
