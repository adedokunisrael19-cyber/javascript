const prompt = require ("prompt-sync")()
let userInput = Number(prompt("Enter your age "))

if (userInput <13){
    console.log("Child");
}else if(userInput >= 13 && userInput <= 19) {
    console.log("Teen");
}else{
    console.log("Adult");
}
