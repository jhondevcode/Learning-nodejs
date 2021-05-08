/*
 * ===========================================================================
 * Name        : 5.loops/do_while
 * Author      : Jhon
 * Version     : 1.0.0
 * Description : do-while loop in javascript
 * Created on  : 2021-05-08 17:52:15.916070
 * ===========================================================================
 */

let counter = 0;

do {
    if (counter % 2 == 0) {
        console.log(counter);
    }
    counter++;
} while (counter <= 20);
