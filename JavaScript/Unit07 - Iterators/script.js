// iterators - better way of looping over arrays

// forEach() (does not change contents of array)
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruit) {
  console.log(`I want to eat a ${fruit}`)
});

// arrow function syntax (ES6)
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));

// map() (can change contents of array)
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

let secretMessage = animals.map(function(animal) {
  return animal[0];
});

console.log(secretMessage.join(''));

// arrow function syntax (ES6)
let secretMessage = animals.map(animal => animal[0]);

// filter() (return new array of certain elements from original array that evaluate to truthy based on conditions)
let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});

// arrow function syntax (ES6)
let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// other built-in iterators
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(function(word) {
  return word.length < 6;
}));

let interestingWords = words.filter(word => word.length > 5);
console.log(interestingWords.every(word => word.length > 5));