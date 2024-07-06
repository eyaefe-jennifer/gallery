/** @type {import('tailwindcss').Config} */

const tailwindReset = require('./app/tailwindReset');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
      colors: {
        customYellow: '#EDC16C',
      },
       fontFamily: {
        'fab': ['Font Awesome\\ 5 Brands'],
        'fal': ['Font Awesome\\ 5 Pro'],
        'far': ['Font Awesome\\ 5 Pro'],
      },
      fontSize: {
        'mobile': '26px',
        'xs': '.75em',
        'sm': '.875em',
        'lg': '1.33333em',
        '1x': '1em',
        '2x': '2em',
        '3x': '3em',
        '4x': '4em',
        '5x': '5em',
        '6x': '6em',
        '7x': '7em',
        '8x': '8em',
        '9x': '9em',
        '10x': '10em',
      },
      width: {
        '5': '1.25em',
        '100': '100%',
      },
      lineHeight: {
        '75': '.75em',
        '2': '2em',
        'inherit': 'inherit', // Added for .fa-stack-1x
      },
      listStyleType: {
        'none': 'none',
      },
      margin: {
        'left': '2.5em 0 0 2.5em',
      },
      padding: {
        'left': '0 0 0 2.5em',
      },
      borderWidth: {
        '08': '.08em',
      },
      borderRadius: {
        '1': '.1em',
      },
      animation: {
        'spin': 'fa-spin 2s linear infinite',
        'pulse': 'fa-spin 1s steps(8) infinite',
      },
      keyframes: {
        'fa-spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          'to': {
            transform: 'rotate(360deg)',
          },
        },
        'fa-pulse': {
          '0%, 50%': {
            opacity: '1',
          },
          '25%, 75%': {
            opacity: '0.25',
          },
        },
      },
    },
    variants: {
      extend: {
        fontSize: ['responsive'],
      },
    },
  },
  plugins: [
    // require(tailwindReset)
  ],
};
