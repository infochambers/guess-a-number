// Guess a Number

// First, generate a number between zero to one,
//then multiply by ten and round down to get 
//something randomized from zero through ten
var secretNumber = Math.floor(10 * Math.random());


// Collect a number for the guess
var guess = prompt("Give me a number from zero to ten");

// Start to test the number
while (guess != secretNumber) 
{
  
// Is the number too high?  
  if (guess > secretNumber) {
  var guess = prompt("Too high, try again.");
  }
  
// Is the number too low?    
  else if (guess < secretNumber) {
    var guess = prompt("Too low, try again.");
  }
  
// Is the guess alphabetic instead of numeric?   
 else if (guess !== true) {
    var guess = prompt("No letters, the guess needs to be a number.");
  }
}

  alert("Excellent!  The number is indeed " + guess);
