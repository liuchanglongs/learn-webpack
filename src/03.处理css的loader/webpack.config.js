/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
const path = require("path");

module.exports = {
  // 默认配置
  output: {
    // filename: "./script/[name]-[chunkhash:6]-bundle.js",
    filename: "./script/main.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
  },
  devtool: "source-map",
  module: {
    rules: [
      //规则1
      {
        test: /\.css$/,
        use: ["./src/03.处理css的loader/cssLoader.js"],
      },
    ],
  },
};
