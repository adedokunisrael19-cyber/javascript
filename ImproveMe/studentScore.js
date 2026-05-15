function studentScore(){
    const prompt = require ("prompt-sync")();
    const score = Number(prompt("type in your score: "))
    if(score>= 70){
        console("A");
}else if(score <70 && score >= 60){
    console.log("B")
}else if(score >=60 && score<=69){
    console.log("C")
}else if(score >=50 && score <=59 ){
    console.log("D")
}else{
    console.log("F")
}
}


studentScore(67)
