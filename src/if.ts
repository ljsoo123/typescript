let text: string = "";
let statusActive: number = 0;
let isEnabled: boolean = true;

if (statusActive || text) {
  console.log("1");
}

if (isEnabled && 2 > 1) {
  console.log("2");
}
