function carBrand(){
    const car = {
        brand : "Toyota",
        model: "Camry",
        available: true
}
    if(car.available){
       return console.log("this car is available");
}else{
        return console.log("not available ")}
}

carBrand();
