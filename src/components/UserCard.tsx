import { user } from '@/data/mock';
import { ProgressBar } from './ProgressBar';

export function UserCard() {
  return (
    <section className="premium-card p-4">
      <div className="relative flex items-center gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-ember/30 bg-gradient-to-br from-[#1b2540] via-[#101522] to-ember/25 text-2xl shadow-glow">🧑🏻</div>
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-black tracking-wide">{user.name}</div>
          <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[.14em] text-ember/85">Level {user.level} founder</div>
        </div>
        <div className="rounded-xl border border-ember/50 bg-ember/10 px-2.5 py-2 text-ember shadow-glow">⌬</div>
      </div>
      <div className="relative mt-4 flex items-center justify-between text-[11px] font-semibold text-white/70">
        <span>XP {user.xp.toLocaleString()}</span>
        <span className="text-white/40">{user.xpMax.toLocaleString()}</span>
      </div>
      <div className="relative mt-1.5"><ProgressBar value={user.xp} max={user.xpMax} /></div>
    </section>
  );
}
