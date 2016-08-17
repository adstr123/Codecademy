// Intro to .hover(), .focus(), .dblclick() & .keydown()

$(document).ready(function () {
    $("div").hover( // .hover() can take two functions, one for when the mouse enters & one for when it leaves
        function () {
            $(this).addClass("active");
        },
        function () {
            $(this).removeClass("active");
        }
    );

    $("div").dblclick(function () {
        $(this).fadeOut("fast");
    });

    $("input").focus(function () {
        $(this).css("outline-color", "#FF0000");
    });

    $(document).keydown(function (key) { // "Position" CSS property must be appropriate to facilitate animation
        switch (parseInt(key.which, 10)) { // Parses which key was used for the event and returns it as a decimal number
            // Left arrow key pressed
        case 37:
            $("div").animate({
                left: "-=10px"
            }, 'fast');
            break;
            // Up Arrow Pressed
        case 38:
            $("div").animate({
                top: "-=10px"
            }, 'fast');
            break;
            // Right Arrow Pressed
        case 39:
            $("div").animate({
                left: "+=10px"
            }, 'fast');
            break;
            // Down Arrow Pressed
        case 40:
            $("div").animate({
                top: "+=10px"
            }, 'fast');
            break;
        }
    });
});