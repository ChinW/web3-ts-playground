const webpack = require("webpack");
const path = require("path");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  mode: "development",
  target: "node",
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [path.resolve(__dirname, "./src/")],
        exclude: /node_modules/,
        loader: "swc-loader",
        options: {
          jsc: {
            target: "es2015",
          },
        },
      },
    ],
  },
  watchOptions: { ignored: /build/ },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "build"),
  },
  //   externals: [
  //     nodeExternals({
  //       allowlist: ["webpack/hot/poll?1000"],
  //     }),
  //   ],
  plugins: [
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     configFile: path.resolve(__dirname, "./tsconfig.json"),
    //   },
    // }),
  ],
};
