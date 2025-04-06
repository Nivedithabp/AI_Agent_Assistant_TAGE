/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mint': '#29A0B1',
        'spearmint': '#167D7F',
        'teal': '#006D77',
        'teal-green': '#00474B'
      }
    },
  },
  plugins: [],
};