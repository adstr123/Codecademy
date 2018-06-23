$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
   $(event.currentTarget).closest('.product-details').next().toggle('.disabled');		// .next() targets the element immediately following the selected element (there is also .prev())
   $(event.currentTarget).find('img').toggleClass('rotate');							// find() targets descendant elements by some selector, ie- class, id, tag etc.
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');							// .siblings() targets elements adjacent to an element
    $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');	// .children() targets an element's child elements
  });																					// .closest() travels up the DOM tree from the current element to target the closest element with a given selector
																						// there is also .parent() which targets an element's parent
  
  
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})