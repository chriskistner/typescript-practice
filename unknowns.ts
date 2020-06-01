let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "5";
userName = "Chris";

if (typeof userName === "string") {
    userInput = userName;
}

function generateError(message: string, code: number): never {
    throw {message, errorCode: code};
}

generateError("An error has occured", 500);