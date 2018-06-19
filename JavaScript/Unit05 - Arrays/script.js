// arrays - JS' way of making lists. Can store any data types, ordered
let newYearsResolutions = ["Hey", "Hello", "Sup"];
console.log(newYearsResolutions);

// indexing
console.log(newYearsResolutions[0]); // first item
console.log(newYearsResolutions[3]); // undefined

// length array property
console.log(newYearsResolutions.length);

// adding/removing elements using built-in methods
newYearsResolutions.push("Wagwan", "Ay up"); // appends two elements
newYearsResolutions.pop(); // removes last element

// other built-ins include .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); // remove first element
groceryList.unshift(); // prepend element
console.log(groceryList.slice(1, 4)); // print elements 2 through 5
console.log(groceryList) // array still has same elements, above are non-modifying methods!

// arrays defined with const are not reassignable, but they remain mutable
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push("HP sauce");
console.log(condiments);

condiments = ["Gotcha"];
console.log(condiments);

utensils.pop();
console.log(utensils); // works, changes

utensils = ["Chopstick master race"]; // error