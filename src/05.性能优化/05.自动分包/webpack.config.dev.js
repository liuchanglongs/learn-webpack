/**
 * @Author: lcl
 * @Date: 2025/6/24
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 默认配置
  output: {
    filename: "script/[name]-[hash:6]-bundle.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径,
    publicPath: "/",
  },
  entry: "./src/index.js",
  // devtool: "source-map",
  devServer: {
    index: "index.html",
    open: true,
    port: 9000,
    hot: true,
  },
  // 控制打印的日志
  stats: {
    colors: true,
    chunks: false,
    modules: false,
  },
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",
      // maxSize: 60,
      //    automaticNameDelimiter: ".",
      //    minChunks: 2,
      //  minSize: 30000   // 达到30kb才要分包
      // 自定义缓存组
      cacheGroups: {
        styles: {
          test: /\.css$/, // 匹配样式模块
          minSize: 100, // 默认的最小尺寸，
          minChunks: 1, // 覆盖默认的最小chunk引用数
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name][contenthash:5].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]-[name]-[local]-[hash:5]", //配置最终的类名（一般情况是不需要弄的）
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: "./public", to: "./" }]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:5].css", // 配置生成的css文件名
      chunkFilename: "comon.[hash:5].css",
    }),

    new CleanWebpackPlugin(),
  ],
};
