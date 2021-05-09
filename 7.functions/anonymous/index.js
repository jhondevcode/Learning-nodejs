/*
 * ===========================================================================
 * Name        : 7.functions/anonymous
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : Anonymous functions
 * Created on  : 2021-05-08 19:25:19.925269
 * ===========================================================================
 */

var foo1 = function namedFunction() { // no use of name, just wasted characters
    console.log('foo1');
}
foo1(); // foo1
var foo2 = function () { // no function name given i.e. anonymous function
    console.log('foo2');
}
foo2(); // foo2
