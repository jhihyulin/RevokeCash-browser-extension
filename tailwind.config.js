/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          150: '#EBEBEB',
          200: '#E5E5E5',
          250: '#DDDDDD',
          300: '#D4D4D4',
          350: '#BCBCBC',
          400: '#A3A3A3',
          450: '#8B8B8B',
          500: '#737373',
          550: '#636363',
          600: '#525252',
          650: '#4A4A4A',
          700: '#404040',
          750: '#2F2F2F',
          800: '#262626',
          850: '#1F1F1F',
          900: '#171717',
          950: '#0F0F0F',
          1000: '#000000',
        },
        brand: '#FDB952',
        'brand-red': '#FC526A',
        'brand-green': '#52FD96',
      },
      spacing: {
        30: '7.5rem',
        92: '23rem',
        100: '25rem',
        104: '26rem',
        150: '37.5rem',
      },
    },
  },
  plugins: [],
};
