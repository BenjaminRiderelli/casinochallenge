import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "light-bg-color": "var(--light-bg-color)",
        "dark-bg-color": "var(--dark-bg-color)",
        "light-text-color":"var(--light-text-color)",
        "dark-text-color": "var(--dark-text-color)",
        "p-btn-color":"var(--primary-btn-color)",
        "s-btn-color":"var(--secondary-btn-color)"
      }
    },
  },
  plugins: [],
}
export default config
