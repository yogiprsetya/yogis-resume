/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      head: ['Merriweather', 'sans-serif']
    },
    extend: {
      colors: {
        cultured: '#d1d1d1',
        granite: '#666666',
        white: '#ffffff',
        blue: '#2079c7'
      }
    }
  },
  plugins: [],
  content: ['./src/**/*.{ts,tsx}']
};
