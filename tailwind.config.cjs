module.exports = {
  content: ["./src/**/**/*.{html,ts,tsx,js,jsx}","./src/backend/static/*.{html,js,css}"],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: {
          top: {
            btn: {
              bgColor: 'rgba(59, 58, 109, 1)',
              boColor: 'rgba(111, 105, 124, 1)',
            }
          }
        }
      },
      fontFamily: {
        'Inter-Chrome': ['"InterChrome"','sans-serif'],
        'Inter-Default': ['"Inter"','sans-serif']
      }
    }
  }
}