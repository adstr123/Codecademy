// objects - containers to store data and functionss

// data stored is not ordered - only accessed by calling its key
let person = {
  name: 'Adam',
  age: 23
};

// accessed with dot or bracket notation
console.log(person['name']);
console.log(person.age);

// objects are mutable (even if saving an object to const) (can add properties after creation)
person.hobbies = ["Hiking", "Gaming"];
console.log(person.hobbies);

// objects can have key-function pairs
let person = {
  name: 'Adam',
  age: 23,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm  set to 7AM',
  sayHello: () => {
    return 'Hello, there!'
  }
  // ES6 syntax
  sayGoodbye () {
  	return 'Goodbye!';
  }
};

console.log(person.sayHello());

// you can use 'this' to access data at object scope level
let person = {
  name: 'Adam',
  age: 23,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm  set to 7AM',
  sayHello: () => {
    return `Hello, my name is ${this.name}`; // without 'this' this line would return ReferenceError because name is not in sayHello() scope
  },
  sayGoodbye () {
  	return 'Goodbye!';
  }
};

// 'this' makes objects more flexible, allowing change of object whilst retaining scope
let friend = {
  name: 'Christina'
};

friend.sayHello = person.sayHello;
console.log(friend.sayHello());

// getters and setters allow you to validate data before setting, perform action whilst getting/setting, and control which properties can be got/set
// _ before property denotes private property
let person = {
  _name: 'Lu Xun',
  _age: 137,
  // 'set' keyword for setters
  set age(newAge) {
  	if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      return console.log('Invalid input');
    }
  },
  // 'get' keyword for getters
  get age() {
    return console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }
};

// call setters the same way as accessing properties
person.age = 'Thirty-nine'; // doesn't set var, prints "Invalid input"
person.age = 39;			// sets var

// getters are much the same
console.log(person.age);