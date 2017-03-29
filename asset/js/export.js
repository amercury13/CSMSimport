jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.MainMenu');
    if (scrollPos > 25 ) {
      navbar.addClass('aside-padding');
    }else {
      navbar.removeClass('aside-padding');
    }
  });
});