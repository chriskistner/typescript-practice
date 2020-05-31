console.log("Hello Me...");

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    if(showResult) {
      console.log(`${resultPhrase} ${num1 + num2}`)
    }
}

const number1 = 5;

const number2 = 10;

const printResult = true;

const resultPhrase = "Result is:";

add(number1, number2, printResult, resultPhrase);

