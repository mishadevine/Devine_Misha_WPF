//Misha Devine September 17, 2014 Loops_Worksheet

//calculate using user input the number of developers
//the number of websites each developer has to make per day
//and how many days the developers need to complete the project.
//The calculation will out put how many websites there will be in each day.

var numDevelopers = parseInt(prompt("How many web developers are there?"));
var numWebsites = parseInt(prompt("How many websites do each developer need to make a day?"));
var numDays = parseInt(prompt("What is the number of days that the websites need to be finished"));
var totalWebsites = 0;

//test to see if the number of developers was entered
if(numDevelopers===""){
    console.log("You did not enter the number of developers there are.");
    numDevelopers = prompt("PLEASE enter the number of number of developers there are.");
}

//if numDevelopers isNaN or blank prompt user
if(isNaN(numDevelopers) || numDevelopers===""){
    numDevelopers = prompt("Please enter the number of developers there are and do not leave blank.");
}


//test to see if the number of websites need was entered
 if(numWebsites===""){
 console.log("You did not enter the number of websites each developer needs.");
 numWebsites = prompt("PLEASE enter the number of websites each developer needs to complete per day.");
 }

 //if numWebsites isNaN or blank prompt user
 if(isNaN(numWebsites) || numWebsites===""){
 numWebsites = prompt("Please enter the number of websites needed from each developer per day and do not leave blank.");
 }


//test to see if the number of days need was entered
if(numDays===""){
    console.log("You did not enter the number of days the websites need to be complete.");
    numDays = prompt("PLEASE enter the number of total number of days all websites must be completed by.");
}

//if numWebsites isNaN or blank prompt user
if(isNaN(numDays) || numDays===""){
    numDays = prompt("Please enter the number of days all websites have to be completed and do not leave blank.");
}


for(var i=1; i<=numDays; i++){
        //starts the number of developers given multiplied by the number of websites given
     var newWebsites = numDevelopers * numWebsites;

    //saying that the total number of websites now equal the new websites
     totalWebsites += newWebsites;

    console.log("There are "+ totalWebsites + " websites on day #"+i+"!");
}
