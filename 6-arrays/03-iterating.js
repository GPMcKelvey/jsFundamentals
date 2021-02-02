/*
    - forEach() method
        - the forEach() method executes a function for each element in an array
        - the forEach method essentially does the same thing as a for loop or for of loop - both iterate over the properties in an array
 */

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];
// console.log(food.length);

//regular for loop
// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

//forEach method - function declaration

food.forEach(function(foodItem) {
    console.log(foodItem);
})

/*
CHALLENGE
************
    - (Go look at MDN docs if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another one
*/

// my challenge response
let movies = ["Life Aquatic", "Tombstone", "Step Brothers", "Shawshank Redemption"];
movies.push("The Big Lebowski");
movies.splice(0, 1, "The Grand Budapest Hotel");
movies.forEach(function(movie){
    console.log(movie);
});

// instructor version w/ arrow function
let movies = ["Life Aquatic", "Tombstone", "Step Brothers", "Shawshank Redemption"];
movies.push("The Big Lebowski");
movies.splice(0, 1, "The Grand Budapest Hotel");
movies.forEach(movie => console.log(movie)); 
// remember that parentheses are not needed when only a single parameter is present when working with fat arrow functions ".forEach((movie)" works as well but () are not essential

