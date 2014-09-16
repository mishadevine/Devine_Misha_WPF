//Misha Devine Web Programming Fundamentals

//Calculate how much money a web developer would make in Florida versus the united states as a whole
//these are the givens
var state = "Florida";
var floridaHigh = Number(92200);
var usHigh = Number(110400);

//ask user what is the state they live in
var livesIn = Number(prompt("What state do you live in?"));
//check to make sure a number has been entered
if(livesIn===""){
    console.log("You did not enter your state.");
    //prompt to reask them to enter their state and to not leave it blank
    livesIn = Number(prompt("Please enter the state you live in"));
}


