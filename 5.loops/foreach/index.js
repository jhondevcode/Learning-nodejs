/*
 * ===========================================================================
 * Name        : 5.loops/foreach
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : foreach loop in javascript
 * Created on  : 2021-05-08 17:53:08.487372
 * ===========================================================================
 */

// Mode 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("With \"for-in\"\n");
for (const n in numbers) {
    if (n % 2 == 1) {
        console.log(n);
    }
}

// Mode 2
console.log("nWith \"for-of\"");
for (const n of numbers) {
    console.log(n);
}

// Mode 3
console.log("\nWith \"foreach\"");
numbers.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
    }
});

// Bonus
console.log("\nDay of week");
for (const day in ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]) {
    console.log(day);
}
