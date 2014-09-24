var radius = parseInt(prompt("What is the radius of the circle"));


if(isNaN(radius) || radius===""){
    radius = parseInt(prompt("Please enter a number and please do not leave blank."));

}


function calcuArea(r) {
    area = 2*r*3.14;
    return area;
}
calcuArea(radius);
console.log("The area of the circle is "+area+".");