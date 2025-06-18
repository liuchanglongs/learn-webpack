/**
 * @Author: lcl
 * @Date: 2025/6/18
 */
import _ from "lodash";
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
