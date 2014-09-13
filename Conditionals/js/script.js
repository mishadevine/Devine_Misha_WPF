/**
 * Created by mdevine on 9/12/14.
 */
/*
//Basic Conditional

var oldEnough = false;
//If the child is old enough they can ride

if(oldEnough){
    //If oldEnough is true, then you can ride
    //If oldEnough is false, you cannot ride
    console.log("You can ride the coaster!");
}




//Relational Conditional
//If the kid is tall enough, then they can ride the coaster
//must be 48 inches tall or over

var kidHeight = 50;
//kids height
var minHeight = 48;
//minimum height to ride the coaster

if(kidHeight >= minHeight){
 // If the kid is taller than or equal to the minHeight
    //they can ride the coaster
    console.log("You can ride the coaster!")
}




//Conditional with an expressions

//set height
var kidHeight = 46;

//set minimum height
var minHeight = 46;

//sneaker lift
var sneakerLift = 2

//tall enough to ride with or without shoes?

//if kid is taller then minHeight with shoes. they can ride
if(kidHeight + sneakerLift >= minHeight){
    //if the kid is tall enough with shoes on, they can ride.
    console.log("You are tall enough with shoes on to ride.");
}




//If Else Statement
//Choosing between two blocks of code

var kidsHeight = 20;
//kid height

var minHeight = 48;
//minimum height to ride

if(kidsHeight >= minHeight) {
   //if true, they can ride
    console.log("You can ride!")
}
else {
    //if false (you are too short), you cannot ride.
    console.log("You can not ride this coaster.");
}

 */




//else if - choosing between 3 or more blocks of code

var kidHeight = 46;
//kid height

var minHeight = 48;
//minimum height to ride

var wParentHeight = 45;
//kid height to ride with parent

//if taller than the minHeight you, can ride
//if shorter than the minHeight but with parent and meet that height
// requirement, you can ride
//you are too short, you can't ride

if(kidHeight >= minHeight) {

    console.log("You can ride.");
}
else if(kidHeight >= wParentHeight){
    console.log("You can ride with your parent.");
    //with parent
}
else {
    console.log("go home!");
}

