//basic while loop
//the while loop loops through a block of code as
//long as a specified condition is true

//initializing out counter variable
var counter = 0;

//starting the while loop with condition
//while condition is true, loop will run
//when condition is false loop will stop
while(counter < 200){
    console.log("Counter is counting!");
    counter++; //counts until condition is false
}

//Do While Loop
//the do while loop is a variant of the while loop.
//this loop will execute the code block once, before checking if
//the condition is true
//then it will repeat the loop as long as the condition is true

var i = 0;
//set a variable to hold our value

do{
    console.log("The number is " +i);
    i++;
}
while(i <20);

