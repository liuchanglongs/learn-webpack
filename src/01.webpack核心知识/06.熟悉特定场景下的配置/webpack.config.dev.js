const path = require("path");
const { library } = require("webpack");
console.log(2);

module.exports = {
  // 默认配置
  output: {
    // filename: "./script/[name]-[chunkhash:6]-bundle.js",
    filename: "./script/main.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
    library: "$",
    libraryTarget: "window",
  },
  entry: "./index.js",
  devtool: "source-map",
  context: path.resolve(__dirname, "src"),
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
    modules: ["a", "node_modules"],
    extensions: [".js", ".json", ".css"],
  },
  externals: {
    jquery: "myjquery",
  },
};
