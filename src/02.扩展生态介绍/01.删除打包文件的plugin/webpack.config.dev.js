/**
 * @Author: lcl
 * @Date: 2025/6/24
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // 默认配置
  output: {
    filename: "./script/[name]-[chunkhash:6]-bundle.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
  },
  devtool: "source-map",

  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".css"],
  },

  plugins: [new CleanWebpackPlugin()],
};
