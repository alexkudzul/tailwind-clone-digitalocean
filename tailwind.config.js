/** @type {import('tailwindcss').Config} */
module.exports = {
  /**  content: indica a tailwind donde se encuentra los archivos que contiene las
   utility class (html, js, vue, etc) para ser compiladas */
  content: ['./*.html'],
  theme: {
    // Evitamos poner siempre px-5 en los container.
    container: {
      padding: '1.4rem',
    },
    extend: {
      fontFamily: {
        /** sans es el font por defecto que utiliza tailwind, se sobrescribirá con
         la que se va a utilizar de DigitalOcean ('Work Sans', sans-serif) */
        sans: "'Work Sans', sans-serif",
        cascadia: '"CascadiaCode"',
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-mediumdark': '#1d274c',
        'do-blue-medium': 'rgb(20, 86, 255)',
        'do-blue-light': 'rgb(0, 105, 255)',
        'do-blue-lighter': '#f9fafe',
      },
    },
  },
  plugins: [],
};
