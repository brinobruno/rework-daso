/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        darkbg: 'url(/src/assets/dark-background.jpg)'
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        josefin: 'Josefin Sans, sans-serif',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#757575',
          900: '#09090A'
        },
        purple: {
          300: '#A56AB9',
          500: '#A943CB',
          900: '#505AAA',
        },
      }
    },
  },
  plugins: [],
}
