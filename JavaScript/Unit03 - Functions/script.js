// functions - recipes that accept data, perform actions on that data, and return a result
const takeOrder = () => {
  console.log('Order: pizza');
};

takeOrder();

// parameters: topping, crustType. Arguments: 'mushrooms', 'stuffed crust'
const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
};

takeOrder('mushrooms', 'stuffed crust');

// using the 'return' keyword makes the function more flexible
const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
  orderCount++;
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}

let orderCount = 0;

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

console.log(getSubTotal(orderCount))

// 'return' also enables using multiple functions inside eachother
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
}

const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
}

// function declaration
function isGreaterThan (numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(isGreaterThan(1, 2));

// function expression = all examples above, ommiting identifier (anonymous) and stored in a variable so end in a semicolon
// types of function expression used in this lesson have been arrow function, shorthand
// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };

// no parentheses required for one param
// single line block is automatically returned
// single line block does not require curly parentheses
const multiplyES6 = (x, y) => x * y;