/**
    - scope is how a computer keeps track of all variables/function in a program
        - global scopes: available throughout the entirety of the applicaiton
        -local scopes: only available within the scope that they were created in - so not available globally
 */

 let x = 12;

 function scope() {
     // what is inside of the curly braces(body of function) is a local scope
     let x = 33;
     console.log(x);
 }

 // will not recieve an error for declaring the same variable twice becasue outside of the function is global scope and inside of the function is local scope. They have the same name but they do not populate the same location. Therefore, they can coexist without error.
 scope();
 console.log(x);


 //we can access a globally scoped variable within a local scope
 let y = 12

 function scopeTwo(){
     y = 33; // this reintializes y to a new value. It does not declare a new variable
     console.log(y);
 }

 scopeTwo ();
 console.log(y);

 // we cannot access a localy scoped variable in the global scope of our document

function scopeThree() {
    let z = 4;
    console.log(z);
}

scopeThree();
console.log(z);

/*
    const - const variables are variables that cannot be re-initialized, their values are constant

     - var and let seem to operate teh same and share a lot of the same functionalities (they both allow us to declare and initialize variables ), but they also have qualities that make them behave different from one another
        - var: the var keyword is scoped to the nearest function block
        - let: the let keyword is scoped to the nearest enclosing block
 */

 //var
 var x = 12;

 function varTest () {
     var x = 33;
     if (true) {
         var x = 45;
         console.log(x); // x that is locally scoped to the if statement
     }
     console.log(x) // x that is locally scoped to the function
 }

 varTest();
 console.log(x); // x that is globally scoped

 //let
 let y = 12;

 function letTest() {
     var y = 33;
     if (true) {
         let y = 45;
         console.log(y);
     }
     console.log(y);
 }

 letTest();
 console.log(y);

 