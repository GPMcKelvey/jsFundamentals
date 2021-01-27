let weather = 55;

if (weather < 70) {
    console.log('wear a jacket');

} else {
    console.log('no jacket necessary');
}


/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/

//bronze
let yourName = 'Steve'

if (yourName == 'Garrett'){
    console.log(yourName);
}else {
    console.log('Hello, what is your name?')
}

//silver
let yourName = 'Garrett'

if (yourName === 'Garrett'){//strict equal check - checks to make sure both values are of the same data type
    console.log('Hello, my name is', yourName +".");//string concatenation
}else {
    console.log('Hello, what is your name?')
}

//gold
let yourName = 'Garrett'

if (yourName == 'Steve'){
    console.log('Hello, my name is', yourName +".");
}else {
    console.log(`Hello, is your name ${yourName}?`);//string interpolation
}



/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/

//bronze
let aName = 'zAchARy';
if (aName[0] == aName[0].toUpperCase){
    console.log(aName);
} else {
    console.log("Hey, this isn't written correctly.")
}

//silver
let aName = 'zAchARy';
if (aName[0] == aName[0].toUpperCase){
    console.log(aName[0]);
} else {
    console.log(aName.substring(1).toLowerCase());
    //console.log(aName.slice(1).toLowerCase()); - returns same results
}

//gold
let aName = 'zAchARy'; //statement - we are stating that the variable of aName has a variable of "zachary"
if (aName[0] == aName[0].toUpperCase()){
    let isUpperCase = aName[0] + aName.substring(1).toLowerCase();//expression - any valid unit of code that resolves to a value
    console.log(isUpperCase)
    //console.log(`${aName[0]}${aName.substring(1).toLowerCase()}`); //my original method
} else {
    // console.log(`${aName[0].toUpperCase()}${aName.substring(1).toLowerCase()}`); // my original method
    let notUpperCase = aName.charAt(0).toUpperCase() + aName.substring(1).toLowerCase();
    console.log(notUpperCase);
}

//ELSE IF

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 27;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
  } 
  else if (age >= 18 && age <= 20) {
      console.log("You can vote!");
    
  } else if (age >= 21 && age <= 24) {
      console.log("You can drink!");

  } else if (age >= 25) {
      console.log("You can rent a car!");
  } else {
      console.log(age)
  }

  //OR

// correct structure
let age = 20;
if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
}

// incorrect structure
let age = 30;
if (age >= 18) {
    console.log("Yay! You can vote!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else {
    console.log("you're too young to do anything fun")
}

