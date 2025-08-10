/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#121212',
        'brand-surface': '#1E1E1E',
        'brand-primary': '#D4AF37',
        'brand-text': '#E0E0E0',
        'brand-text-secondary': '#A0A0A0',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}