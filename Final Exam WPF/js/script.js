//Calculate a discounted price

//ask user for the cost of the item
var itemCost = parseInt(prompt("What is the cost of the item?"));

//while loop if itemCost is blank or not a number resend prompt
while(isNaN(itemCost) || itemCost===""){
    itemCost = parseInt(prompt("Please enter a number and do not leave blank."));
}

//ask user for the amount of the discount. should be a number between 0>100
var discount = parseInt(prompt("What is the amount of the discount? This number should be between 0 > 100"));

//while loop if discount is blank or not a number or > 100 or < 0,resend prompt
while(isNaN(discount) || discount==="" || discount >100){
    discount = parseInt(prompt("Please enter a number between 0 > 100 and do not leave blank"));
}


//a function
function calcDiscount(itemCost,discount) {

    var discountPrice = itemCost*(discount/100);
    return discountPrice;

}
var result = calcDiscount(itemCost,discount);
console.log("You will have a  "+result+"% discount off of the original price of $"+itemCost+" given the discount amount is "+discount+"%.");
