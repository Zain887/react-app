/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      width: {
        '120': '10vw',
      }
    },
  },
  plugins: [],
}

