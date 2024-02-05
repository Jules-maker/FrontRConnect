/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          dark: '#232323',
          DEFAULT: '#232323',
          light: '#FFFDF9',
        },
        'secondary': {
          dark:'#D9D18C',
          DEFAULT: '#D9D18C',
          light: '#D9D18C',
        },
        'tertiary': {
          dark:'#FFFDF9',
          DEFAULT: '#FFFDF9',
          light: '#232323',
        }
      },
    },
  },
  plugins: [],
}

