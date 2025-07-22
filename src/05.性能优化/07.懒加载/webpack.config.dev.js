/**
 * @Author: lcl
 * @Date: 2025/6/24
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  // 默认配置
  output: {
    filename: "script/[name]-[hash:6]-bundle.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径,
    publicPath: "/",
  },
  entry: "./src/index.js",
  // devtool: "source-map",
  devServer: {
    index: "index.html",
    open: true,
    port: 9000,
    hot: true,
  },
  // 控制打印的日志
  stats: {
    colors: true,
    chunks: false,
    modules: false,
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name][contenthash:5].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]-[name]-[local]-[hash:5]", //配置最终的类名（一般情况是不需要弄的）
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new CopyPlugin([{ from: "./public", to: "./" }]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:5].css", // 配置生成的css文件名
      chunkFilename: "comon.[hash:5].css",
    }),

    new CleanWebpackPlugin(),
  ],
};
