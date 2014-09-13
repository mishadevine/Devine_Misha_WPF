//Misha Devine

//convert temperature to either degrees celsius or degree fahrenheit

//ask user what is the temperature and is it celsius or fahrenheit
var temperature = parseInt(prompt("What is the temperature."));
var temperatureType = prompt("What is the temperature type, F or C?");

//if temperature type is C then convert to fahrenheit
if (temperatureType === "C") {
    var convertToFahrenheit = (((temperature * 9) /5) +32);
    console.log(temperature + " "+"degrees celsius is"+ " " + convertToFahrenheit+" "+"degrees fahrenheit.");
}
else if (temperatureType === "F") {
    //if temperature type is F convert to Celsius
    var convertToCelsius = (((temperature - 32) * 5) / 9);
    console.log(temperature + " "+"degrees fahrenheit is"+" "+convertToCelsius+" "+"degrees celsius.");
}



//Check Login
var userName = "Michael_Smith";
var password = "password";

//ask user to enter their username and password.
var enterUsername = prompt("What is your username?");
var enterPassword = prompt("What is your password");

//if username is correct display username
if(enterUsername === userName && enterPassword === password){
    console.log("Welcome,"+" "+userName);
}
else if(enterUsername != userName){
//if username is not correct display below
    console.log("User not found. Try again.");
}
else {
//if username is correct but password does not match
    console.log("Password does not match our records.");
}





//Movie Ticket Price
var ageOFCustomer = 3;
var timeOFMovie = 7;


//if customer is a senior they see the movie for $7.00
if (ageOFCustomer >= 55 || ageOFCustomer < 10){
    console.log("Your price is $7.00");
}
else if(timeOFMovie >= 3 && timeOFMovie <= 5){
    console.log("Your price is $7.00.");
}
else {
   console.log("Your price is $12.00.")
}
