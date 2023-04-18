/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-about': "url('/assets/about/building.png')",
        'hero-services': "url('/assets/services/equipment.png')",
        'hero-contact': "url('/assets/contact/office-phone.png')",
        'hero-book': "url('/assets/book/laptop.png')",
      },
      colors: {
        primary: {
          100: '#4EABC2',
          200: '#D9EDF2',
          300: '#21535F',
          400: '#E8F9F1'
        },
        gray: {
          50: '#F7FBFC',
          750: '#93A0A4',
          850: '#485356',
          950: '#1E2324'
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};

module.exports = config;
