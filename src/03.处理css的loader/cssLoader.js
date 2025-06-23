module.exports = function (sourceCode) {
  console.log("code", sourceCode, typeof sourceCode);

  // var code = `var style = document.createElement("style");
  // style.innerHTML = \`${sourceCode}\`;
  // document.head.appendChild(style);
  // module.exports = \`${sourceCode}\`;
  // return code;
  // `;
  return `
   const style = document.createElement("style");
   style.innerHTML = \`${sourceCode}\`;
   document.head.appendChild(style);
   module.exports =   \`${sourceCode}\`;
  `;
};
