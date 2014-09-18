//Misha Devine September 17, 2014 Loops_Worksheet

//calculate if the user is old enough to be in Islands of Adventure by them self

var minAge = parseInt(14);

//ask the user how old are they
var age = parseInt(prompt("How old are you?"));

//the while loop will tell keep telling the user "Please enter your age and do not leave blank" until a number is entered
while(isNaN(age) || age==="") {
    age = parseInt(prompt("Please enter your age and do not leave blank."));
}

if(age >= minAge){
    //if age is greater than or equal to min age the user can enter IOA by themselves
    console.log("You may enter Islands of Adventure by yourself!")
}
else {
    //if age is less than min age the user cannot enter IOA by themselves
    //but can be accompanied by a parent
    console.log("You need a parent to accompany you into Islands of Adventure.");
}