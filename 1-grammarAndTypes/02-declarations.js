/*
Notes:
-variables: Are named containers for storing data values and referring to later (we can name them whatever we want)
    - a variable name must begin with a letter, underscore, or dollar sign
    -numbers may follow the above characters but cannot come first
    - Javascript is case sensitive - "Hi" and "hi" are different variables
    -no spaces allowed in variable names
    -camelCase is the best practice for naming variables
        -snake_Case, PascalCasing
    - this is good practice because it helps keep everything readable - let myName="Garrett";
*/

let a = 2;

      let       b       =       2;
//     ^        ^       ^        ^
   /* (1)      (2)     (3)     (4)

1. Keyword
2. Variable name (we can name this whatever we want)
3. Assignment Operator
4. Variable value

Var, Let, and Const:

-var: 'old' keyword for variables **in this course we won't be using this keyword often.

-let: 'new' keyword for variables (for now best practice is to use let)

-const: also 'new' ; declares unchangeable variable
*/

/*
NOTES:
-declarations: are on the LEFT SIDE of a variable
    -it is simply: let x
    -declarations are on the left side of the assignment operator (=)

-Initialization: are on the RIGHT SIDE of a variable
    - it sets the value of the variable
    -it incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10

    */

    let x;
    console.log('Declaration', x);

    x = 10
    console.log('Initializaion', x);

    x = 33;
    console.log('Initialization 2', x);

    let y = 'Hello';
    console.log('Both', x, y);

    let today = "Great!";
    const elevenFifty = "Wonderful!";
    console.log(today, elevenFifty);

    today = 'Lovely';
    elevenFifty = "Fantastic";
    console.log(today, elevenFifty);

    //const: means "constant". 'new' in ES6: declares variables meant to remain unchanged
    