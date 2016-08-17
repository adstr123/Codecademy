// Intro to typeof, .hasOwnProperty(), "for/in" loops, OOP, adding methods with prototyping, inheritance with prototyping, public/private variables

var aString = "I'm a string!";
console.log(typeof aString);

var myObj = {
    name: "Adam"
};
console.log(myObj.hasOwnProperty('name'));
console.log( myObj.hasOwnProperty('nickname'));

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property);
}

// OOP
function Person(name,age) {
  this.name = name;
  this.age = age;
}

var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);
var me = new Person("Adam Matheson", 22);
printPersonName(me);

// Prototyping methods
function Dog (breed) {
  this.breed = breed;
};

var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// Inheritance
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
Penguin.prototype = new Animal();

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;  // This is a private variable
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);