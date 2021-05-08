/*
 * ===========================================================================
 * Name        : 3.input
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : Text from keyboard
 * Created on  : 2021-05-08 17:16:34.240905
 * ===========================================================================
 */

const readline = require('readline');

const out = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

out.question('Enter your age: ', function(age) {
    if (age >= 18) {
        console.log("You're of age.")
    } else {
        console.log("You are a minor")
    }
    out.close();
});
