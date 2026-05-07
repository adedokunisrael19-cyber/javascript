 const account = { 
	balance: 500, 
	isBlocked: false
};
	if(!account.isblocked){
		console.log("Account Blocked");
	}else if (account.balance < 100){
		console.log( "Low balance");
 	}else {console.log("OK")};
