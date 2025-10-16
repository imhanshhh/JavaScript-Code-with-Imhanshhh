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