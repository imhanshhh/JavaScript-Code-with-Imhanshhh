function addNumbers(a, b) {
  return a + b;
}

// How to use it:
let sum = addNumbers(5, 10);
console.log(sum); // Output: 15s

function addAllNumbers(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// How to use it:
let sum1 = addAllNumbers(1, 2, 3);
console.log(sum1); // Output: 6

let sum2 = addAllNumbers(10, 20, 30, 40, 50);
console.log(sum2); // Output: 150

function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    
    // A function to display the car's information
    displayInfo: function() {
      console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    },

    // A function to simulate driving
    startEngine: function() {
      console.log("The engine is starting... Vroom!");
    }
  };
}

// Create a new car object using the function
const myCar = createCar("Honda", "Civic", 2022);

// Call the car's functions
myCar.displayInfo();  // Output: Car: 2022 Honda Civic
myCar.startEngine();  // Output: The engine is starting... Vroom!

function CalculateCartPrice (... num1) {  //interview question
  return num1

}
console.log(CalculateCartPrice(200,300,400,500))

function CalculateCartPrice(val1, val2, ...num1) { //interview question
  return num1
}
console.log(CalculateCartPrice(200,400,500,600))

const user = {
    username: "raj",
    price: 399  // Fixed: Changed "prices" to "price" for consistency
};

function handleObject(anyObject) {  // Fixed: Corrected spelling from "handalObject" to "handleObject"
    // Fixed: Corrected template literal string and used camelCase for parameter
    console.log(`The username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
    username: "hanshh",  // Note: "hanshh" might be a typo for "hans", but left as-is
    price: 299
});

// Optional: Also call with the user object to demonstrate
handleObject(user);

const GetMyNewArry = [100,200,300,400]

function returnSecondvalue (GetArry){
  return GetArry[1,3]

}
// console.log(returnSecondvalue(GetMyNewArry));
console.log(returnSecondvalue([100,200,300,400]));

function loginUserMessage (username = "sam"){
  if(!username) {
    console.log("please login username");
    return

  }
  return`${username} just login`


}
console.log(loginUserMessage("raj"))
