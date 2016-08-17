// Intro to jQuery, selectors, linking jQuery, linking HTML & JS & jQuery functions

$(document).ready(function() {          // This tells the script to execute only when the document has loaded and is ready
   $('div').mouseenter(function() {     // We select <div>, then create a "mouseenter" event handler
       $(this).animate({                // We specify an animation on the currently selected element (<div>) when the event is triggered
           height: '+=10px'             // The element will get 10px taller
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {          // This is a "click" event handler
       $(this).toggle(1000);            // This time we specify that we will toggle the element over a period of 1000ms when the event is triggered
   }); 
});