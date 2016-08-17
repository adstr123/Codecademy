/*jshint multistr:true */

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur hendrerit scelerisque. In semper lectus eget dignissim gravida. Vivamus imperdiet nulla et risus condimentum mattis. Donec sagittis eros eget erat egestas volutpat nec aliquam dui. In pulvinar convallis ex, sit amet laoreet Adam tellus mattis non. Phasellus sed nunc neque. Vestibulum erat magna, ullamcorper eget dapibus sed, aliquet sit amet orci. Donec enim neque, porta eget malesuada a, lacinia non lacus. Nunc eget tincidunt risus. Proin egestas tempus ipsum, eu lacinia metus ullamcorper ut. Aenean malesuada nisi eu cursus rutrum. Proin blandit semper pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nunc non velit eros. Adam Nam non dolor id ante feugiat euismod.";
var myName = "Adam";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === "A") {
        for (var j = i; j < i + myName.length; j++) {
            hits.push(text[j]);
        }
    }
};

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
};