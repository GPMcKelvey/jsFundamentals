/*
FOR IN LOOPS:
    - great for looping over values in an object
    -properties (or key value pairs) in an object are known as enumerable properties
    for in loops will loop over the enumerable properties of an object

    - enumerable simply means "countable"


*/

//objects do NOT have an index value like an array ie. name[0]
let student = {
    name: "Peter",
    awesome: true,
    degree: "javascript",
    week: 1
}
// all keys in objects are strings by default


// console.log(student.name); //dot notation
// console.log(student['name']); //object bracket notation

for (let item in student) {
   // console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']; //arrays have an index value

for (let cat in catArray) {
   // console.log(cat);// will return 0 1 2 3 4
    console.log(catArray[cat])
}

/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/


let aName = "rEcYcLoPs"
let capName;

for (let i in aName){
    if (i == 0){
        capName = aName[i].toUpperCase();
    } else {
        capName += aName[i].toLowerCase();
    }
}
console.log(capName)