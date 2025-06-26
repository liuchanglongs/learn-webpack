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
    proxy: {
      "/api": {
        target: "http://open.duyiedu.com",
        changeOrigin: true, // 服务器去请求的时候把，请求头的host:http://localhost:9000/改成http://open.duyiedu.com
        //  pathRewrite: {'^/api' : ''} // 果你不想始终传递 /api ，则需要重写路径：
      },
    },
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
