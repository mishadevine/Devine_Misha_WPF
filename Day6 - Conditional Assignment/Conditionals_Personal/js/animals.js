// Misha Devine Web Programming Fundamentals

var cats = "cats";
var dogs = "dogs";

var pets1 = Number(prompt("How many"+" "+dogs+" "+"do you have?"));

if(pets1==""){
    console.log("You did not enter a number.");
    pets1 = Number(prompt("Please enter a number."));
}
if(isNaN(pets1)||pets1==""){
    pets1 = Number(prompt("Please enter a number and please do not leave blank."));
}





