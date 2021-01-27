//equal
console.log(3 == 3);//true
console.log('3' == 3);//true (coersion)
/*
    -coersion is the process of converting a value from one type to another
        -JS assumes that we made a mistake and that we do want to compare two values that are the same dataType.
*/

//strict equal - this overides javascript coersion
console.log(3 === 3);
console.log('3' === 3);

//not equal
console.log('3' != 3); //false (coersion)

//strict not equal
console.log('3' !== 3); //true (using strict avoids coersion)

//greater than
3 > 2; //true

//less than
2 < 3; //true

//greater than or equal to
3 >= 2; //true - not to be confused with fat arrow funtions( => )

//less than or equal to
2 <= 3; //true

// and comparison operator
2 && 3; //allows us to check if multiple values are true or false

let x= 5;
let y= 6;
if(x >=1 && y >= 1);
console.log(true);

// or comparison operator
2 || 3; //allows us to check multiple values but only one of the values needs to be true/false - whereas all need to be true/false in the case of &&