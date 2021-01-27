// a ternary is the shortcut version to write a conditional

let num = 6;

//if else
if (num > 0) {
    console.log('The number is positive');
} else {
    console.log('The number is negative')
}

//ternary
let num = -10

num > 0 ? console.log('The number is positive.') : console.log('The number is negative.');

let luckyNumber = 4;
//() around luckyNumber == 4 are optional but helpful for organizing code
(luckyNumber == 4) ? console.log('the numbers match') 
    : (luckyNumber < 4) ? console.log('the number is less than the lucky number') 
    : (luckyNumber > 4) ? console.log('the number is greater than the lucky number') 
    : console.log(luckyNumber);