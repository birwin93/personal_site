var ready = function() {
  var width = $(window).width();
  var height = $(window).height();
  var matrix = [];
  console.log(height);
  console.log(width);
  var counter = 0;
  for (var y = 1; y < (height / 10)+1; y+=1) {
    row = []
    for (var x = 1; x < (width / 10)+1; x+=1) {
      $('.art').append("<div class='light-box " + counter + "'></div>");
      counter += 1;
    }
  }

   var goBlack = function(index) {
    $('.'+index).css('background-color', 'black');
  }

  console.log('done');
  for (var i = 0; i < counter; i+=1) {
    console.log(i);
    setTimeout(goBlack(i), i*1000);
  }

};

$(document).ready(ready);
$(document).on('page:load', ready);