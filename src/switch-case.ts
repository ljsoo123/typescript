let command: number = 0;
let command2: any = "hi";

switch (command) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  //...
}

switch (command2) {
  case "hi":
    console.log("hi");
    break;
  case 0:
    console.log(0);
    break;
}
