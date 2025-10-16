let temperatures = [30,32, 28,45,21,20,38]; //7day
let total = 0;

for(let i = 0; i < temperatures.length; i++) {
    total = total + temperatures[i];

}

let average = total / temperatures.length;
console.log("Average Temperature of the week:", average);  //temperture records average of week


let marks = [75,12,78,45,65,85,98,45,];
let passCount = 0;

for(let i = 0; i < marks.length; i++) {
    if(marks[i] >= 50 ) {
        passCount++;
    }
}

console.log("number of students passed:", passCount);
console.log("Number of student failed:", marks.length- passCount);


let campusBuildings = ["Library", "Hostel", "Lab", "Canteen", "Admin Block"];
console.log("total Buildings in campus:", campusBuildings.length);

for (let i = 0; i < campusBuildings.length; i++) {
    console.log("Building", i + 1,":", campusBuildings[i]);
}
