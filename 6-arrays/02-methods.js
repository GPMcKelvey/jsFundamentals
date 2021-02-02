let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//push method- allows us to add one or more items to the end of an array

food.push("Pizza");
console.log("push:", food);

// splice method - allows us to remove, replace, or add new elements to the array

food.splice(4, 1);
console.log("Splice:", food);

food.splice(2, 0, "Lollipops")
console.log("splice 2:", food);

// pop method - allows us to remove 
food.pop();
console.log("pop:", food);

// shift method - allows us to remove the first item of an array
food.shift();
console.log("shift:", food);

// unshift method - allows us to add one or more items to the beginning of an array

food.unshift("Popcorn", "Steak");
console.log("unshift:", food);