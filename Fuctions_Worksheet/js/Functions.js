//Misha Devine Web Programming Fundamentals September 19, 2014


//Circumference of a circle

var radius = 10;
var pi = 3.14;
var equationStart = 2;
//calling the function
calCircumference(equationStart,pi,radius);

//The function calculates the circumference
function calCircumference (equationStart,pi,radius){
    //this will calculate the circumference and round the anwser to the nearest integer
    var circumference = Math.round(equationStart*pi*radius);
    //This is calling the return on circumference
    return circumference;
}
//This is asking the return to calculate the circumference equation
var funcReturn = calCircumference(equationStart,pi,radius);
//The output result for the function
console.log("The circumference of the circle is "+funcReturn+".");




//How many bee stings can kill an animal
var animalWeight = 10;




