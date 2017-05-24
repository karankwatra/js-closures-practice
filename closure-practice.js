// 1. Outer and Inner

/* 
The function below returns a function, which has access to the local variables in the outer. 

Invoke the outerFunc and save the result (the inner function) to a variable called preserveScope. 

Then invoke preserveScope and save the result to a variable called preservedScope. 
*/


function outerFunc() {
  var scopeToSave = "Preserve This!"
  return function() {
    return scopeToSave;
  }
}
// Code here



// 2. Friend Greeter 

/* 
Create a greeterMaker function called which takes in a friend's name and returns a function to greet the friend on the current day.

For example, the outer function, greeterMaker, return an inner function for each friend, like Dave. This inner function will output something like, "Hi Dave! It's Thursday, May 25 today."  

To pass the test, you will need to invoke greeterMaker and save the result to the variable called friendGreeter.  
*/

// Code here 

function greeterMaker(name) {
  // Make this function return another function to greet that friend by name. 
  return

}

var friendGreeter;



// 3. Track calls

/* 
Create a function that returns the date and the number of times you have called it.
Your return object should look like the following: 

{date: Tue May 23 2017 22:31:45 GMT-0500 (Central Daylight Time), calls: 1}

*/ 
function dateFuncCreator() {
  var count = 0;

  // Finish this function.
  return 

}  

// 4. Teams and Players

/* Create a function called playerFuncCreator that accepts a player's name and returns a function for an individual player. This player function, playerFunc, accepts a number representing points scored and returns the player's total points scored and the team's total points scored.
*/


// 5. Data Sharing

/* Deduct minutes from individual and family. 
*/

