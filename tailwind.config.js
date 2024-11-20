/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#121212', // Fondo negro uniforme
        textMain: '#ffffff', // Texto blanco puro
        accent: '#ff8c00', // Botones naranja oscuro
        hoverAccent: '#cc7000', // Hover para botones
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'], // Tipografía tecnológica
      },
      borderRadius: {
        lg: '12px',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0, 0, 0, 0.2)', // Sombras suaves
        button: '0 3px 6px rgba(0, 0, 0, 0.4)', // Sombras para botones
      },
    },
  },
  plugins: [],
};
