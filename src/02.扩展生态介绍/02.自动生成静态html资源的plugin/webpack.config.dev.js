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
  entry: {
    main: "./src/index.js",
    home: "./src/index.js",
  },
  devtool: "source-map",
  module: {
    noParse: /\.index.js/,
    rules: [
      //规则1
      {
        test: /\.(png)|(jpg)/,
        use: [
          {
            loader: "./04.处理图片的loader/pictureLoader.js",
            options: {
              limit: 3000,
              filename: "[contenthash:5].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".css"],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ["main"],
      template: "./public/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["home"],
      template: "./public/index.html",
      filename: "home.html",
    }),
  ],
};
