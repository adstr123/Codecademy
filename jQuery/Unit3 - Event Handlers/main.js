$(document).ready(() => {

  $('.login-button').on('click', () => {				// event handlers are comprised of an event listener and a callback fn
    $('.login-form').show();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')		// when event listener is triggered, .on() generates an event object that we pass to callback
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')	// 'currentTarget' attribute refers to element than an event is detected on
  })
  
}); 
