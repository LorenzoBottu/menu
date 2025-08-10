/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Definiamo la nostra palette di colori personalizzata
      colors: {
        'brand-background': '#121212', // Nero quasi assoluto per lo sfondo
        'brand-surface': '#1E1E1E',   // Una superficie leggermente più chiara per le card
        'brand-primary': '#D4AF37',   // Un oro/ottone per gli accenti
        'brand-text': '#E0E0E0',      // Un testo bianco sporco, più riposante
        'brand-text-secondary': '#A0A0A0', // Testo secondario/descrizioni
      },
      // Definiamo i nostri font personalizzati
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}