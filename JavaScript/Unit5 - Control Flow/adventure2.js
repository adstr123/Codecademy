var user = prompt("What's your strength out of 10?").toUpperCase();

var mood = "grumpy";
var userAge = "child";

switch(user) {
    case "0":
        if (mood == "grumpy") {
            console.log("You're useless!");
        }
        else if (mood == "grumpy" && age == "child") {
            console.log("Shoo!");
        }
        else {
            console.log("Oh dear. Perhaps home is best for you.");
        }
        break;
    case "8":
        if (mood == "grumpy" || age == "child") {
            console.log("You're a freak of nature");
        }
        else {
            console.log("You'll definitely win!");
        }
        break;
    case "5":
        console.log("Incredibly average.");
        break;
    default:
        console.log("Eh, you'll do I suppose");
        break;
}