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
        'brand-primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'brand-background': 'rgb(var(--color-background) / <alpha-value>)',
        'brand-text': 'rgb(var(--color-text) / <alpha-value>)',
        'brand-text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}