/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#060610',
        bg2: '#0d0d1e',
        purple: '#7c3aed',
        blue: '#3b82f6',
        cyan: '#06b6d4',
        pink: '#ec4899',
        muted: '#8b8baa',
      },
    },
  },
  plugins: [],
}
