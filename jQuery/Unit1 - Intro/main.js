// add jQuery by including the script in the HTML e.g. line 172 of index.html, which uses a CDN host

$(document).ready(() => {					// the .ready() method ensures all elements are loaded before executing any JS
  const $menuButton = $('.menu-button');	// we can target elements by their class...
  const $navDropdown = $('#nav-dropdown');	// ... or their id

  $menuButton.on('click', () => {			// we can utilise event handles with the .on() meth9od
    $navDropdown.show();					// jQuery effects include .show()...
  })
  
  $navDropdown.on('mouseleave', () => {
    $navDropdown.hide();					// ... and .hide()
  })
})