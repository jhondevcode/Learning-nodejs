/*
 * ===========================================================================
 * Name        : 6.array
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : Arrays in javascript
 * Created on  : 2021-05-08 18:19:53.579633
 * ===========================================================================
 */

// Array of numbers
let integers = [56, 28, 91, 631, 82, 61, 73, 321];
let decimals = [3.14, 2.71, 98.26, 32.45, 61.72115];

// Arrays of strings
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Array of booleans
let bytes = [true, false, true && true, !false, false && true];

// Array of objects
let persons = [
    { name: "josh", age: 25 },
    { name: "ana", age: 35 },
    { name: "fer", age: 24 },
    { name: "stevens", age: 21 }
];


// Matrix
let num01 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let num02 = [   // Matrix of squares
    [1, 4, 9, 16],
    [25, 36, 49, 64],
    [81, 100, 121, 144]
];

// Mixed array
let mixed = [21.56, "Hello", true && false, [81, 65, 32.48]];


// Showing the content of the arrays
console.log(integers);
console.log(decimals);
console.log(days);
console.log(bytes);
console.log(persons);
console.log(num01);
console.log(num02);
console.log(mixed);
