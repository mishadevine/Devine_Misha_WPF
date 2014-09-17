//basic for loop
//for (initialization, condition, increment of change)

//Create loop that makes the song 99 bottles of beer on the wall.
//until there are no more

for(var i=99; i>0; i--){


   /* console.log(i);

    */
//single the number of beers on the wall
    console.log(i + " bottles of beer on the wall! " + i + " bottles of beer.");

//    console.log("Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!");


   //if there is only 1 bottle left, end the song
    if(i===1){

        console.log("Take one down, pass it around! No more bottles of beer on the wall! The End!");
    }
    else
    {
        //if there is not 1 bottle left, keep going
        console.log("Take one down, pass it around, " + (i-1) + " bottles of beer on the wall!");
    }
}


