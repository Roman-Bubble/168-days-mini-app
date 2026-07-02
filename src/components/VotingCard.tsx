'use client';

import { useState } from 'react';
import type { Vote } from '@/data/mock';

export function VotingCard({ vote }: { vote: Vote }) {
  const [voted, setVoted] = useState(false);

  return (
    <article className={`premium-card p-4 transition duration-300 ${voted ? 'border-emerald-400/40 shadow-cyan' : ''}`}>
      <div className="relative mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.16em] text-emerald-300">Live vote</span>
        <span className="rounded-full border border-ember/25 bg-ember/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.14em] text-ember">Reward +10 XP</span>
      </div>
      <h3 className="relative text-[15px] font-black leading-snug tracking-tight">{vote.title}</h3>
      {vote.budget ? <p className="relative mt-1 text-xs font-semibold text-white/50">Budget pool: {vote.budget}</p> : null}

      <div className="relative mt-4 space-y-3.5">
        {vote.options.map((option, index) => (
          <div key={option.name} className={voted && index === 0 ? 'rounded-xl border border-ember/20 bg-ember/5 p-2 -m-2' : ''}>
            <div className="mb-1.5 flex justify-between gap-3 text-xs font-semibold">
              <span className="text-white/80">{option.name}</span>
              <span className="text-ember">{option.percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full border border-white/5 bg-black/45 p-[2px]">
              <div className="h-full rounded-full bg-gradient-to-r from-ember to-gold shadow-[0_0_14px_rgba(255,122,24,.65)] transition-all duration-700" style={{ width: `${option.percent}%` }} />
            </div>
          </div>
        ))}
      </div>

      {voted ? (
        <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-sm font-bold text-emerald-100">
          <span>Vote accepted</span>
          <span className="rounded-full bg-emerald-300/15 px-2 py-0.5 text-xs text-emerald-200 animate-pulse">+10 XP</span>
        </div>
      ) : null}

      <button type="button" disabled={voted} onClick={() => setVoted(true)} className="relative mt-4 w-full rounded-2xl bg-gradient-to-r from-ember via-orange-500 to-gold py-3 text-sm font-black uppercase tracking-[.16em] text-white shadow-glow transition active:scale-95 disabled:cursor-not-allowed disabled:from-emerald-500/35 disabled:via-emerald-400/25 disabled:to-emerald-300/20">
        {voted ? 'Voted' : 'Cast vote'}
      </button>
    </article>
  );
}
