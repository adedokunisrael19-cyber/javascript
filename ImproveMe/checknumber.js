function checknumber(number){
if(number <0){
    return"negative"
}else if(number >0){
    return "positive"
    }else{
    return "Zero"
    }
}



console.log(checknumber(0));
console.log(checknumber(10));
console.log(checknumber(-10));
