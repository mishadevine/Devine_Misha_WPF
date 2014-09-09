//Misha Devine September 8th 2014 Web Programming Fundamentals Section 00 Instructional Expressions

//Slice of Pie Part 1
//Calculate	how	much pizza each	person will get at the party
var people = 20;
var pizza = 8;
var slices = 8;

//Multiply pizza * slices
var totalSlices = pizza*slices;
//Output Total Slices
console.log("There was"+" "+totalSlices+" "+"total slices of pizza.");

//Divide totalslices / people
var totalPizza = totalSlices/people;
//Output total slices per person
console.log("Each person ate"+" "+totalPizza+" "+"slices of pizza at the party.");


//Slice of Pie Part 2
//Calculate how many slices of pizza Sparky the dog ate
//var peopleAte = 3;
//var leftOver = 0.2;

//Multiply people * leftOver
var sparkySlices = totalSlices%people;
//Output total slices Sparky ate
console.log("Sparky got"+" "+sparkySlices+" "+"slices of pizza.");



//Average Shopping Bill
//Calculate the average amount spent on groceries
var weeklyBills = 5;
var groceryBills = [125,100,55,25,80];

//Add up all bills
var totalBills = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
//Output Total Bills
console.log("$"+totalBills+" "+"is the total amount spent on groceries.");

//Divide totalBills / numberBills
var average = totalBills/weeklyBills;
//Output Average of Bills
console.log("$"+average+" "+"is the average amount spent on groceries weekly. ");
//result format
console.log("You have spent a total of $"+totalBills+" "+"of groceries over 5 weeks."+" "+"That is an average of $"+average+" "+"per week.");



//Discounts
//Calculate the discounted price with and without sales tax
var originalPrice = 75.00;
var discountPercentage = 0.45;
var discountPercentagewhole = 100 * 0.45;
var itemDescription = "vacuum cleaner";
var salesTax = 0.07;

//Without Tax
//Multiple originalPrice * discountPercentage
var noTax = originalPrice*discountPercentage;
var taxAmount = noTax * salesTax;
//Output price without tax
console.log("Total price without tax is"+" "+"$"+noTax+".");


//With Tax
//Add noTax + salesTax
var withTax = noTax + taxAmount;
//Output price with tax
console.log("Total price with tax is"+" "+"$"+withTax+".");
//result format
console.log("Your"+" "+itemDescription+" "+"was originally $"+originalPrice+","+" "+"but after a"+" "+discountPercentagewhole+"% discount, it is now $"+noTax+" "+"without tax and $"+withTax+" "+"with tax.");