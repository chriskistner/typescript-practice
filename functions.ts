function addNumber(num1: number, num2: number) {
    return num1 + num2;
}

function logResult(num: number) {
    console.log("result " + num);
}

function addAndHandle(num1: number, num2: number, cb: (a: number) => void) {
    const result = num1 + num2;
    cb(result);
}

logResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(5, 5));

addAndHandle(15, 25, logResult);