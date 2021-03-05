/*
NOTE Spread operator
    - denoted by ...
    - the spread operator pulls out all elements of an array and gives them back to us as a standalone list of items
 */

 // INCORRECT SYNTAX of square operator

 let fullName = ["spongebob", "squarepants"]

// ...fullName
// spread operator has to be used inside of another bit of code

//CORRECT SYNTAX
// let copiedFullName = [...fullName];
// console.log(copiedFullName);

let copiedFullName = [...fullName];
//console.log(copiedFullName);

/*
    - one of the advantages of the spread operator is that if we decide we want or need to add another value to our original array, we can do that without altering our sopied array. Keep in mind this is dependent on what data types we're working with.
*/

fullName.push("Mr.");
console.log(fullName, copiedFullName);

//SPREAD OPERATOR AND NUMBERS

// javascript has its own global math object that has its own built in methods

// Math.min - looks at a list of integers and returns the smallest value

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 7.50];
console.log(Math.min(prices)); // this returns an error becasue the values are inside of [] or inside of an array. 
//To use the Math.min method we need the spread operator to pull the values out of the array so that is just a set of numbers and not a set of numbers inside of an array

console.log(Math.min(...prices));


// SPREAD OPERATOR AND OBJECTS

let persons = [{name: "Garrett", age: 35}, {name: "Zach", age: 27}];
// let copiedPersons = [...persons;
let copiedPersons = persons;
// console.log(persons, copiedPersons);


persons.push({name: "Anna", age: 29});
// copiedPersons.push({name: "Anna", age: 29});
console.log(persons, copiedPersons);

/*
    - JS has 5 data types that are passed by value: boolean, null, undefined, string, and number. These are known as primitive data types.
        - if a primitive data type is assigned to a variable, we can think of that variable as containing a primitive value

        let x = 10;
        let y = "abc";
        let z = null;

            - x,y, & z all have values of primitive data type

        - When running code, JS stores these variables and their respective values to memory

        VARIABLES       VALUE
        x               10
        y               "abc"
        z               null
        a               10
        b               "abc"

        - when we assign these variables to another variable using =, we copy the value to the new variable - they are copied by value since they are primitive data types

        let a = x
        let b = y

        - JS also has three data types that are passed by reference: array, function, and object. (non-primitive data)
            - variables that are assigned a non primitive value are given a reference to that value. The reference points to that objects' location in memory. The variables don't contain the absolute values.
            - objects are created in a location on your computers memory. When we write let arr = [], we've created an array in our computers' memory. What the variables arr receives as its value, instead of a primitive absolute value, is the address (the location), of the array and where it's stored in the memory.
            - when we assign a non primitive data type to a variable, what we write and see is:

                let arr = [];
                arr.push(1);

                - a representation of the above code in memory would look like this:

                VARIABLE        VALUE       ADDRESS     OBJECT
                arr             <#001>      #001        []      // before the push
                arr             <#001>      #001        [1]    // after the push

                - notice that the value, that points to the address of our array, which is contained by the variable of arr is static. The array in memory is what changes. When we referenced the variable arr to do something, like pushing a new value, the JS engine goes to the location of arr in memory and works with the information that is stored there.

                - when a referenced type value (array, object, function) is copied to another variable using =, the address of that variable is what's actually copied over as if it were primitive. Arrays, objects, and functions are copied by reference instead of by value.

                let reference = [1];
                let refCopy = reference;

                VARIABLES       VALUE       ADDRESS     OBJECT
                reference       <#002>      #002        [1]
                refCopy         <#002>      

                - each variable now contains a reference to the same array. That means that if we alter references, refCopy will also see those changes - and visa versa
 */


let persons = [{name: "Garrett", age: 35}, {name: "Zach", age: 27}];
copiedPersons = [...persons];

persons.push({name: "Anna", age: 29});

//copiedPersons[0].name = "Bear";
persons[0].name = "Dwight";

console.log(persons, copiedPersons);

// SPREAD OPERATOR AND AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY

let persons = [{name: "Garrett", age: 35}, {name: "Zach", age: 27}];
// if you want to avoid changing both your original and copied array, you would also have to copy every object
let copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
})) // since we're returning something in curly braces, we have to enclose the callback function body in parens so JS doesn't mistake it for the arrow functions body

persons.push({name: "Anna", age: 29});// code is read top to bottom so since this .push method comes after we have declared copiedPersons is not included in copiedPersons. If we .push before declaring the copiedPersons variable then the push would make it to copiedPersons
copiedPersons[0].name = "Bear";
console.log(persons, copiedPersons);

/*
    - since we are mapping over our original array, and then creating new objects with the values from persons, those new objects will have their own addresses to where they are stored in memory
        - general rule of thumb: only copy what you plan on changing!
*/