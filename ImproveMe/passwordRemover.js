function passwordRemover(){
    const user = {
        username: "admin",
        password: "12345"}; 
    const {password} = user;
        return password;
}

console.log(passwordRemover());
