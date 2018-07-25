var puncher = {
  set_array: images.active_set,
  cursor: 0,
  vertical_destination: 5000,
  horizontal_destination: 0,
  src: images.active_set[images.cursor],
  set:function(src){
    puncher.src = src;
  },
  punch: function(index){

    // set active indicator on deck
    deck.controls.update_addon_running_indicator('puncher',true);
  
    pos_y = Math.floor(Math.random()*window.innerHeight);
    pos_x = Math.floor(Math.random()*window.innerWidth);
    height = Math.floor(Math.random()*300)+100;
    
    $p_img = $('<img src="'+puncher.src+'" class="gif" height="'+height+'" />').css({
      'top':pos_y,
      'left':pos_x,
      'z-index':'1000000000000'
    });

    $('#container').prepend( $p_img );

    $p_img.animate({
      'top':puncher.vertical_destination,
      'left':puncher.horizontal_destination
    },5000,function(){
      $(this).remove();
      
      // remove active indicator on deck
      deck.controls.update_addon_running_indicator('puncher',false);

    });
  }
}