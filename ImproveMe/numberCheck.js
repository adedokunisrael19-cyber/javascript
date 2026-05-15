const prompt = require ("prompt-sync")()
let userInput = Number(prompt("Enter a number: "))

if (userInput %2 == 0){
    console.log("Even Number");
}else {
    console.log("Odd number");
}
