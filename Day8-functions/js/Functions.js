//Function call or Invoked
//Must be called or it will not run

function printHello(){
    console.log("Hello World!!!!!");
}

function printMore(){
    console.log("Prints Out More Text!");
}
printHello();
printMore();

calcArea();
//Variable Scope
var width = 20;
var height = 10;

function calcArea(){

    var width = 30;
   var height = 10;
    var area = width * height;

    //console.log(area);
}
console.log(area);