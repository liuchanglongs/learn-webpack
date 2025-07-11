/**
 * @Author: lcl
 * @Date: 2025/6/23
 */
import style from "./css1.css";
import style2 from "./css2.css";
console.log(style);

const dom = document.createElement("div");
dom.className = style["box-one"];
document.body.appendChild(dom);

const dom1 = document.createElement("div");
dom1.className = style2["box-two"];
document.body.appendChild(dom1);
