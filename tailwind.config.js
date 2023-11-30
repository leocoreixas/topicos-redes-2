/** @type {import('tailwindcss').Config} */
export default ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'h1': '56px',
      'h2': '48px',
      'h3': '40px',
      'h4': '32px',
      'h5': '24px',
      'h6': '20px',
      'label-lg': '14px',
      'label-md': '12px',
      'label-sm': '10px',
      'body-lg': '16px',
      'body-md': '14px',
      'body-sm': '12px',
      'subtitle': '16px',
      'caption': '10px'
    },
    borderColor: theme => ({
      ...theme('colors'),
    }),
    textColor: theme => ({
      ...theme('colors'),
    }),
    fill: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontSize: {
        'subtitle': '16px'
      },
      fontWeight: {
        'semibold': '600'
      },
      colors: {
        'primary-l': '#B2CDFF',
        'primary-m': '#087FFB',
        'primary-d': '#024B99',
        'primary-h': '#006BDD',
        'secondary-l': '#BAAFFA',
        'secondary-m': '#6146FA',
        'secondary-d': '#342687',
        'secondary-h': '#4F39CB',
        'gray-900': '#34383D',
        'gray-800': '#464A52',
        'gray-700': '#4F545C',
        'gray-600': '#696F7A',
        'gray-500': '#79828F',
        'gray-400': '#8B95A3',
        'gray-300': '#9CA7B8',
        'gray-200': '#DFE6F0',
        'gray-100': '#F2F4F6',

        'error-l': '#FEE2E3',
        'error-m': '#E02D38',

        'success': '#7EFFC1',
        'warning': '#F0C93C',
        'info': '#36F3FF',

      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1turn)' },
        },
        rotateOpacity: {
          '0%': {
            transform: 'rotate(0deg)',
            opacity: 0.1,
          },
          '100%': {
            transform: 'rotate(1turn)',
            opacity: 1,
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { 
            transform: 'translateY(10px)',
            opacity: 0 
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: 1
          },
        }
      },
      animation: {
        rotate: 'rotate ease-in 1s infinite',
        rotateOpacity1: 'rotateOpacity ease-in 1s infinite 0.1s',
        rotateOpacity2: 'rotateOpacity ease-in 1s infinite 0.2s',
        fadeIn: 'fadeIn ease-out 0.2s',
        fadeUp: 'fadeUp ease-out 0.2s'
      }
    },
  },
  plugins: [],
})
