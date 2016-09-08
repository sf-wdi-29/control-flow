// alivia blount
// WDI-GA-32
// Wednesday Lab
// control flow

// objectives
// boolean operators and truthiness
// nested if statements
// break keyword

// Whats falsey when converted to a boolean?
// false, 0, "", NaN, null, undefeined

// truthiness vs. falseyness
// Exercise 1
// !!1 --> true
// !!"Hello" --> true
// !! Nan --> false
// !!undefined --> false
// !![] --> true
// !!{} -> true

// Exercise 2: Can I ride
var tokens = 3;
if(tokens >= 5){
  console.log("Step right up!");
} else {
  console.log("Sorry, you can't ride")
}

// Additional Requirements
  // Must be at least 4 feet tall
  // must be at least 12 years old
  // replace the previous rule: now riders under 12 must be accompanied by an adult
  // if the boss isn't looking, you can sneak in!
  // riders with a park pass get in free

var pass = function(){
  var number = Math.random();
  if(number >= 0.5){
    return true;
  } else {
    return false;
  }
};

var bossNotLooking = function(){
  var number = Math.random();
  if(number >= 0.5){
    return true;
  } else {
    return false;
  }
}

var parentPresent = function(){
  var number = Math.random();
  if(number >= 0.5){
    return true;
  } else {
    return false;
  }
}

var ride = function(age, height, tokens){
  if(age > 12 || parentPresent() && height > 4 && tokens >= 5 || pass() || bossNotLooking()){
    console.log("Step right up!");
    return;
  } else{
    console.log("Sorry, you can't ride");
  }
}

// break keyword
// Example
// this function has a break statment that terminates
// the while loop when i is 3 and then returns the value
//  3 * x
function testBreak(x) {
  var 1 = 0;

  while(i < 6) {
    if(i == 3){
      break;
    }
    i += 1;
  }

  return i * x;
}

// switch statements
  // evaluates an expression, matching the expressions value
  // to a case clause, and executes the statements associated
  // with tat case

  // Example
  // In the following example, if expr evaluates to "Bananas",
  // the program matches the value with the case "Bananas" and
  // executes the associated statement. When break is encountered
  // the program breaks out of the switch and executes then
  // statement following switch.
  // If break were omitted the statement for case would also
  // be executed


  switch(expr){
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Papayas":
      console.log("Oranges are $2.79 a pound.");
      break;
    default:
      console.log("Sorry, we are out of " + expr + ".");
  }

  // Exercise 3: practice the switch statement
    // refactor this conditional

  if(joke.isFunny === 'yes'){
    laugh();
  } else if (joke.isFunny === 'sort of'){
    chortle();
  } else if (joke.isFunny === 'no'){
    stareBlankly();
  }

  switch(funny){
    case "yes": laugh();
      break;
    case "sort of": chortle();
      break;
    case "no": stareBlankly();
      break;
  }
