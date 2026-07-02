import { user } from '@/data/mock';
import { ProgressBar } from './ProgressBar';

export function UserCard() {
  return (
    <section className="card p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan/30 to-ember/30 text-2xl">
          🧑🏻
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold">{user.name}</div>
          <div className="text-xs text-white/50">Level {user.level}</div>
        </div>
        <div className="rounded-xl border border-ember/50 p-2 text-ember">⌬</div>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span>
          XP {user.xp.toLocaleString()} / {user.xpMax.toLocaleString()}
        </span>
      </div>
      <ProgressBar value={user.xp} max={user.xpMax} />
    </section>
  );
}
