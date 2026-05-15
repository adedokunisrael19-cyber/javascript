function login(username, password){
    if (password.length < 8){
        return "Invalid password";
    }else if(password.length > 8){
        return "valid password";
    }
}

console.log(login("ade", "adeoluwanimi"));
