// Intro to "for" loops, loop intervals (++, --. +=. -=), arrays, array indexing & looping through arrays

for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}

for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}

var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Oxford"];
for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}