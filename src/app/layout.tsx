import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '168 DAYS Mini App', description: 'Frontend-only Telegram Mini App prototype' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
