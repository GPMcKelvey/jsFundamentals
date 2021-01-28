/*
    - whereas for in loops look at enumerable properties, for of loops look at iterable properties
        - iterable meaning: able to parse through with numbers

    - for of loops are best suited for working with arrays
you put a key IN a lock(object) so for in are best for object
    */

// the below code does not work because object properties are enumerable, not iterable
   let student = {
    name: "Peter",
    awesome: true,
    degree: "javascript",
    week: 1
}

for(let item of student) {
    console.log(item);
}


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];//arrays have an index value

for (let cat of catArray) {
    console.log(cat, "says meow");
}