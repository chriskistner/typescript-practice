"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "5";
userName = "Chris";
if (typeof userName === "string") {
    userInput = userName;
}
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError("An error has occured", 500);
