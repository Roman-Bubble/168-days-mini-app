'use client';

import { useState } from 'react';
import type { Vote } from '@/data/mock';

export function VotingCard({ vote }: { vote: Vote }) {
  const [voted, setVoted] = useState(false);

  return (
    <article
      className={`card p-4 transition duration-300 ${
        voted ? 'border-emerald-400/40 shadow-cyan' : ''
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase text-emerald-400">Active</span>
        <span className="tiny whitespace-nowrap">Reward +10 XP</span>
      </div>
      <h3 className="font-semibold leading-snug">{vote.title}</h3>
      {vote.budget ? <p className="mt-1 text-xs text-white/50">Budget: {vote.budget}</p> : null}

      <div className="mt-4 space-y-3">
        {vote.options.map((option) => (
          <div key={option.name}>
            <div className="mb-1 flex justify-between gap-3 text-xs">
              <span>{option.name}</span>
              <span>{option.percent}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded bg-white/10">
              <div
                className="h-full rounded bg-gradient-to-r from-ember to-gold transition-all duration-500"
                style={{ width: `${option.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {voted ? (
        <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200 animate-pulse">
          Your vote accepted · +10 XP
        </div>
      ) : null}

      <button
        type="button"
        disabled={voted}
        onClick={() => setVoted(true)}
        className="mt-4 w-full rounded-xl bg-gradient-to-r from-ember to-orange-500 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition active:scale-95 disabled:cursor-not-allowed disabled:from-emerald-500/30 disabled:to-emerald-400/20"
      >
        {voted ? 'Voted' : 'Vote'}
      </button>
    </article>
  );
}
