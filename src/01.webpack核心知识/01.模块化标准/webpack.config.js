/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
const path = require("path");

module.exports = {
  // 默认配置
  // entry: "./src/index.js",
  entry: {
    main: "./src/index.js", // 属性名是chunk的名称，属性值是一个chunk入口模块
    module: "./src/01.模块化标准/index.js", // 属性名是chunk的名称，属性值是入口模块
    many: ["./src/index.js", "./src/01.模块化标准/index.js"], // 一个chunk多个入口模块
  },
  // 默认配置
  output: {
    /**
     * 配置合并的js文件的规则：
     * 静态规则：script/bundle.js 在dist目录下script目录下；
     * 动态规则：[]
     * - [name]:替换成chunk的名称
     * - [hash:number]：生成number位的chunk assets hash（总的资源的content hash），
     *    一个chunk内容改变，chunk assets hash 就会改变
     *    防止浏览器缓存请求的静态资源，不去请求新的资源
     * - [chunkhash:number]：生成number位的chunk hash
     *   对应的chunk内容改变，chunk assets hash 就会改变
     * - [id]:不推荐，生产环境、开发环境每个环境规则不一样
     */
    // filename: "./script/bundle.js",
    // filename: "./script/[name]-[hash:6]-bundle.js",
    filename: "./script/[name]-[chunkhash:6]-bundle.js",
    path: path.resolve(__dirname, "dist"), // 必须为绝对路径
  },
  devtool: "source-map",
};
