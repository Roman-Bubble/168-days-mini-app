'use client';

import type { Screen } from './AppShell';

const navItems: Array<{ id: Screen; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'startups', label: 'Startups', icon: '▣' },
  { id: 'voting', label: 'Voting', icon: '◒' },
  { id: 'profile', label: 'Profile', icon: '☻' },
];

export function BottomNav({
  active,
  setActive,
}: {
  active: Screen;
  setActive: (id: Screen) => void;
}) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-night/90 px-3 py-2 backdrop-blur-xl">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`grid gap-1 rounded-xl py-1 text-[10px] transition active:scale-95 ${
                isActive ? 'text-ember' : 'text-white/45 hover:text-white/75'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
