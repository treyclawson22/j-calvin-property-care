import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hunter': {
          DEFAULT: '#1a3d2e',
          light: '#2d5a45',
          medium: '#4a7c59',
        },
        'cream': {
          DEFAULT: '#faf8f5',
          dark: '#f5f3f0',
        },
        'bronze': {
          DEFAULT: '#b87333',
          light: '#e8c496',
        },
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
