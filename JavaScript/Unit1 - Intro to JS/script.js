// Intro to text, numbers, maths, comments, confirm(), prompt(), .length(), console.log(), comparisons, "if" statements, modulo (%), string slicing, & variables

confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
prompt("Who are you?");

console.log("I'm coding like a champ".length > 10);

console.log("Goody Donaldson".length > 8);
console.log(8 * 2 === 16);

if ("Jon".length * 2 / (2 + 1) === 2) {
    console.log("The answer makes sense!");
} else {
    console.log("Error Error Error");
}

console.log(14 % 3);

console.log("wonderful day".substring(3, 7));

var myName = "Adam";
console.log(myName);
myName = myName.substring(0, 2);
console.log(myName);