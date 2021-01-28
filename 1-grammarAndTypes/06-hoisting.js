/*
    - JS is interpreted line by line and read top to bottom
    - when our JS is read, the code is parsed through 2 times
        - pass 1: our code is read top to bottom and any variables or functions that we've declared will get stored away to memory.
        - pass 2: the code is executed (once again ran top to bottom) and all values that we've given to variables are assigned.
*/

console.log(myName);
let myName = "Recyclops"; //compiler recognizes the myName variable but can not access it before it is initialized

testFunction();

function testFunction () {
    console.log("I have been hoisted.");
}