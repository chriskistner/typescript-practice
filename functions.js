"use strict";
function addNumber(num1, num2) {
    return num1 + num2;
}
function logResult(num) {
    console.log("result " + num);
}
function addAndHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
logResult(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(5, 5));
addAndHandle(15, 25, logResult);
