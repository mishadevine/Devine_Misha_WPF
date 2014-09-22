//random number function

var min =180;
var max = 220;
//calling function
var ranNum = randomizer(min,max);
//output
console.log(ranNum);
//the procedure
function randomizer(mn, mx) {

    var randomNumber = Math.round(Math.random() * (mx - mn) + mn);
    //calling the return
    return randomNumber;

}
//for loop to make many random numbers a total of 5 times
for(var i=0; i<5; i++){
    console.log(randomizer(min, max));
}