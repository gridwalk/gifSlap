var images = {

  update:{

    /*************************

    For performance reasons...
    Do any rounding to incoming values before they get here.

    *************************/
    
    max_images_amount:function(amount){
      
      // force whole numbers
      amount = Math.round(amount)

      // min max
      max = controls.max_images_amount.max
      if( amount > max ){ amount = max }
      if( amount < 0   ){ amount = 0 }

      // send new value to state
      deck.updateState( 'slider', 'max_images_amount', amount )

    },

    height:function(value){

      if( value < 10 ){
        value = 10
      }else if( value > controls.height.max ){
        value = controls.height.max
      }

      // update width if it is auto
      if( state.width == "auto" ){
        controls.reset_width.press()
      }

      // send to state
      deck.updateState( 'slider', 'height', value )

    },

    width:function(value){

      if( value !== 'auto' && isNaN(value) ){
        controls.reset_width.press()
      }

      if( value < 10 ){
        value = 10
      }else if( value > controls.width.max ){
        value = controls.width.max
      }

      // send to state
      deck.updateState( 'slider', 'width', value )
    },

    scale:function(value){
      // send to state
      deck.updateState( 'slider', 'image_scale', value )
    },

    opacity:function(value){
      // send to state
      deck.updateState( 'slider', 'single_opacity', value )
    },

    rotation:function(value){
      // send to state
      deck.updateState( 'slider', 'single_rotate', value )
    },

    border_radius:function(value){
      // send to state
      deck.updateState( 'slider', 'border_radius', value )
    },

    border_image_width:function(value){

      border_image_on = value !== 0
      deck.updateState( 'toggle', 'border_image_on', border_image_on)
      deck.updateState( 'slider', 'border_image_width', value )      

    },

    border_image_slices:function(value){

      border_image_on = value !== 0
      deck.updateState( 'toggle', 'border_image_on', border_image_on)
      deck.updateState( 'slider', 'border_image_slices', value )

    }



  },

  

    

  
















  cursor: 0,
  skip_cursor:1, // when seeking for the next gif, this is how many it will skip
  active_set: gifslap.all_gifs, //all the gifs
  // set_array: null, // this is declared after the object is fully declared
  threaded_rotation:false,
  margin: 0,
  randomize_order: false, // value is set in deck-settings.js
  border_slice: 0, // used in border-image
  using_webcam: false,
  
  reset_set:function(){
    images.active_set = gifslap.all_gifs;
    images.cursor = 0;
    images.skip_cursor = 1;

    // save the current gif to state
    deck.updateState( null, 'current_gif_src', images.active_set[images.cursor] )
  },
  // get_sources: function(){
  //   _images = [];
  //   $('#container *').each(function(){
      
  //     if( $(this).attr('src') )
  //       _images.push( $(this).attr('src') );

  //     if( $(this).css('background-image') !== 'none' ){
  //       bg = $(this).css('background-image');
  //       bg = bg.replace('url(','').replace(')','');
  //       _images.push( bg );
  //     }

  //     if( $(this).css('border-image') !== 'none' ){
  //       _border_img = $(this).css('border-image');
  //       _border_img = _border_img.replace('url(','').replace(')','');
  //       alert(_border_img);
  //       _images.push( _border_img );
  //     }

  //   });
  //   unique_images = _images.filter(function(elem, pos) {
  //       return _images.indexOf(elem) == pos;
  //   })
  //   return unique_images;
  // },
  remove_random: function(){
    
    images_collection = document.getElementsByClassName('gif')
    random_index = Math.floor( Math.random() * images_collection.length )
    
    if( (random_index < 5) && (state.single_opacity !== 0) ){ random_index = 6 }

    if( images_collection[random_index] ){
      images_collection[random_index].remove()
    }    

  },
  clear: function(){
    $('.gif').remove();
    chain.amount = 0;
  },
  preview_skip:function(){
    images.skip_cursor++
    if( images.skip_cursor + images.cursor >= images.active_set.length ){
      images.skip_cursor = images.cursor * -1
    }
    deck.controls.update_next_gif()
  },
  preview_unskip:function(){
    images.skip_cursor--
    if( images.cursor + images.skip_cursor < 0 ){
      images.skip_cursor = images.active_set.length - images.cursor - 1
    }
    deck.controls.update_next_gif()
  },
  next: function(){

    // dont skip if paused
    if( state.paused ){ return; }

    if( images.skip_cursor !== 1 ){
      images.cursor = images.cursor + images.skip_cursor;
      images.skip_cursor = 1;
    }else{
      images.cursor++;
    }
    
    // Restart the set sequence if we've reached the end.
    if(images.cursor > images.active_set.length-1){ images.cursor = 0; }

    deck.controls.update_next_gif();

    // if width is auto, set the deck width bar to the right number
    if( state.width == 'auto' ){ controls.reset_width.press() }

    // if webcam is to foreground, change from webcam to gif
    images.disable_webcam()
    circle.restart()

    // save the current gif to state
    deck.updateState( null, 'current_gif_src', images.active_set[images.cursor] )

  },
  prev: function(){
    images.cursor--;

    // Restart the set sequence if we've reached the end.
    if(images.cursor <= 0){ images.cursor = images.active_set.length-1; }
    circle.restart();
    
  },
  shrink_all: function(){
    $('img').stop().animate({"height":"0px","width":"0px"},2000);
  },
  get_property:function(prop){ // remove this and replace calls with direct calls to the value
    return images[prop];
  },
  toggle_threaded_rotation: function(){
    images.threaded_rotation = !images.threaded_rotation;
  },
  toggle_webcam:function(){

    if( images.using_webcam ){
      images.disable_webcam()
    }else{
      images.enable_webcam()
    }

  },
  enable_webcam:function(){
    images.using_webcam = true
    deck.$('[control-id="send_webcam_to_foreground"]').addClass('active')
  },
  disable_webcam:function(){
    images.using_webcam = false
    deck.$('[control-id="send_webcam_to_foreground"]').removeClass('active')
  },
  get_current_size:function( callback ){

    var newImg = new Image()

    newImg.onload = function() {
      var height = newImg.height
      var width = newImg.width
      var ratio = width / height
      callback(width,height,ratio)      
    }

    newImg.src = images.active_set[images.cursor] // this must be done AFTER setting onload
  }

}