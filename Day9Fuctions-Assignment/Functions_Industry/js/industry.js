//Misha Devine Web Programming Fundamentals September 22, 2014


var flyers = parseInt(prompt("How many flyers have you completed in 24 hours?"));
var signs = parseInt(prompt("How many signs have you completed in 24 hours?"));
//Call the function
var total = totalProducts(flyers, signs);

//the fucntion starts
function totalProducts(f, s){
    //adding flyers and signs together
    var totalProducts = f+s;
    //returning the calculation outside the function
    return totalProducts;

}
//ternary to replace if else statment
(flyers + signs  >= 20)?console.log("You will get a 10% pay raise!"):console.log("Thank you for completing "+total+" flyers and signs. We will see you tomorrow." );


