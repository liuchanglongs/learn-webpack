/**
 * @Author: lcl
 * @Date: 2025/7/21
 */
const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery"],
    lodash: ["lodash"],
  },
  output: {
    filename: "dll/[name].js",
    path: path.resolve(__dirname, "public"), // 必须为绝对路径
    publicPath: "/",
    library: "[name]", // 每个bundle暴露的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "manifest", "[name].manifest.json"),
      name: "[name]", //资源清单中，暴露的变量名
    }),
  ],
};
