/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1abc9c',
        'primary-dark': '#16a085',
        secondary: '#2C3E50',
        crimson: '#DC143C'
      },
    },
  },
  plugins: [],
};