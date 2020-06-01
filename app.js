var userInput;
var userName;
userInput = 5;
userInput = "5";
if (typeof userName === "string") {
    userInput = userName;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error has occured", 500);
