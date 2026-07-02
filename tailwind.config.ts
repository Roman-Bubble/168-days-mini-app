import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ember: '#ff7a18', gold: '#ffb84d', night: '#05070d', panel: '#0b101a', cyan: '#35f3ff' }, boxShadow: { glow: '0 0 35px rgba(255, 122, 24, .18)', cyan: '0 0 24px rgba(53, 243, 255, .16)' } } }, plugins: [] };
export default config;
