function echoFunction(message, callback) {
    return callback(message);
}
let responseMessage = echoFunction("hello world!", (message) => message);
console.log(responseMessage);
let callbackEcho = (message) => message;
let callbackEchoWithLength = (message) => `${message}(${message.length})`;
function echoFunction2(message, callback) {
    return callback(message);
}
let responseEcho = echoFunction2("hello", callbackEcho);
let responseEchoWithLength = echoFunction2("hello", callbackEchoWithLength);
console.log(responseEcho);
console.log(responseEchoWithLength);
