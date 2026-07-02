'use client';

import type { Screen } from './AppShell';

const navItems: Array<{ id: Screen; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'startups', label: 'Startups', icon: '▣' },
  { id: 'voting', label: 'Voting', icon: '◒' },
  { id: 'profile', label: 'Profile', icon: '☻' },
];

export function BottomNav({ active, setActive }: { active: Screen; setActive: (id: Screen) => void }) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 border-t border-ember/15 bg-[#03050b]/85 px-3 pb-[calc(.7rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-2xl">
      <div className="grid grid-cols-4 gap-1 rounded-2xl border border-white/5 bg-white/[.035] p-1">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button key={item.id} type="button" onClick={() => setActive(item.id)} className={`grid gap-0.5 rounded-xl py-1.5 text-[10px] font-bold transition active:scale-95 ${isActive ? 'bg-ember/10 text-ember shadow-[0_0_18px_rgba(255,122,24,.18)]' : 'text-white/38 hover:text-white/75'}`}>
              <span className="text-lg leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
