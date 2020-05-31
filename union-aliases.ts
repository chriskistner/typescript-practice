type Combinable = number | string;
type Conversions = "number" | "string";

function combine(input1: Combinable, input2: Combinable, 
  resultType: Conversions) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultType === "number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "number");

const combinedAgesStr = combine("30", "26", "number");

console.log(combinedAges);

console.log(combinedAgesStr);

const combineName = combine("Chris", "Kistner", "string");

console.log(combineName);