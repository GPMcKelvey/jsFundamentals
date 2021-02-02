/*
    - object bracket notation [] can also be used to reference or pull values out of an object
        - when accessing keys in an object, you will use dot notation most of the time - but there are some use cases as to why we would want/need to use object bracket notation instead

        - REMINDER: all keys in objects are strings
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}

// how we can test if the values in our object are strings?
let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

console.log(garden.vegetable); // standard dot notation

let zucchini = garden['vegetable']; // object bracket notation
/*
    - we can access keys in an object by specifying the name of the object followed by a set of square brackets containing the key name that we want to reference. The key name that we pass into the square brackets needs to be wrapped in a set of quotes since all keys inside of objects are strings.
*/
console.log(zucchini);

// we can also use object bracket notation to set key/value pairs in an object

let baking = {};
baking['zucchini'] = 'better make some bread!';
console.log(baking);

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10,
}
//         baking['zucchini']
console.log(baking[garden['vegetable']]);
//garden['vegetable'] = 'zucchini'

let testObj = {
    "Spaces here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["Spaces here"]);


function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());