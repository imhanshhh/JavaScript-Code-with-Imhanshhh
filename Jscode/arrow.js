//var c = 199
let a = 199
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // Output: INNER: 10 (inner scope shadows outer 'a')
}

// console.log(a);  // Output: 199 (outer scope 'a' is still accessible)
// console.log(b);  // ReferenceError: b is not defined (block-scoped)
// console.log(c);  // ReferenceError: c is not defined (commented out declaration)

function one(){
    const username = "raj"

    function two(){
        const website = "youtube"
        console.log(username);  // Output: raj (closure access to outer scope)
    }
    // console.log(website);  // ReferenceError: website is not defined (inner scope only)

     two()
}

// one()  // Uncomment to run: Output: raj

if (true) {
    const username = "raj"
    if (username === "raj") {
        const website = " youtube"
        console.log(username + website);  // Output: raj youtube (both in inner scope)
    }
    // console.log(website);  // ReferenceError: website is not defined (block-scoped)
}

// console.log(username);  // ReferenceError: username is not defined (block-scoped)


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // Output: 6 (function declaration is hoisted)

function addone(num){
    return num + 1
}

// Fixed: Move the call AFTER the function expression declaration
const addTwo = function(num){
    return num + 2
}

addTwo(5)  // Output: 6 (now defined before use)

// no arguments

const greet = () => {
  return 'Hello, world!';
};

// With implicit return (single expression)
const greetImplicit = () => 'Hello, world!';

console.log(greet());
console.log(greetImplicit());

// Regular function expression
const squareRegular = function(x) {
  return x * x;
};

// Arrow function
const squareArrow = x => x * x;

console.log(squareArrow(5)); // Output: 25

// Regular function expression
const addRegular = function(a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(10, 20)); // Output: 30

const calculateAndLogSum = (a, b) => {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is: ${sum}`);
  return sum;
};

calculateAndLogSum(5, 8); // Logs: "The sum of 5 and 8 is: 13"


const numbers = [1, 2, 3, 4];

// Using a regular function
const doubledRegular = numbers.map(function(num) {
  return num * 2;
});

// Using an arrow function (implicit return)
const doubledArrow = numbers.map(num => num * 2);

console.log(doubledArrow); // Output: [2, 4, 6, 8]


const ages = [12, 18, 25, 6, 30];

// Using an arrow function
const adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [18, 25, 30]


