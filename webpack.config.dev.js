/**
 * @Author: lcl
 * @Date: 2025/6/24
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  // 默认配置
  output: {
    filename: "./script/[name]-[chunkhash:6]-bundle.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
  },
  entry: "./src/index.js",
  devtool: "source-map",
  devServer: {
    index: "index.html",
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 33136640,
              name: "./file-loader/[name][contenthash:5].[ext]",
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "./file-loader/[name][contenthash:5].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new CopyPlugin([{ from: "./public", to: "./" }]),
  ],
};
