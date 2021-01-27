/*
    Conditionals:
        - a falsy value is a value that is considered false when encountered in a boolean context
            - there are six falsy values in JavaScript
                1. false
                2. 0 
                    - zero will equate to false
                3. "", '', `` 
                    -empty qutoes, emtpy apostraphe sets, or emtpy back ticks
                4. null
                5. undefined
                6. NaN (not a number)
*/

if (undefined){
    console.log('will it run?')//nothing will log becasue the conditional is false
}

let isOn = true;
if (isOn == true) {
    console.log ('The light is on!');
}

if (isOn){
    console.log('The light is on.');
}

// variable is false but conditional is true so console will log.
/*let*/ isOn = false;
if (isOn == false) {
    console.log('The Light is off!');
}

/* 
    -JavaScript allows us to reference a variable that has already been declared and assign it a new value (reintialize that variable) but we cannot have two variables with the same name.
    
    -general rule of thumb:
        -when declaring a new variable, the variable name needs to be prefaced by one of our 3 available JS keywords (var, let, const) to declare a new variable
        -when assigning a new value to a variable that already exist, we simply just need to reference a variable that's already been named
*/

let weather = 65;

if (weather < 70) {
    console.log('wear a jacket')
}

/*for () {

}

function () {

}
*/