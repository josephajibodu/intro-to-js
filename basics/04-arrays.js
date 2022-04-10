// Arrays

// Why we need arrays
// let student1 = 40;
// let student2 = 67;
// ...
// let student100 = 89;

// let total = student1 + student2;

// let average = total/2;

// console.log(average);

// Array is data type that we use to represent a list of items.
// Syntax
// let <variableName> = [..];

// e.g We need to represent a list of scores for a cds group

let scores = [40, 67, 23, 47, 78, 90, 38, 38, 78, 83];
let names = ["Sodeeq", "Joseph", "Wale", "Yemi", "Hanah"];

// console.log(scores);

// How can we work with arrays
// We use bracket notations for arrays []

//  => We can get specific values
// Arrays are indexed from 0

// console.log(scores[10])

// => We can change the value of arrays
scores[0] = 70;

// console.log(names[1]);

names[4] = "Hannah";

// console.log(names)

// => Get the length of the array
console.log(scores.length);