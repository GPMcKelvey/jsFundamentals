/*
NOTE -
LOOPS:
    - offer us a quick and easy way to do something repeatedly 
    
    - there are many different kigd of loops, but they all essentially do the same thing: repeat until a specified condition evaluates to false
        - for loops
        - while loops
        - do while loops
        - labeled loops ( also reffered to as lebeled statement)
        - break loops ( also reffered to as break statement)
        -continue loops

    note: there is a danger of infinte loops

    -for loops take in 3 parameters (parameters are separated by a semi colon)
        1. initial expression (initialized variable)
        2. condition (tells our loop where to stop)
        3. increment expression (sets the increment added to our initial expression between each cycle)

*/

//     (1.)     (2.)    (3.) "++"" is shorthand for "+= 1"
// for (let i = 0; i < 10; i ++){
//     console.log(i);
// }

// challenge: count to 20 by 2's
// for (let i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// challenge: count down from 10 to 0 by 1
// for (let i = 10; i >= 0; i --){
//     console.log(i);
// }

// challenge: count from 0 by 2's to -24
// for (let i = 0; i >= -24; i -= 2){
//     console.log(i);
// }

// challenge: using a for loop, loop through a name and display each letter individual
let myName = "Recyclops";
let x;
for (x of myName) {
    console.log(x);
}

let myName = "Recyclops";
for (let letter of myName) {
    console.log(letter);
}

let myName = "Recyclops";
for (let i = 0; i < myName.length; i ++) {
    let x = myName[i];
    console.log(x);
}
// all three of the above return the same result

//challenge: make a for loop where you add up all of the numbers from 1 to 50 (should equal 1275)
// let i = 1;
// let x;

// for (let x = i += 1; i <= 50; i ++) {
//     console.log(i)
// }

let total = 0;
for(let i = 1; i <= 50; i++){
  total += i;
}
console.log(total); //has to outside of the {} to log just the answer and not all of the numbers on the way to the answer

