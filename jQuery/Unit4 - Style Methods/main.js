$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active');	// instead of adding and removing classes, you can use toggleClass()
    $('.nav-menu').removeClass('hide');
    $('.menu-button').animate({						// change style properties over a period of time
      fontSize: '24px'
    }, 200)
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({							// css() accepts multiple styles at once if you pass it an object
      color: '#EFEFEF',
      backgroundColor: '#303030'
    })
    
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200)
  })
  
}); 
