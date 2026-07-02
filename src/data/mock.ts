export type UserStatKey = 'Votes' | 'Predictions' | 'XP this week' | 'Invites';

export type Startup = {
  name: string;
  category: string;
  day: number;
  revenue: string;
  users: string;
  logo: string;
  accent: string;
};

export type VoteOption = {
  name: string;
  percent: number;
};

export type Vote = {
  id: string;
  title: string;
  budget?: string;
  options: VoteOption[];
};

export const user = {
  name: 'Nathan',
  level: 12,
  xp: 4560,
  xpMax: 7000,
  rating: 'Top 3%',
  participants: '12,456',
  stats: {
    Votes: 24,
    Predictions: 12,
    'XP this week': 560,
    Invites: 7,
  } satisfies Record<UserStatKey, number>,
};

export const badges = [
  { title: 'First vote', icon: '▲', locked: false },
  { title: 'Active viewer', icon: '◈', locked: false },
  { title: 'Strategist', icon: '♜', locked: false },
  { title: 'XP expert', icon: '🔒', locked: true },
];

export const startups: Startup[] = [
  {
    name: 'AI WISER',
    category: 'AI / SaaS',
    day: 67,
    revenue: '$12,430',
    users: '1,245',
    logo: 'AW',
    accent: 'from-violet-500 to-cyan-300',
  },
  {
    name: 'TASKHUB',
    category: 'Productivity / SaaS',
    day: 67,
    revenue: '$8,210',
    users: '892',
    logo: '✓',
    accent: 'from-emerald-400 to-green-600',
  },
  {
    name: 'FLOWIT',
    category: 'Health / Mobile App',
    day: 67,
    revenue: '$5,320',
    users: '645',
    logo: '✦',
    accent: 'from-pink-400 to-rose-600',
  },
];

export const votes: Vote[] = [
  {
    id: 'budget',
    title: 'Which marketing channel should receive the budget?',
    budget: '$5,000',
    options: [
      { name: 'TikTok / Reels', percent: 45 },
      { name: 'Google Ads', percent: 30 },
      { name: 'YouTube', percent: 15 },
      { name: 'Telegram Ads', percent: 10 },
    ],
  },
  {
    id: 'feature',
    title: 'Which feature should be added first?',
    options: [
      { name: 'AI analytics', percent: 40 },
      { name: 'Team collaboration', percent: 35 },
      { name: 'Integrations', percent: 25 },
    ],
  },
];

export const menu = [
  'Achievements',
  'Activity history',
  'My predictions',
  'Settings',
  'Support',
  'About project',
];
