var database = [
	{
		username: "Andy",
		password: "123"
	},
	{
		username: "Ingrid",
		password: "777"
	},
	{
		username: "Thomas",
		password: "456"
	}
];

newsfeed = [
	{
		username: "Michael",
		timeline: "Tired of working out."
	},
	{
		username: "Tom",
		timeline: "Collected strawberries at the field."
	},
	{
		username: "Lucy",
		timeline: "Enjoyed a book at the park with sunny weather."
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === user &&
			database[i].password === pass) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and/or password");
	}
}
