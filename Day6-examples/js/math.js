// validating prompts

var min = prompt("Please enter a minimum number");
var max =prompt("Please enter and maximum number");

//test to see the number was actually entered

if(min===""){
    console.log("You did not enter a minimum number.");
    min = prompt("PLEASE enter a minimum number");
}

//isNaN
if(isNaN(min) || min===""){
    min = prompt("Please enter a number and do not leave blank.");
}

if(max===""){
    console.log("You did not enter a maximum number.");
    max = prompt("PLEASE enter a maximum number");
}

//isNaN
if(isNaN(max) || max===""){
    max = prompt("Please enter a number and do not leave blank.");
}

var random =Math.round(Math.random()*(Number(max)-Number(min))+Number(min));
console.log(random);


var num1 = 7.3456789;
console.log(num1);
console.log(Math.round(num1));
//round num1

console.log(Math.ceil(num1));
//round num1 up

console.log(Math.floor(num1));
//round num1 down

var num2 = Math.random();
console.log(num2);

var num3 = Math.random()*10;
console.log(num3);


var name = prompt("What is your name?");



