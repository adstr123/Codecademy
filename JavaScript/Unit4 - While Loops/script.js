// Intro to "while" loops, booleans as conditions & "do/while" loops

var coinFace = Math.floor(Math.random() * 2);
while (coinFace === 0) {
    console.log("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2);
}

console.log("Tails! Done flipping.");

var bool = true;
while(bool){
    console.log("Less is more!");
    bool = false;
}

var loopCondition = false;
do {
    console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");
} while (loopCondition);