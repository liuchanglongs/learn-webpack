const loaderUtils = require("loader-utils");

const getbase64 = (buffer) =>
  "data:image/png;base64," + buffer.toString("base64");

const getPath = function (buffer, fileType) {
  const filename = loaderUtils.interpolateName(this, fileType, {
    content: buffer,
  });

  //   在最终的chunk assets 加入资源
  this.emitFile(filename, buffer);
  return filename;
};

function loader(sourceCode) {
  const { limit = 3000, filename = "[contenthash:5].[ext]" } =
    loaderUtils.getOptions(this);
  let url = "";
  if (limit < sourceCode.byteLength) {
    url = getPath.call(this, sourceCode, filename);
  } else {
    url = getbase64(sourceCode);
  }
  /**
   *  这样写报错，这里是字符串，但是必须是能被执行的js字符串
   * return `
   *  module.exports = ${base64};
   *  `;
   * module.exports = base64 ， base64是一堆字符串，
   * 相当于
   * var a = aaaa, 所以报错
   * */
  return `
   module.exports =   \`${url}\`;
  `;
}
// loader函数默认得到字符串，设置为true得到的是二进制
loader.raw = true;

module.exports = loader;
