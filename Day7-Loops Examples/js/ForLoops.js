//basic for loop
//for (initialization, condition, increment of change)
//we used i frequently because it stands for iteration


for(var i=0;i<20;i+=4){
    //for loop that initializes the variable i, sets a condition
    //i is less than 20, and adds and increment of change +4
    console.log("i = "+i);
    //shows the value of i
    //runs as long as i is less than 20
}

//break

for(var j=0; j<5; j++){



    if (j==2){
        break; //stops the loop from cycling
    }
    console.log("j= "+j);
}