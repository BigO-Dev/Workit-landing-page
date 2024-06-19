/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/background-pattern-desktop.svg)",
      },
      fontSize: {
        '6xl': '3.5rem',
      },
      colors: {
        'pale-purple': '#8B6990',
        'light-pink': '#F8EEFF',
      },
    },
  },
}
