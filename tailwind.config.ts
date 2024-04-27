import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'discord-blue': '#7289da',
        'discord-100': '#b5bac1',
        'discord-300': '#313338',
        'discord-600': '#2b2d31',
        'discord-900': '#1e1f22',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
