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
    //This is asking to show the answer
    return circumference;
}




