/* 
ARROW FUNCTIONS - (fat arrow functions)
    - were introduced in ES6 as an alternative to traditional function expressions.
    - they allow us to write shorter function expressions.
    - the are NOT declarations, so they do not get hoisted.
*/

hi() //Notice if we run this we get an error. It can not be hoisted like traditional function declarations.
let hi = () => {
    console.log("Hi");
}

// 1. Assigning a variable to the fat arrow function
// 2. We use a fat arrow, denoted by the "=>", to signify that it is a function

// Arrow functions can have either a "Concise Body" or a "Block Body"

//Concise Body - provides an implicit return value default. A concise body is denoted by the lack of brackets. It saves time and lines of code.
let hi = () => console.log("hi");
hi ();

//Block Body - requires an explicit return value. A block body is denoted by the brackets after the "fat arrow"
// - the block body must have a return in the body of the functions. (Anything between the curly braces)
let hi = () => {
    console.log("hi");
    console.log("oh hi mark");
}
hi();

//Concise vs. Block
//concise
// If you're passing in one parameter, you don't need parentheses
let character = x => console.log(`${x} is my favorite character`);
character("Sailor Moon");

//Block
//If you want to pass two parameters you need parentheses
let characters = (x, y) => {
    console.log (`I like Parks and Rec. My favorite characters are ${x} and ${y}`);
}
characters("Leslie Knope", "Ron Swanson");//separated by commas
