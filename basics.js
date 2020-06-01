"use strict";
console.log("Hello Me...");
function addNum(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(`${resultPhrase} ${num1 + num2}`);
    }
}
const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase = "Result is:";
addNum(number1, number2, printResult, resultPhrase);
