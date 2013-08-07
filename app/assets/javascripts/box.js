var expand = function() {
  console.log('expanding');
  $('.content-col-300').css("margin-left", "270px");
  $('.left-col-300').css("width", "250px");
  $('.social-icons').fadeIn(1000);
  $('.nav-title').delay(200).fadeIn(500);
};

var shrink = function() {
  $('.content-col-300').css("margin-left", "100px");
  $('.left-col-300').css("width", "80px");
  $('.social-icons').hide();
  $('.nav-title').hide();
};

var ready = function() {
  var fadeInBoxes = function() {
    console.log('fading');
    $(".faded").css('opacity', '1');
  };

  var resizeBoxes = function() {
    $('.right-col').width($(window).width()-430);
    $(".small").height($('.small').width());
  };

  fadeInBoxes();
  //resizeBoxes();

  $(window).resize(function() {
    console.log('resizing');
    //resizeBoxes();
  });

  $('.left-col-300').hover(function() {
    expand();
  }, function() {
    shrink();
  });



  $('.nav-title').click(function(event) {
    event.preventDefault();
    shrink();
    var c = this;
    setTimeout(function() {
      $(c).unbind('click').click(); 
    }, 300);
  });

};

$(document).ready(ready);
$(document).on('page:load', ready);