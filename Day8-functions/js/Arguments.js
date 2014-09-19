//Arguments & Parameters
//Arguments - goes into function
//Parameters

var width = 10;
var height = 10;
//call the function and pass in argument
calcArea(width,height);

//create function and pass arguments into parameters.
function calcArea(w,h){

    var area = w*h;
    console.log(area);

    return area;
}
var funcResult = calcArea(20,20);
console.log(funcResult);

var humanAge = Number(prompt("How old is your dog in human years?"));
var agePerHumanAge = 7;
dogsAge (humanAge,agePerHumanAge);


function dogsAge(humanAge,agePerHumanAge){

    var totalAge = humanAge*agePerHumanAge;
    console.log(totalAge);

    return totalAge;
}
var funcReturn = dogsAge(humanAge,agePerHumanAge);

console.log(funcReturn);