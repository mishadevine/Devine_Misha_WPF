//Misha Devine September 10th 2014 Web Programming Fundamentals

//Calculate how much money is needed from September to December when you have $1000 to start.

var rent = 485;
var carInsurance = 54;
var cellPhone = 114;
var gas = 140
var monthsNeeded = 4;

//Total bills
var totalBills = rent + carInsurance + cellPhone + gas;
//output for totalBills
console.log("The total amount of all bills added up is $"+totalBills);

//Multiply totalBills * monthsNeeded
var grandTotal = totalBills * monthsNeeded;
//output for grandTotal
console.log("The grand total amount of money needed for September to December is $"+grandTotal);

//Amount of money you have
var iHave = prompt("How much money do you have?");

//Subtract grandTotal - iHave using a string
console.log(String(grandTotal) - String(iHave)+" "+"dollars more is needed in order to pay all your bills for the next"+" "+monthsNeeded+" "+"months.");
