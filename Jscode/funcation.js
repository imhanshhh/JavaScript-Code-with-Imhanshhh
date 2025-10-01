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