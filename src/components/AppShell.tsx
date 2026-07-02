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
      <div className="relative mx-auto h-[100dvh] w-full max-w-[430px] overflow-hidden bg-night md:h-[860px] md:rounded-[2rem] md:border md:border-white/10 md:shadow-2xl">
        <div className="h-full overflow-y-auto overflow-x-hidden px-4 pb-24 pt-5">
          {screens[activeScreen]}
        </div>
        <BottomNav active={activeScreen} setActive={setActiveScreen} />
      </div>
    </main>
  );
}
