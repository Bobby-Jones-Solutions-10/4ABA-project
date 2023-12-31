/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'secondary-color': '#78B0E4',
        'background-color': '#d9d9d9',
        't-description': '#475569',
        't-main': '#111827',
        'success': '#49A078'
      },
      boxShadow: {
        'activeLink': '0 10px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
}