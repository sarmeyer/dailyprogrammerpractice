$(document).ready(function(){
  for (var i = 1; i < 34; i++) {
    if(i === 1){
      var cir = $('<p></p>').html('Lobby');
      $('.circles').append(cir)
    } else {
     var cir = $('<p></p>').html(i);
    $('.circles').append(cir)
  }
  }
})
