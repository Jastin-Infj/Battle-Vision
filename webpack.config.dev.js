const PATH = require('path');

//const DIST_PATH = 'dist';
const DIST_PATH = 'src/backend/static';

const OUTPUT_PATH = PATH.resolve(__dirname , DIST_PATH);
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');
const ESLINT_WEBPACK_PLUGIN = require('eslint-webpack-plugin');
const BROWSER_SYNC_PLUGIN = require('browser-sync-webpack-plugin');

module.exports = {
  mode: "development",
  target: ["web", "es5"],
  devServer: {
    static: {
      directory: PATH.join(__dirname, DIST_PATH)
    },
    port: 8080,
    historyApiFallback: true
  },
  entry: ['react','react-dom/client'],
  output: {
    filename: '[name].[contenthash]].js',
    path: OUTPUT_PATH
  },
  module: {
    rules: [
      {
        test: /\.(jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
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
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg)/i,
        loader: 'url-loader',
        options: {
          limit: 0,
          name: 'images/[name].[contenthash]].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.tsx','.js','.jsx','.css','.json']
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      template: "./src/frontend/html/index.html",
      filename: "index.html"
    }),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: '[name].[contenthash]].css'
    }),
    new ESLINT_WEBPACK_PLUGIN({
      extensions: ['ts','tsx','js','jsx']
    }),
    new BROWSER_SYNC_PLUGIN({
      host: 'localhost',
      port: 8080,
      server: { baseDir: DIST_PATH }
    })
  ]
};