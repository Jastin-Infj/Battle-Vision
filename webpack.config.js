const PATH = require('path');

const OUTPUT_PATH = PATH.resolve(__dirname , 'dist');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: OUTPUT_PATH
  },
  devServer: {
    static: {
      directory: PATH.join(__dirname, 'dist')
    }
  }
};