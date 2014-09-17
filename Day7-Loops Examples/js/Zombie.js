//basic for loop
//for (initialization, condition, increment of change)

//Zombie Madness!!
//We have a zombie here at school.
//It can bite 4 people a day and turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days?

var numZombies = 1;
var numBites = 4;
var days = 8;

for (var i=1; i<=days; i++){

    var newZombies = numZombies * numBites;
    //start with original zombie time bites
    numZombies = numZombies + newZombies;
    // number of zombies  is original zombies + new zombies
    console.log("There are "+ numZombies + " zombies on day #"+i+"!");
}