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
let Airplane = {}; // object to hold Airplane module

Airplane.availableAirplanes = [ // availableAirplanes property of Airplane object
{
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];

export default Airplane; // ES6 exports syntax

// ES6 'import' syntax
import Airplane from './airplane'; // import the module

function displayFuelCapacity() {
	// loop over each element in the module's 'availableAirplanes' property (array)
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

// ES6 second approach to exports: named exports - allow exporting of data through use of variables
// can either use 'export' keyword as soon as vars declared...
export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};

// ... or use 'export' keyword at end and list vars to export
// can use 'as' keyword to change var name at export
export {availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};

/// further imports example
// import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';
// if you defined aliases with 'as' keyword, make sure to use these during import
import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';
// can import entire module as an aliases
// import * as flyingMachines from './airplane';
// flyingMachines.availableAirplanes
// etc.

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();