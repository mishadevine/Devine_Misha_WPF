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
var stingsPerPound = 8.6666666667;
//calling the function
calcBeeStings (animalWeight,stingsPerPound);

//The function
function calcBeeStings (animalWeight,stingsPerPound){
    //This will calculate how many beestings per pound of the animal the animal will have and round the answer
    var totalBeeStings = Math.round(animalWeight*stingsPerPound);
    //this is calling the return on totalBeeStings
    return totalBeeStings;
}
//This is asking the return to calculate the equation
var funcResult = calcBeeStings(animalWeight,stingsPerPound);
//The output result
console.log("A bee has to sting an animal weighing "+animalWeight+"lbs"+" "+funcResult+" times in order to kill them");


