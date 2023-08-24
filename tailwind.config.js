/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const colorWithoutYellowAndBlack = {}
Object.keys(colors).forEach(color => {
  if (color !== 'yellow' && color !== 'black') {
    colorWithoutYellowAndBlack[color] = colors[color]
  }
})

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#040201',
      yellow: '#FCCF35',
      ...colorWithoutYellowAndBlack
    },
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'Oxygen', ...defaultTheme.fontFamily.sans],
        mono: ['"Oxygen Mono"', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}