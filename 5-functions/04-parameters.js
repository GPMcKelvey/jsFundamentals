/*
    PARAMETERS:
        -placeholders for information that we will pass into our function
        - parameters are placed inside of the parentheses
            -parameters are separated by a comma
*/

//                ticket = "cheese pizza"
function garrett (ticket) {
    console.log (`I exchanged my ticket for a ${ticket}.`);
}

garrett ("cheese pizza"); //"cheese pizza" is the argument

//

let resource = "|============|";

function machine (ironRod) {
    console.log (ironRod);
}

machine (resource); // argument - what we pass into the invocation of our function


/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function testFn(fName, lName) {
    let fullName = fName + ' ' + lName;
    console.log(`Hello, my name is ${fullName}.`);
}

testFn("Guy", "Fieri");
testFn("Bobby", "Flay");