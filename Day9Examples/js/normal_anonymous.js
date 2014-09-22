//normal function
//area of a rectangle
var width = 11;
var length = 25;
area(width,length);

function area(w,l){
    var area = w*l;
    console.log(area);
}


//anonymous function
//parameter of a rectangle

function parameter (w,l){

    var parameter = (2*w)+(2*l);
    console.log(parameter);
}
parameter(width,length);