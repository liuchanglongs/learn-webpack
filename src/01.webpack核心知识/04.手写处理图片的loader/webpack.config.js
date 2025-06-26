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
        test: /\.(png)|(jpg)/,
        use: [
          {
            loader: "./src/04.处理图片的loader/pictureLoader.js",
            options: {
              limit: 3000,
              filename: "[contenthash:5].[ext]",
            },
          },
        ],
      },
    ],
  },
};
