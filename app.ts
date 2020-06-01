const userFullName = "Christopher Kistner";

const testButton = document.querySelector("button")! as HTMLButtonElement;

testButton.addEventListener("click", () => console.log(userFullName));