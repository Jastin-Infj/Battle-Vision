/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{ts,tex}","./src/**/**/*.{html,ts,tsx,js,jsx}","./src/backend/static/*.{html,js,css}"],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        'Inter-Chrome': ['"InterChrome"','sans-serif'],
        'Inter-Default': ['"Inter"','sans-serif']
      }
    }
  }
}