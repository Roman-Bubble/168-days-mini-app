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
    <header className="mb-4 flex items-center justify-between gap-4">
      <div>
        <div className="tiny mb-1">Reality show</div>
        <h1 className="text-2xl font-black tracking-tight">{title}</h1>
      </div>
      {right ?? <button type="button" aria-label="Notifications" className="rounded-full border border-white/10 bg-white/[.04] p-2.5 text-white/70 shadow-glow transition hover:border-ember/50 hover:text-ember">🔔</button>}
    </header>
  );
}

export function Home({ setActive }: { setActive: (screen: Screen) => void }) {
  return (
    <>
      <Header title="168 DAYS" />
      <UserCard />
      <section className="premium-card mt-3 p-4">
        <div className="relative flex items-end justify-between">
          <div><div className="tiny">Your rating</div><div className="mt-1 text-3xl font-black tracking-tight">{user.rating}</div><p className="text-xs font-medium text-white/52">Among {user.participants} participants</p></div>
          <div className="rounded-2xl border border-ember/25 bg-black/25 px-3 py-2 text-2xl">🏁</div>
        </div>
      </section>
      <section className="mt-3 grid grid-cols-2 gap-2.5">
        {Object.entries(user.stats).map(([label, value], index) => <StatCard key={label} label={label} value={value} icon={['♙', '⚡', '▥', '☷'][index]} />)}
      </section>
      <section className="card mt-3 p-3.5">
        <div className="mb-3 flex justify-between gap-3"><h2 className="font-black tracking-tight">Rewards</h2><span className="tiny">3 unlocked</span></div>
        <div className="grid grid-cols-4 gap-2">{badges.map((badge) => <BadgeCard key={badge.title} {...badge} />)}</div>
      </section>
      <section className="mt-3 grid grid-cols-2 gap-2.5">
        <div className="premium-card p-3.5"><div className="text-2xl">🔥</div><div className="mt-2 font-black">7 days</div><p className="text-[11px] text-white/50">Daily streak</p><p className="mt-2 text-sm font-black text-ember">+50 XP</p></div>
        <button type="button" onClick={() => setActive('voting')} className="premium-card tap p-3.5 text-left"><div className="tiny relative">New voting</div><h3 className="relative mt-2 text-sm font-black leading-snug">Which feature should be added first?</h3><div className="relative mt-3 rounded-xl bg-ember px-4 py-2 text-center text-xs font-black uppercase tracking-wider">Vote</div></button>
      </section>
    </>
  );
}

export function Startups() { return <><Header title="Startups" /><Tabs items={['All Startups', 'Metrics', 'Teams']} /><div className="mt-4 space-y-3.5">{startups.map((startup) => <StartupCard key={startup.name} startup={startup} />)}</div></>; }

export function Voting() { return <><Header title="Voting" right={<div className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1.5 text-sm font-black text-ember shadow-glow">🪙 4,560</div>} /><Tabs items={['Active', 'Completed']} /><div className="mt-4 space-y-3.5">{votes.map((vote) => <VotingCard key={vote.id} vote={vote} />)}</div></>; }

export function Profile() {
  return <><Header title="Profile" /><UserCard /><section className="mt-3 grid grid-cols-3 gap-2">{(['Votes', 'Predictions', 'Invites'] as const).map((label) => <StatCard key={label} label={label} value={user.stats[label]} />)}</section><section className="premium-card mt-3 p-3"><div className="relative mb-2 rounded-2xl border border-ember/20 bg-ember/10 p-3"><div className="tiny">Status</div><div className="mt-1 font-black">Boardroom regular</div><p className="mt-0.5 text-xs text-white/50">Top voter streak is active this week.</p></div>{menu.map((label, index) => <MenuRow key={label} label={label} index={index} />)}</section></>;
}

function Tabs({ items }: { items: string[] }) {
  return <div className="scrollbar-none flex gap-2 overflow-x-auto border-b border-white/10">{items.map((item, index) => <button key={item} type="button" className={`shrink-0 px-3 pb-3 text-[11px] font-black uppercase tracking-[.16em] ${index === 0 ? 'border-b-2 border-ember text-ember' : 'text-white/40'}`}>{item}</button>)}</div>;
}
