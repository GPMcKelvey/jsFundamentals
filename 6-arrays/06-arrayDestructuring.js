/*

    ARRAY DESTRUCTURING
    - array destructuring allows to unpack values from an array, or even properties from objects, into their own distinct variables
        - destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sourced variable

    - great for pulling information out of an array/object and assigning that data to its own variable
*/

let fullName = ["Patrick", "Star"];

// let firstName = fullName[0];
// let lastName = fullName[1];

let [firstName, lastName] = fullName;

console.log(firstName);
console.log(lastName);
console.log(fullName);
// what you include in the square brackets on the left hand side of the assignment operator are variable names for the elements in the array on the right hand side of the assignment operator

/*
    REST SYNTAX

    - rest syntax looks exactly like the spread syntax
        - denoted by ...
    - rest syntax is essentially the opposite of spread syntax. Spread syntax "expands" an array into a list of comma separated items, while rest syntax collects multiple elements and "condenses" them into a single element
*/

let fullName = ["Garrett", "McKelvey", "Mr", {month: 9, date: 05, year: 1985}];

// we can use the rest syntax when working with array destructuring to package up the REST of the values in the referenced array, and return them as their own array

let [firstName, lastName, ...otherInfo] = fullName;
console.log(firstName);
console.log(lastName);
console.log(otherInfo);

// values can also be skipped or omitted if we don't want to assign the to a variable when working with array destructuring

let fullName = ["Garrett", "McKelvey", "Mr", {month: 9, date: 05, year: 1985}];
fullName.push("testOne", 2, "testThree", 4, true, false);

let [firstName, lastName, , , ...otherInfo] = fullName;
console.log(firstName);
console.log(lastName);
console.log(otherInfo); // the rest syntax always has to be the last item we place when using array destructuring

/*
    OBJECT DESTRUCTURING

*/

let user = {
    username: "testUser",
    is_verified: true,
};

let {username, is_verified} = user;
console.log(username);
console.log(is_verified);


const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename variable
    translations: [{
        title: localeTitle // rename variable
    }]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);


const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (let {name: n, family: { father: f } } of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}