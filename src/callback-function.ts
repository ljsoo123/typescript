function echoFunction(message: string, callback) {
  return callback(message);
}

let responseMessage = echoFunction("hello world!", (message) => message);
console.log(responseMessage);

//콜백 함수 타입 선언

type EchoCallbackType = (message: string) => void;

let callbackEcho: EchoCallbackType = (message) => message;
let callbackEchoWithLength: EchoCallbackType = (message) =>
  `${message}(${message.length})`;

function echoFunction2(message: string, callback) {
  return callback(message);
}

let responseEcho = echoFunction2("hello", callbackEcho);
let responseEchoWithLength = echoFunction2("hello", callbackEchoWithLength);

console.log(responseEcho);
console.log(responseEchoWithLength);
