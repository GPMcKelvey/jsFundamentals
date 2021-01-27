/*
    - switch statements execute a block of code when a 'case' is evaluated as true
    -the switch statement often incorporates the break keyword, as well as the 'default' keyword - although both keywords are optional
        - the break keyword breaks out of a case evaluated as true. This will stop the execution of more cases from being tested.
        If the break keyword is omitted, the next case in the switch statement will be evaluated.
        - the default keyword specifies code to run if none of the cases evaluated as true. There can only be one default keyword in a switch statement.
*/

let officeCharacter = 'Pam';

switch (officeCharacter) {
    case "Michael":
        console.log('My mind is going a mile an hour');
        break;
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "Jim":
        console.log('Bears, Beets, Battlestar Galactica');
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, do I know you?`);
    }