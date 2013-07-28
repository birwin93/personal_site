var ready = function() {
  console.log('sdfsd');
  var fadeInBoxes = function() {
    console.log('fading');
    $(".small").css('opacity', '1');
  };

  var resizeBoxes = function() {
    $('.right-col').width($(window).width()-650);
  };

  fadeInBoxes();
  resizeBoxes();

  $(window).resize(function() {
    console.log('resizing');
    resizeBoxes();
  });

};

$(document).ready(ready);
$(document).on('page:load', ready);