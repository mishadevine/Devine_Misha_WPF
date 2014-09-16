// Misha Devine Web Programming Fundamentals

//givens
var cats = "cats";
var dogs = "dogs";

//ask person how many dogs they have
var pets1 = Number(prompt("How many"+" "+dogs+" "+"do you have?"));
//test if a number has been entered
if(pets1==""){
    console.log("You did not enter a number.");
    pets1 = Number(prompt("Please enter a number."));
}
//isNaN
if(isNaN(pets1)||pets1==""){
    pets1 = Number(prompt("Please enter a number and please do not leave blank."));
}

var pets2 =Number(prompt("How many"+" "+cats+" "+"do you have?"));






