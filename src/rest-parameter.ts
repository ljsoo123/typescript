export {};

function colors(a: string, ...rest: string[]) {
  return a + "" + rest.join("");
}

let color1 = colors("red");
let color2 = colors("red", "orange");
