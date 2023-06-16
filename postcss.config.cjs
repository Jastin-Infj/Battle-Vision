module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 5,
      propList: ["*"]
    }
  }
};