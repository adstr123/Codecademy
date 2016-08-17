// Intro to adding/removing/toggling classes, changing style (.height(), .width(), .css()), changing content & .val()

$(document).ready(function() {
    $("#text").click(function() {
        $(this).toggleClass("highlighted");                         // "toggleClass" just flips between "addClass" and "removeClass" so the functionality doesn't stick after the first trigger
    });
    
    $("#box").height("200px");                                      // These are so common jQuery includes them already
    $("#box").width("200px");
    $("#box").css("border-radius", "10px");                         // For other CSS properties, we can use the generic ".css()" function
    
    $('p').html("jQuery magic in action!");                         // .html() sets the content of the first element match it finds
    
    $("#button").click(function() {
        var toAdd = $('input[name=checkListItem]').val();           // We select the <input> with name "checkListItem", get it's contents with .val() and save the contents to a variable
        $(".list").append("<div class='item'>" + toAdd + "</div>"); // When the event is triggered, we create a new <div> containing the variable and append it to the div with class "list"
    });
});