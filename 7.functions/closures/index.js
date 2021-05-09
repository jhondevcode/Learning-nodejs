/*
 * ===========================================================================
 * Name        : 7.functions/closures
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : Closures in javascript
 * Created on  : 2021-05-08 19:44:48.814503
 * ===========================================================================
 */

function outerFunction(arg) {
    let variableInOuterFunction = arg;
    function bar() {
        console.log(variableInOuterFunction);
    }
    bar();
}

outerFunction("Hello closure!");
