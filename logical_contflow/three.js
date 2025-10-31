const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);
map.set("d",4);

console.log(map.get("d"));
console.log(map.size);       //4

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2

let numbers = [1,2,3,4,5,6];
let square = numbers.map(num => num* num);    //arrow funcation

let doubled = numbers.map(function(num){
    return num* 2;
})

numbers.forEach(function(num){
    console.log(num*2);
})

console.log(square);
console.log(doubled);


let marks = [35,80,55,90,25];

marks
.map(mark => mark + 5)
.filter(mark => mark >= 40)
.forEach(mark => console.log("pass:", mark));
