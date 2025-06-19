/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
const path = require("path");

module.exports = {
  // 默认配置
  entry: "./src/index.js",
  // 默认配置
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
