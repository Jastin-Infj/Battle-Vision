module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    main: {
      import: './src/frontend/ts/test.tsx',
      dependOn: 'shared'
    },
    shared: ['lodash']
  },
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
        exclude: /node_modules/
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
  devServer: {
    static: {
      directory: `${__dirname}/dist`
    }
  },
};