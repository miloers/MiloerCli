require("Style/demo.css");
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
