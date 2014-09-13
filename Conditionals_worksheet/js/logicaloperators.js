/**
 * Created by mdevine on 9/12/14.
 */


var budget = 500;
var iPadPrice = 499.99;
var paycheck = 700;
/*
//if the price of the phone is less than our budget
if(iPadPrice < budget){
    console.log("You can buy the IPad");
}
else {
    console.log("You cannot buy the IPad");
}

//AND if our paycheck is over 600
if(paycheck > 600){
    console.log("You can buy the IPad");
}
else {
    console.log("You cannot buy the IPad");
}


//&& and operator - both must be true to be true
if(iPadPrice < budget && paycheck){
    console.log("You can buy the IPad");
}
else {
    console.log("You cannot buy the IPad");
}
 */

//|| Or operator - either must be true to be true

//OR if you won the lottery

var wonLottery = true;
//if the ipad price is less than your budget
//or if you won the lottery, then you can buy your ipad
if(iPadPrice < budget || wonLottery){

    console.log("You can buy the IPad.");
}
else{
    console.log("You cannot buy the IPad.");

}
