// loops

// for loop
let vacationSpots = ["Hong Kong", "Australia", "Italy"];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log(`I would love to visit ${vacationSpots[vacationSpotIndex]}`);
}

// while loop
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Heart';

while (currentCard != 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log("found spade");