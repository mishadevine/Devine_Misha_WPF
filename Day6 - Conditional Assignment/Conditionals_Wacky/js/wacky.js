//Misha Devine Web Programming Fundamentals

//Calculate if someone is old enough to drink
var drinkingAge = 21;
var state = "florida";

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
var yourState = prompt("What state do you live in?").toLowerCase();
//test to see if a string has been entered
if(yourState===""){
    console.log("You did not enter your state.");
    yourState = prompt("Please enter the state you live in and do not leave the field blank.").toLowerCase();
}
//if user age is greater than drinkingAge
if((userAge >= drinkingAge)&&(yourState===state)){
    console.log("You can drink!");
}
else if(yourState != state){
    console.log("Use other resources to find out the drinking age in your state.");
}
else {
    console.log("You can not drink.");
}