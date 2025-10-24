//if, else if, and else

let age = 18;

if (age >= 18) {
  console.log("You are an adult."); // This will run
}


let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day"); // This will run
} else {
  console.log("It's a bit chilly");
}

//for Loop

for (let i = 0; i < 3; i++) {
  console.log("The number is " + i);
}

// Output:
// The number is 0
// The number is 1
// The number is 2

//while Loop

let count = 0;

while (count < 3) {
  console.log("Count is " + count);
  count++; // Make sure to increment the variable!
}

// Output:
// Count is 0
// Count is 1
// Count is 2

//Logical Operators

let userIsLoggedIn = true;
let userHasAdminRights = false;

if (userIsLoggedIn && userHasAdminRights) {
  console.log("Welcome, admin!");
} else if (userIsLoggedIn || userHasAdminRights) {
  console.log("Welcome, user!"); // This will run
}


let i = 10;

do {
  console.log(`The number is ${i}`);
  i++; // Increment the counter
} while (i < 5); // The condition is false from the start, but the loop runs once

// Output:
// The number is 10


let j = 0;

while (j < 10) {
  if (j === 5) {
    console.log("Found 5, breaking the loop.");
    break; // Stops the loop entirely
  }
  console.log(`Current number: ${j}`);
  j++;
}

// Output:
// Current number: 0
// Current number: 1
// Current number: 2
// Current number: 3
// Current number: 4
// Found 5, breaking the loop.


for (let k = 0; k < 10; k++) {
  if (k % 2 === 0) {
    continue; // Skips the rest of the loop body for even numbers and goes to the next iteration
  }
  console.log(`Odd number: ${k}`);
}

// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5
// Odd number: 7
// Odd number: 9