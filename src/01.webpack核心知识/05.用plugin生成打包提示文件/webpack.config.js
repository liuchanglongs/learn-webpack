/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
const path = require("path");
const ListFilePlugin = require("./src/05.用plugin生成打包提示文件/listFilePlugin");

module.exports = {
  // 默认配置
  output: {
    // filename: "./script/[name]-[chunkhash:6]-bundle.js",
    filename: "./script/main.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
  },
  devtool: "source-map",
  plugins: [new ListFilePlugin()],
};
