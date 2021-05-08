/*
 * ===========================================================================
 * Name        : 4.flow_control/else_if
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : else_if statement
 * Created on  : 2021-05-08 17:24:20.454643
 * ===========================================================================
 */

const readline = require('readline');

const out = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

out.question('Enter your age: ', function(age) {
    if (age >= 65) {
        console.log("You are already enabled to receive your pension")
    } else if (age < 65 && age >= 18) {
        console.log("You are not yet old enough to receive a pension")
    } else {
        console.log("Minors are not authorized to receive a pension")
    }
    out.close();
});

