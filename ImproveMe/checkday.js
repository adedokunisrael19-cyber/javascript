const prompt = require("prompt-sync")()
day = prompt("enter the day")
switch(day){
    case "monday" :
        console.log("weekday");
        break;
    case "tuesday" :
        console.log("weekday");
         break;
    case "wednesday" :
        console.log("weekday");
           break;
    case "thursday" :
        console.log("weekday");
         break;
    case "Friday" :
        console.log("weekday");
         break;
    case "Saturday" :
        console.log("weekend");
         break;
     case "Sunday" :
        console.log("weekend");
         break;
      default :
        console.log("Not a day");
}
