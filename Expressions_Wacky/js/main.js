//Misha Devine September 10th 2014 Web Programming Fundamentals

//Calculate how much money you made using your hourly rate, amount of months and amount of hours worked every week.

//Prompt for input
var hourlyRate = prompt("What is your hourly rate?");
var hoursWorked = prompt("How many hours do you work weekly?");
var weeks = 4;

//Multiply hourWorked * hourlyRate
var amountWeekly = hoursWorked * hourlyRate;
//output for amountWeekly
console.log("$"+amountWeekly+" "+"is the amount of money you make weekly.");

//Multiply amountWeekly * weeks
var amountMonthly = amountWeekly * weeks;
//output for amountMonthly
console.log("$"+amountMonthly+" "+"is the amount of money you make monthly.");

//Prompt for input
var monthsWorked = prompt("How many months have you worked?");

//Multiply amountMonthly * monthsWorked using a string
console.log("$"+String(amountMonthly) * String(monthsWorked)+" "+"is the amount you have made in"+" "+monthsWorked+" "+"months.");




