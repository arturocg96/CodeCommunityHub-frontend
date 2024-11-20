/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'], // Escanea archivos Angular
  darkMode: 'class', // Activa modo oscuro con la clase `dark`
  theme: {
    extend: {
      colors: {
        // MODO OSCURO
        background: '#121212', // Fondo negro
        textMain: '#ffffff', // Texto blanco
        buttonBackgroundDark: '#ffffff', // Fondo botones
        buttonTextDark: '#000000', // Texto botones
        buttonHoverBackgroundDark: '#000000', // Hover: Fondo negro
        buttonHoverTextDark: '#ffffff', // Hover: Texto blanco
        buttonBorderDark: '#ffffff', // Hover: Borde blanco
        linkHoverDark: '#ffc107', // Hover links (amarillo)

        // MODO CLARO
        lightBackground: '#ffffff', // Fondo blanco
        lightTextMain: '#000000', // Texto negro
        buttonBackgroundLight: '#000000', // Fondo botones
        buttonTextLight: '#ffffff', // Texto botones
        buttonHoverBackgroundLight: '#ffffff', // Hover: Fondo blanco
        buttonHoverTextLight: '#000000', // Hover: Texto negro
        buttonBorderLight: '#000000', // Hover: Borde negro
        linkHoverLight: '#ffc107', // Hover links (amarillo)
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        lg: '12px',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0, 0, 0, 0.2)', // Sombra ligera
        button: '0 3px 6px rgba(0, 0, 0, 0.4)', // Sombra de botones
      },
    },
  },
  plugins: [],
};
