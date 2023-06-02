const PATH = require('path');

const OUTPUT_PATH = PATH.resolve(__dirname , 'dist');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main_[hash].js',
    path: OUTPUT_PATH
  },
  module: {
    rules: [
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
  ],
  devServer: {
    static: {
      directory: PATH.join(__dirname, 'dist')
    }
  }
};