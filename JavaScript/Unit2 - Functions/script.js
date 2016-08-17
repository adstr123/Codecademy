// Intro to functions, "return" & scope

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

divideByThree(12);

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

greeting("Adam");

var timesTwo = function(number) {
    return number * 2;
};

timesTwo(25);
console.log(newNumber);

var my_number = 7; // this has global scope
var timesTwo = function(number) {
    var my_number = number * 2; // this has local scope
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);
console.log("Outside the function my_number is: ")
console.log(my_number);