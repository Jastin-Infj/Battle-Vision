module.exports = {
  mode: "development",
  entry: {
    main: {
      import: './src/frontend/ts/test.tsx',
      dependOn: 'shared'
    },
    shared: ['lodash']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
  devServer: {
    static: {
      directory: `${__dirname}/dist`
    }
  },
};