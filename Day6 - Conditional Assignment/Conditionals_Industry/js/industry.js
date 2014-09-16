//Misha Devine Web Programming Fundamentals

//Calculate how much money a web developer would make in Florida versus the united states as a whole
//these are the givens
var state = "Florida";
var floridaHigh = Number(92200);
var usHigh = Number(110400);

//prompt to ask user if they are a web developer

//ask user what is the state they live in
var livesIn = prompt("What state do you live in?");
//check to make sure a number has been entered
if(livesIn===""){
    console.log("You did not enter your state.");
    //prompt to re ask them to enter their state and to not leave it blank
    livesIn = Number(prompt("Please enter the state you live in"));
}
//if state is florida they will make $92,200 a year
(livesIn===state)?console.log("You can make a potential high of $"+floridaHigh+" "+"being a Web Developer."):console.log("The potential high in the US is $"+usHigh+". Use other resources to find out the high in your state.");



