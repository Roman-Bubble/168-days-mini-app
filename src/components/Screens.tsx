import type React from 'react';
import { badges, menu, startups, user, votes } from '@/data/mock';
import { BadgeCard } from './BadgeCard';
import { MenuRow } from './MenuRow';
import { StartupCard } from './StartupCard';
import { StatCard } from './StatCard';
import { UserCard } from './UserCard';
import { VotingCard } from './VotingCard';
import type { Screen } from './AppShell';

function Header({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <header className="mb-5 flex items-center justify-between gap-4">
      <h1 className="text-xl font-black tracking-wide">{title}</h1>
      {right ?? (
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-ember/50 hover:text-ember"
        >
          🔔
        </button>
      )}
    </header>
  );
}

export function Home({ setActive }: { setActive: (screen: Screen) => void }) {
  return (
    <>
      <Header title="168 DAYS" />
      <UserCard />

      <section className="card mt-4 overflow-hidden p-4">
        <div className="tiny">Your rating</div>
        <div className="mt-1 text-3xl font-black">{user.rating}</div>
        <p className="text-sm text-white/55">Among {user.participants} participants</p>
      </section>

      <section className="mt-4 grid grid-cols-2 gap-3">
        {Object.entries(user.stats).map(([label, value], index) => (
          <StatCard
            key={label}
            label={label}
            value={value}
            icon={['♙', '⚡', '▥', '☷'][index]}
          />
        ))}
      </section>

      <section className="card mt-4 p-4">
        <div className="mb-3 flex justify-between gap-3">
          <h2 className="font-semibold">Rewards</h2>
          <span className="tiny">3 unlocked</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {badges.map((badge) => (
            <BadgeCard key={badge.title} {...badge} />
          ))}
        </div>
      </section>

      <section className="mt-4 grid grid-cols-2 gap-3">
        <div className="card p-4">
          <div className="text-2xl">🔥</div>
          <div className="mt-2 font-bold">7 days</div>
          <p className="text-xs text-white/50">Daily streak</p>
          <p className="mt-2 text-ember">+50 XP</p>
        </div>
        <button type="button" onClick={() => setActive('voting')} className="card tap p-4 text-left">
          <div className="tiny">New voting</div>
          <h3 className="mt-2 font-semibold">Which feature should be added first?</h3>
          <div className="mt-4 rounded-xl bg-ember px-4 py-2 text-center text-sm font-bold">
            Vote
          </div>
        </button>
      </section>
    </>
  );
}

export function Startups() {
  return (
    <>
      <Header title="Startups" />
      <Tabs items={['All Startups', 'Metrics', 'Teams']} />
      <div className="mt-4 space-y-4">
        {startups.map((startup) => (
          <StartupCard key={startup.name} startup={startup} />
        ))}
      </div>
    </>
  );
}

export function Voting() {
  return (
    <>
      <Header
        title="Voting"
        right={<div className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-sm">🪙 4,560</div>}
      />
      <Tabs items={['Active', 'Completed']} />
      <div className="mt-4 space-y-4">
        {votes.map((vote) => (
          <VotingCard key={vote.id} vote={vote} />
        ))}
      </div>
    </>
  );
}

export function Profile() {
  return (
    <>
      <Header title="Profile" />
      <UserCard />
      <section className="mt-4 grid grid-cols-3 gap-2">
        {(['Votes', 'Predictions', 'Invites'] as const).map((label) => (
          <StatCard key={label} label={label} value={user.stats[label]} />
        ))}
      </section>
      <section className="card mt-4 p-3">
        {menu.map((label, index) => (
          <MenuRow key={label} label={label} index={index} />
        ))}
      </section>
    </>
  );
}

function Tabs({ items }: { items: string[] }) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b border-white/10">
      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          className={`shrink-0 px-3 pb-3 text-xs font-bold uppercase tracking-wider ${
            index === 0 ? 'border-b-2 border-ember text-ember' : 'text-white/45'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
