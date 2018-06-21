// variables
const location = 'New York City';
let latitude = 40.7;
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

// constant vars
const entree = 'Enchiladas';
const price  = 12;

console.log(entree);
console.log(price);

// won't work because entree is const
entree = 'Tacos';

// let (scope = block, statement, or expression, var scope = globally or locally to entire function)
let changeMe = true;
console.log(changeMe = false);

// undefined is the final primitive, used when variable declared but not assigned
let notDefined;
console.log(notDefined);

// mathematical assignment operators
let x = 4;
x += 2; // x equals 6
let y = 4;
y -= 2; // y equals 2
let z = 4;
z *= 2; // z equals 8
let r = 4;
r++; // r equals 5
let t = 4;
t--; // t equals 3

// string interpolation (inserting calculated values into string)
favoriteAnimal = 'Tiger';
console.log('My favorite animal: ' + favoriteAnimal);

// template literals in ES6 allow embedded expressions & newlines, contained in grave backticks ``
console.log(`string text line 1 ${AND...}
string text line 2`);
// you can join template literal elements without using a plus sign. E.g. to concatenate query params for a query string to submit to an API:
const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;