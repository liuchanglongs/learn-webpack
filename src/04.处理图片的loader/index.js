/**
 * @Author: lcl
 * @Date: 2025/6/23
 */
const img = require("./image.png");
console.log(img);
const dom = document.createElement("img");
dom.src = img;
document.body.appendChild(dom);
