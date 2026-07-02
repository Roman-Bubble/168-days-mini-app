'use client';

import type React from 'react';
import { useState } from 'react';
import { BottomNav } from './BottomNav';
import { Home, Profile, Startups, Voting } from './Screens';

export type Screen = 'home' | 'startups' | 'voting' | 'profile';

export function AppShell() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const screens: Record<Screen, React.ReactNode> = {
    home: <Home setActive={setActiveScreen} />,
    startups: <Startups />,
    voting: <Voting />,
    profile: <Profile />,
  };

  return (
    <main className="min-h-screen overflow-x-hidden md:grid md:place-items-center md:p-6">
      <div className="relative mx-auto h-[100dvh] w-full max-w-[420px] overflow-hidden bg-[#030611] md:h-[860px] md:rounded-[2.25rem] md:border md:border-white/10 md:shadow-[0_24px_90px_rgba(0,0,0,.72)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-5%,rgba(255,122,24,.18),transparent_32%),linear-gradient(180deg,rgba(8,16,31,.92),#020307_62%)]" />
        <div className="scrollbar-none relative h-full overflow-y-auto overflow-x-hidden px-4 pb-36 pt-5 [scrollbar-gutter:stable]">
          {screens[activeScreen]}
        </div>
        <BottomNav active={activeScreen} setActive={setActiveScreen} />
      </div>
    </main>
  );
}
