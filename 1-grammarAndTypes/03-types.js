/*
Booleans: has only two possible values TRUE or FALSE

*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL: an empty value. It is an empty container. Nothing is in it, still exist as a space to fill

*/

let empty = null;
console.log(empty);

/*
UNDEFINED: no value is assigned and does not act as an empty container
*/

let undef; 
//let undef = undefined - this means the samething but takes more keystrokes
console.log(undef);

/*
NULL vs UNDEFINED
NULL:
    -Null is like a container with nothing in it.
    -Undefined is when a variable has never been initialized or hasn't been created yet

    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship.

    */

/*
NUMBERS: numbers are literally just numbers. Don't need to write anything special in JS
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999 //15 9's
console.log(precise); //15 9's

let rounded = 9999999999999999 //16 9's
console.log(rounded); //16 digits or more will be rounded automatically by JS.

let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out at a certain number. so if math is needed beware!

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10
console.log(numbersAreHard);

/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote (' ') or double quotes (" ")
*/

let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';

console.log(stringOne, stringTwo); //same output. JS is a "lazy" language so either is fine. Companies most likely have a "style guide" that will dictate what exactly to code

//Numbers vs Strings
let first = 1050 + 100; 
let second = '1050' + '100'; 

console.log(first);//number
console.log(second);//string

/* 
OBJECTS: are used to store many values instead of a singular value
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);
console.log(typeof frodo);

/* 
ARRAYS: containers that hold lists of items
    -denoted by []
    -don't have to be all of the same data type
    - let list = ['item1', undefined, 3]
*/

let list = [ 'item1', 'item2', 'item3']
//  (1)   (2)            (3)
/*
1. name of the array or list;
2. array's use square brackets
3. each item, regardless of dataType, and is seperated by commas
*/

let burritos = ['large', 4, true]
console.log(burritos);

console.log(typeof burritos);
//Arrays are also containers that can hold mutiple dataTypes. So JS has calssified arrays as objects and not it's own dataType.

/*
- When JS sees that we're trying to combine two or more numbers, it adds the values together using the builtin math functionality
- when JS sees us trying to add together one or more strings, instead of using the math functionality, it combines the two strings instead without synthesizing the values.
*/

let example = 1050 + "100"; //coersion - JS assuming user made a mistake and that we are trying to concatenate two strings, instead of trying to do math with the values.
console.log(example);

console.log(typeof example);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode    Set each variable to its respective type.    console.log your whole address (with a space between variables).
*/

let firstName = "Garrett";
let lastName = "McKelvey";
let houseNumber = "1208";
let aptNumber="";
let street = "S Grant St";
let city = "Bloomington";
let state = "IN";
let zipcode = "47401";

console.log(firstName, lastName);
console.log(houseNumber, street);
console.log(aptNumber);
console.log(city + ", " + state, zipcode); //string concatenantion
console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`);//string interpolation
console.log(`Hello, my name is ${firstName}`);

/*
String properties
    -properties are qualities that are associated with a datatype

*/

let myName = 'Garrett';
console.log(myName.length); //7

/*
String Methods
    -methods are tools that help us manipulate the data
        - .properties / .methods()
            *no parenthesis for properties*
*/

let myNameIs = "Garrett";
console.log(myNameIs.toUpperCase()); //method that changes a string to upper case

let hometown= 'my hometown is South Bend';
console.log(hometown.includes('South Bend')); //this is a method that checks if a certain string is included in another string

//research and use split method

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts.';

console.log(sent.split(" ", 3));
//console.log(sent.split())