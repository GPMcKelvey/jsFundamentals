/*
Literals:
    -a literal represents a fixed value
        -literals include:
            -string literal
            -numeric literal
            -boolean literal
            -object literal
            -array literal
    -literals are simply just values that we as developers add to our code

*/

//string literal
let car = 'Ford';

//numeric literal
let december = 12;

//boolean literal
let tired = true;

//object literal - colon after the key assigns the value, and each key value pair is separated with a comma
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

console.log(soup.b);

/*
    - when working with objects, using dot notation allows us to dive into the object and grab a specific piece of data
*/

//array literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
/*items in the array are assigned a value starting with 0. 0=M 1=T 2=W 3=Tr 4=F */
console.log(days[2]);//square bracket notation

/*
    -when working with arrays, using square bracket notation allows us to pull a singular value out of the array by it's index number
    -when working with indices, JavaScript will start counting from 0
    -when using the length property, JavaScript will start counting from 1
*/

console.log(days.length);