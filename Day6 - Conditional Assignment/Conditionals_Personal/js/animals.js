// Misha Devine Web Programming Fundamentals

//calculate how many total animals someone has out of dogs and cats

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
    pets1 = Number(prompt("Please enter a valid number. Do not leave blank."));
}

//ask person how many cats they have
var pets2 =Number(prompt("How many"+" "+cats+" "+"do you have?"));
//test if number has been entered
if(pets2=="") {
    console.log("You did not enter a number.");
    pets2 = Number(prompt("Please enter a number."));
}
//isNaN
if(isNaN(pets2)||pets2==""){
    pets2 = Number(prompt("Please enter a valid number. Do not leave blank."));
}

//display number of cats and dogs
console.log("You have"+" "+pets1+" "+dogs+" "+"and"+" "+pets2+" "+cats+".");



//Calculate the total amount of cats and dogs
var totalPets = pets1 + pets2;
//output for totalPets
console.log("You have"+" "+totalPets+" "+"pets in total.");




