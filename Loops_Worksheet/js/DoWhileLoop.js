//Misha Devine September 17, 2014 Loops_Worksheet

alert("The computer is finding a random number between 0 and 20 and telling you how many times it took to find the 20");

var runProgram = true;

var i = 0;
//set a variable to hold our value

do{
    var random =Math.ceil(Math.random()*(Number(20)-Number(0)));
    console.log(random);
    i++;
    if(random === 20){
        runProgram = false;
        console.log("You rolled a 20! It took "+i+" times!");
    }
}
while(runProgram);

