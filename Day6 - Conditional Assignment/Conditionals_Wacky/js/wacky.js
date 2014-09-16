//Misha Devine Web Programming Fundamentals

//Calculate if someone is old enough to drink
var drinkingAge = 21;
var state = "Florida";

//ask user what is their age
var userAge = Number(prompt("What is your age?"));
//test to see if a number has been entered
if(userAge==""){
    console.log("You did not enter your age.");
    userAge = Number(prompt("Please enter your age."));
}
//isNaN
if(isNaN(userAge) || userAge===""){
    userAge = Number(prompt("Please enter a valid age and do not leave field blank."))
}
//ask user what state do they live in
var yourState = prompt("What state do you live in?");
//test to see if a string has been entered
if(yourState===""){
    console.log("You did not enter your state.");
    yourState = prompt("Please enter the state you live in.")
}
//isNaN
if(isNaN(yourState) || yourState!=""){
    yourState = prompt("Please enter your state and do not leave field blank.");
}