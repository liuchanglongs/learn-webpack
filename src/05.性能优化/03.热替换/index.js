if (module.hot) {
  // 是否开启了热更新
  module.hot.accept(); // 接受热更新
}
const input = document.createElement("input");
const dom = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerHTML = 123;
dom.appendChild(h1);
dom.appendChild(input);
