/**
 * @Author: lcl
 * @Date: 2025/6/24
 */
module.exports = class ListFilePlugin {
  constructor(fileName = "list.md") {
    this.fileName = fileName;
  }
  apply(compiler) {
    compiler.hooks.emit.tap("ListFilePlugin", (compilation) => {
      const info = [];
      for (const key in compilation.assets) {
        info.push(
          `【${key}】\n大小：${compilation.assets[key].size() / 1000}KB`
        );
      }
      const str = info.join("\n");
      compilation.assets[this.fileName] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
};
