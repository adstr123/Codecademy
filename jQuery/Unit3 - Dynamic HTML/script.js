// Intro to creating elements, inserting elements (.append(), .appendTo() .prepend(), .prependTo(), .after(), .before()), moving elements & removing elements

// Comment each line sequentially to see how the DOM is affected
$(document).ready(function () {
    $("body").append("<p>I'm a paragraph</p>");         // Inserts newly created element as the last child of the selected element
    $("body").prepend("<p>I'm a paragraph too!</p>");   // Inserts newly created element as the first child of the selected element
    $("#one").after("<p>Hello!</p>");                   // Inserts newly created element directly after selected element with id "one"
    $("#two").after($("p"));                            // Moves existing <p> elements directly after selected element with id "two"
    $("p").remove();
});