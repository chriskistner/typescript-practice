function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === "number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 26, "number");
var combinedAgesStr = combine("30", "26", "number");
console.log(combinedAges);
console.log(combinedAgesStr);
var combineName = combine("Chris", "Kistner", "string");
console.log(combineName);
