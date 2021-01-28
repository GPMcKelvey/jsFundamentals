function hello () {
    console.log("Hey there");
}

// hello(); // correct way to call a function

// hello //incorrect way to call a function so it will not run, () must be used

// console.log(hello);

console.log(hello()); // function invocations happen immediately - in this case, our function of hello is running before the console.log statement, leaving us with an empty console.log printing undefined


/*
CHALLENGE
************
    - Create a function that, when invoked, prints out the numbers 1-10
*/

function count () {
    for (let i = 1; i <= 10; i ++){
        console.log(i);
    }
}

count ();

/*
CHALLENGE
************
    - Given the array, create a function that prints out the values from the array individually.
*/

let arr = ['This', 'is', 'really', 'cool'];

function print (){
    for (let word of arr){
        console.log(word);
    }
}

print ();