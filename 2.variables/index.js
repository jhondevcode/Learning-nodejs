/*
 * ===========================================================================
 * Name        : 2.variables
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : variables on javascript for nodejs
 * Created on  : 2021-05-08 16:58:54
 * ===========================================================================
 */

// Numbers
var foo = 123;
var bar = 5;
console.log(foo + 1); // 4
console.log(foo / bar); // 0.6
console.log(foo * bar); // 15
console.log(foo - bar); // -2;
console.log(foo % 2); // remainder: 1

// Booleans
var foo = true;
console.log(foo); // true
// Boolean operations (&&, ||, !) work as expected:
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true

// Arrays
var foo = [];
foo.push(1); // add at the end
console.log(foo); // prints [1]
foo.unshift(2); // add to the top
console.log(foo); // prints [2,1]
// Arrays are zero index based:
console.log(foo[0]); // prints 2

// Object Literals
var foo = {
    bar: 123,
    bas: {
        bas1: 'some string',
        bas2: 345
    }
};
console.log(foo); // {}
foo.bar = 123; // extend foo
console.log(foo); // { bar: 123 }

var foo = {
    bar: 123,
    bas: [1, 2, 3]
};
console.log(foo);

var foo = {
    bar: 123,
    bas: [{
        qux: 1
    },
    {
        qux: 2
    }, {
        qux: 3
    }]
};
console.log(foo.bar); // 123
console.log(foo.bas[0].qux); // 1
console.log(foo.bas[2].qux); // 2
