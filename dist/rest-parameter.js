function colors(a, ...rest) {
    return a + "" + rest.join("");
}
let color1 = colors("red");
let color2 = colors("red", "orange");
export {};
