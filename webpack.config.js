const PATH = require('path');

const OUTPUT_PATH = PATH.resolve(__dirname , 'dist');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');

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
      },
      {
        test: /\.s?css$/,
        use: [
          MINI_CSS_EXTRACT_PLUGIN.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: '[name].[hash].css'
    }),
  ],
  devServer: {
    static: {
      directory: PATH.join(__dirname, 'dist')
    }
  }
};