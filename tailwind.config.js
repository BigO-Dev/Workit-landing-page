/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#24053E',
        'davys-grey': '#584D62',
        'eucalyptus': '#44FFA1',
        'ghost-white': '#FCF8FF',
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/bg-pattern-1.svg')",
        'rectangle': "url('/assets/images/Rectangle.png')",
      },
    },
  },
}
