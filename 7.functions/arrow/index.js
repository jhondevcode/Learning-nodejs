/*
 * ===========================================================================
 * Name        : 7.functions/arrow
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : Arrow functions
 * Created on  : 2021-05-08 19:34:33.000426
 * ===========================================================================
 */

let arr01 = () => { console.log("foo") };

arr01();

(() => { console.log("Arrow in immediately execution") })();

((a, b) => { console.log(a * b); })(25, 62);

console.log(((a, b) => { return a * b; })(23, 56));
