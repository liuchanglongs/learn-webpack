/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
const path = require("path");

module.exports = {
  // 默认配置
  output: {
    filename: "./script/[name]-[chunkhash:6]-bundle.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
  },
  devtool: "source-map",
  module: {
    rules: [
      //规则1
      {
        test: /index\.js$/,
        use: [
          {
            loader: "./src/02.loader执行顺序/loader1", //加载器的路径
            options: {},
          },
          "./src/02.loader执行顺序/loader2.js",
        ],
      },
      //规则2
      {
        test: /\.js$/,
        use: ["./src/02.loader执行顺序/loader2.js"],
      },
    ],
  },
};
