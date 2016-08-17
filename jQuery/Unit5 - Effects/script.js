// Intro to jQuery UI library, .effect() (explode, bounce, slide),  

$(document).ready(function() {
    $("#one").click(function() {
        $(this).effect("explode");
    });
    $("#two").click(function() {
        $(this).effect("bounce", {times:3}, 500);
    });
    $("#three").click(function() {
        $(this).effect("slide");
    });
});