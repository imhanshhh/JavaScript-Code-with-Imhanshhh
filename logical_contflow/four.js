let arr = [5,12,7,20];
let allpositive = arr.every(num => num > 0);

console.log("All positive:", allpositive);

let numbers = [10,34,56,78,90,]               // find second largest numbers
numbers.sort((a,b) => b-a);
console.log("second largest:", numbers[1]);