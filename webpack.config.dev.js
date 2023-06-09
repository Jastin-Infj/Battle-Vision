const PATH = require('path');

//const DIST_PATH = 'dist';
const DIST_PATH = 'src/backend/static';

const OUTPUT_PATH = PATH.resolve(__dirname , DIST_PATH);
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');
const ESLINT_WEBPACK_PLUGIN = require('eslint-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    module: ['react','react-dom/client'],
    main: {
      import: './src/frontend/ts/index.tsx',
      dependOn: 'module'
    }
  },
  output: {
    filename: '[name].js',
    path: OUTPUT_PATH,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          limit: 0,
          name: './images/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.tsx','.js','.jsx','.json']
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      template: "./src/frontend/html/index.html",
      filename: "index.html"
    }),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: '[name].[hash].css'
    }),
    new ESLINT_WEBPACK_PLUGIN({
      extensions: ['ts','tsx','js','jsx']
    })
  ],
  devServer: {
    static: {
      directory: PATH.join(__dirname, DIST_PATH)
    }
  },
  target: ["web", "es5"]
};