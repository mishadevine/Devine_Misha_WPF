/**
 * Created by mdevine on 9/12/14.
 */

var gpa = 4.0;

//if gpa is over the min 2.0 score, than the student can graduate
if(gpa > 2.0){
    console.log("You can graduate.");
}
else {
    console.log("You cannot graduate.");
}



//(condition to be met) first set of stuff : else stuff;

(gpa > 2.0)?console.log("You can graduate"):console.log("You cannot graduate");
