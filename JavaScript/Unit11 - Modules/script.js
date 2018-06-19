// modules -  reusable pieces of code that can be exported from one program and imported for use in another program
let Airplane = {}; // create the object that representes the Airplane module
Airplane.myAirplane = "StarJet"; // define a property of the Airplane module
module.exports = Airplane; // export the Airplane object as a module

// making use of the exported module (require())
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

// another way of exporting
// file1
const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
//file2
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

// ES6 exports
// default export syntax (one module per file)
