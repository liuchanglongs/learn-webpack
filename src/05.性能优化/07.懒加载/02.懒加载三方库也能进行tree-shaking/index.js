// index.js
const btn = document.createElement("button");
btn.onclick = async function () {
  // 当按钮被点击后才会去读取 util这个文件
  //动态加载
  //import 是ES6的草案
  //浏览器会使用JSOP的方式远程去读取一个js模块
  //import()会返回一个promise   （* as obj）
  // const { chunk } = await import(/* webpackChunkName:"lodash" */"lodash-es");
  const { chunk } = await import("./util");
  // 直接引入无法进行tree-shaking
  // const { chunk } = await import("lodash-es");

  const result = chunk([3, 5, 6, 7, 87], 2);
  console.log(result);
};
btn.innerHTML = "点击";
document.body.appendChild(btn);
