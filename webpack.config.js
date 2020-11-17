// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build"),
    chunkFilename: "[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/template/index.html`,
      filename: "index.html",
      inject: "body",
    }),
  ],
};
