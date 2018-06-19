// scope - where a variable can be accessed in a program

// global variables
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return `Night Sky: ${satellite + stars + galaxy}`;
}

console.log(myNightSky()); // can access them all
console.log(stars); // reassigned 'stars', demonstrating how global variables can conflict

// preferable to use block scope (braces of a function, a loop, or an if statement)
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves); // logs 'Northern Lights' inside if block
  }
  console.log(lightWaves); // Logs 'Moonlight' outside if block
};

visibleLightWaves();

