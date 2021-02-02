/*
RETURN KEYWORD:
    -allows us to take data from inside of a function and return it so we can access it and use that data elsewhere in the application
*/


let resource = "|=========|";

//               ironRod = "|========|"
function machine(ironRod) {
    let screws ;

    if(ironRod) {
        screws = "|--- |--- |--- |---";
    } else {
        console.log ("Not fed any resources.");
    }
    return screws;
}

let powerOn = machine(resource); //argument
console.log (powerOn);

// block body arrow function
let myName = (fName, lName) => {
    let fullName = `${fName} ${lName}`;

    return fullName;
}

let powerOn = myName ("Spongebob", "Squarepants");
console.log(powerOn);

// concise body arrow function - return happens by default with concise body arrow functions
let myName = (fName, lName) => `${fName} ${lName}`;

let powerOn = myName("Patrick", "Star");
console.log(powerOn);


/*
CHALLENGE
************
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable to the console
*/


function tipCalc (bill, percent) {
    let tip = (bill * percent/100);
    return tip
}

let totalTip = tipCalc (25.50, 20);
console.log(totalTip);

//concise arrow function
let totalTip = (bill, percent) => (bill * (percent/100)).toFixed(2);
console.log(totalTip(25.50, 20));