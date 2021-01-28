/*
function expressions are stored in a variable.
*/

// function expression - the variable of hello is representative of our anonymous function
let hello = function () { // a function without a name is an anonymous function
    console.log("Hey there");
}

hello ();

/*
function expressions DO NOT get hoisted

    - difference between function declarations and function expressions:
        - function declarations get hoisted
        - function expressions do not get hoisted
*/

/*
this will not run because variables are not hoisted
hello ();

let hello = function (); { // a function without a name is an anonymous function
    console.log("Hey there");
}
*/
