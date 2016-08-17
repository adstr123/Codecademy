// Intro to jQuery variables, class selectors & id selectors

$(document).ready(function() {
    var $target = $("#pink, .red");
    $target.fadeTo("slow", 0);
});