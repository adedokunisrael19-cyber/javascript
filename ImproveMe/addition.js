function addition(numberone, numbertwo){
    const prompt = require('prompt-sync')()
    numberone = Number(prompt("enter a number: "))
    numbertwo  = Number(prompt("enter a number: "))
    return numberone + numbertwo;
}


console.log(addition())
