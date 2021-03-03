let input = 2;
switch (input % 2) {
    case 0:
        console.log("숫자 0"); //fall-through 발생
    case 1:
        console.log("숫자 1");
        break;
}
//if noFallthroughCasesInSwitch is true
let input2 = 0;
switch (input2) {
    case 0: //case절에 명령문을 넣지 않는다.
    case 1:
        console.log("숫자 1");
        break;
}
