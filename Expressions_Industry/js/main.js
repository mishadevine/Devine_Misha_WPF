//Misha Devine September 10th 2014 Web Programming Fundamentals

//Calculate how many total square pixels are in an image using its weight, height and DPI

//Prompt made to ask user weight of image
var width = prompt("What is the width in inches of the image?");

//Prompt made to ask user height of image
var height = prompt("What is the height in inches of the image?");

//Prompt made to ask user the DPI of image
var dpi = prompt("What is the DPI of the image?");


//Multiply the width * height
var widthInPixels = width * dpi;
//output of withInPixels
console.log("The width of the image in pixel dimensions is"+" "+widthInPixels);

//Multiply height * dpi
var heightInPixels = height * dpi;
//output of heightInPixels
console.log("The height of the image in pixel dimensions is"+" "+heightInPixels);
