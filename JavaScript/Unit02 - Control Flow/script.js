// control flow statements let JS make decisions based on a condition
let userName = 'adstr123';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

/* six falsy values
false
0 and -0
"" and '' (empty strings)
null
undefined
NaN (Not a Number)
*/

// greater/smaller than
let hungerLevel = 10;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/* equality
=== equal value and type
== equal value
!= not equal value
!== not equal value and type
*/

/* logical operators
&& AND
|| OR
*/

// switch statements
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// ternary operators
// if isNightTime is true, turn on the lights, else turn off the lights
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');