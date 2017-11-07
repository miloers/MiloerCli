require("Style/demo.css");

import v from "../common/vconsole.js"; // 手机端 测试专用
const a = 1;
let b = 2;
class demo {
  constructor() {}

  add(a = 4, b = 5) {
    return a + b;
  }
}
let c = new demo();
let d = c.add(a, b);
alert(d);

var vConsole = new v(); // 手机端 测试专用
