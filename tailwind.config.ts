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
        first: '#040D12',
        second: '#183D3D',
        third: '#5C8374',
        fourth: '#5C8374',
      }
    },
  },
  plugins: [],
}
export default config
