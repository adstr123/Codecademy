// Intro to jagged arrays, objects (literal & constructor notation) & dot notation

var jagged = [[1, 2, 3], [4, 5]];   // A jagged array is a multidimensional array that has different number of elements in each row

// Literal notation
var me = {
    name: "Adam",
    age: 22
};

// Constructor notation
var me = new Object();
me.name = "Adam";
me.age = 22;

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();