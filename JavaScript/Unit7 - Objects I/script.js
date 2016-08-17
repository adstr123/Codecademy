// Intro to bracket notation, "new" keyword, object methods, "this" keyword & custom constructors

var dog = {
    species: "greyhound",
    weight: 60,
    age: 4
};

console.log(dog["species"]);

// Literal notation (good when requiring single instance e.g. basic data container)
var susan1 = {
    name: "Susan Jordan",
    age: 24
};

// Constructor notation (good when requiring multiple instances)
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
bob.setAge = function (newAge) {
    bob.age = newAge;
};

console.log(bob.setAge(40));
console.log(bob.setAge(20));

// Here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
    this.age = newAge;
};

// now we make bob
var bob = new Object();
bob.age = 30;

// and down here we just use the method we already made
bob.setAge = setAge;
// change bob's age to 50 here
bob.setAge(50);

var susan = new Object(); // reusable methods defined outside objects
susan.age = 25;
susan.setAge = setAge;

function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea = function () {
        return this.height * this.width;
    };
    // put our perimeter function here!
    this.calcPerimeter = function () {
        return this.height * 2 + this.width * 2;
    };
}