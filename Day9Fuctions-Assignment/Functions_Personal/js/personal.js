//Misha Devine Web Programming Fundamentals September 22, 2014

//are you old enough to see this movie
var age = parseInt(prompt("How old are you?"));
var movie = prompt("Is your movie R Rated or PG 13? ");
var rRated = "R Rated";
var pg13 = "PG 13";

//anonymous function begings
var oldEnough = function (age,movie,rRated,pg13) {

    //if users age is 17 or older and they want to see a
    // rated r movie it outputs they are old enough to see it
    if(age >=17 && movie===rRated){
        console.log("You are old enough to see this movie without an adult.");
    }
    

}

