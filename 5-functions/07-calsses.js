/*
    - classes are special functions we can write that can be defined either by class declaration, or class expression - just like regular functions

    - classes act as a blueprint for creating objects that share methods and properties
        - we use that blueprint to create new objects or instances of a parent class, and ech new object we create can hold different values for properties that object holds
        - ex. - model could be a property of a class of Automobile, and each new Automobile we create that's a copy of the parent class, can have a different value for the property of model.

    - just like regular functions, the body of a class is in between curly braces
        - inside the body of a class is where we can define class members such as methods or a constructor

        - the constructor method is a special method for creating and initializing an object created with a class
            - there can only be ONE method with the name of constructor in a class
            - a constructor method utilizes a keyword called "super", which calls the constructor of the super class
                - the super keyword is used to access and call functions (methods) on an objects parent

    - JavaScript classes were introduced in ES5, and are a new way to write JS's previous existing prototype-based inheritance - which is a way of creating an object that acts as a blueprint, to then create other objects that share the same properties and methods as the parent
        - classes are the closest thing in vanilla JS to Object-Oriented Programming

*/


// CLASS DECLARATION

class Automobile {
    constructor(make, model){
        // instance properties must be defined inside of the constructor method - these are the keys and values we want to give to the objects that will be created using this blueprint
        this.make = make;
        this.model = model;

        // the "this" keyword refers to the object it belongs to. Since the constructor method is creating a new object, we're setting up a key of make and mode, and we use the "this" keyword to denote that both of those properties belong to our class of Automobile
    }
}

/*
    Hoisting
        - an important difference between function declarations and class declarations is that function declarations are hoisted, but class declarations are not
            - a class declaration needs to be declared before accessing it
*/

/*
    CLASS EXPRESSIONS
        - class expressions can be named or unnamed
            - the name of a named class can be retrieved through the class's name property
*/
// unnamed function - let Vehicle = function (){ }
// unnamed
let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
};

console.log(Vehicle.name);// Vehicle

// named
let Vehicle = class Vehicle2 {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
};

console.log(Vehicle.name); // Vehicle2

/*
    METHODS (prototype methods)
        - prototype methods are a shorter syntax for writing method definitions - which are basically just functions that are passed down to all subcalsses created from the parent class. Those methods (functions) can then be called and invoked
*/

//METHOD DEFINITION - OLD SYNTAX    
let automobile = {
    start: function(){
        //body
    },
    stop: function(){
        //body
    }
}

//PROTOTYPE METHOD - NEW SYNTAX
let automobile = {
    start (){
        //body
    },
    stop(){
        //body
    },
}

class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    //method 1 - stored outside of the constructor
    start () {
        console.log(`The ${this.make} ${this.model}'s engine started.`);
    }

    stop () {
        console.log(`The ${this.make} ${this.model}'s engine stopped.`)
    }
}

/*
    NEW INSTANCES (subclasses)
        - using the new keyword, we can use our class of Automobile as our blueprint to create a new object/instance (subclass) of the Automobile class 
*/

// new object/instance (subclass) of the Automobile class
let hondaCivic = new Automobile('Honda', 'Civic');

// we can now use dot notation to access the methods that were inherited when we created the new subclass

hondaCivic.start();
hondaCivic.stop();

// another new object/instance (subclass) of the Automobile class

let jeepCherokee = new Automobile('Jeep', 'Cherokee');
jeepCherokee.start();
jeepCherokee.stop();

/*
    EXTENDS
        - the extends keyword is used with class declarations or class expressions to create a new class as a child of another class

        -each new class we create that extends from the parent class not only inherits the properties and methods from the parent, but it can also have its own properties and methods
*/

//PARENT
class Animal {
    constructor(name){
        this.name = name;
    }
    eat (){
        console.log(`${this.name} eats their food.`)
    }
}

// SUBCLASS -extends
class Dog extends Animal{
    constructor(name, breed) {
        // super must be called before you can use the "this" keyword. Leaving the call to super out will cause an error
        //in derived classes (subclasses), JS requires us to call the super function inside of the constructor method - before anything else - or we won't have access to the "this" keyword
        super(name);
        this.type = breed;
    }
    play(){
        console.log(`${this.name} fetches the ball.`);
    }
}

let Palmer = new Dog('Palmer', 'Cattle Dog mix');
Palmer.eat();
Palmer.play();