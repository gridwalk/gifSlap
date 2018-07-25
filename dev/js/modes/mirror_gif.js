// Set up boxes
(function(){
  $mirror_box = $("<div id='mirror-box'></div>").css({
    'position': 'absolute',
    'height': '100%',
    'width': '100%',
    'left': '0px',
    'top': '0px',
    'z-index': '3'
  });

  $mirror_left = $("<div id='mirror-left'></div>").css({
    'height': '100%',
    'width': '50%',
    'float': 'left'
  });

  $mirror_right = $("<div id='mirror-right'></div>").css({
    'height': '100%',
    'width': '50%',
    'float': 'left',
    'transform': 'scaleX(-1)'
  });

  $mirror_left.append( $('<img />') ) // draw function requires one image minimum
  $mirror_box.append($mirror_left);
  $mirror_box.append($mirror_right);
  $('#container').append($mirror_box);

  // add_css('#mirror-left.reflect{-webkit-box-reflect:right 0px}#mirror-left .gif{position:relative;}')
  add_css('#mirror-right .gif{position:relative;}')

}());

var mirror_gif = {

  update:{
    rotation:function(value){
      if( !mirror_gif.run ){ return }
      deck.updateState( 'slider', 'mirror_rotation', value )
      mirror_gif.rotate(value)
    },
    margin:function(value){
      if( !mirror_gif.run ){ return }
      deck.updateState( 'slider', 'mirror_image_spacing', value )
    },
  },

  toggle:{
    grid:function(){
      if( !mirror_gif.run ){ return }
      deck.updateState( 'toggle', 'mirror_grid_on', !state.mirror_grid_on )      
    },
  },

  box: document.getElementById('mirror-box'),
  run: false,
  current_amount: 0,
  _leftBox: document.getElementById('mirror-left'),
  _rightBox: document.getElementById('mirror-right'),
  init: function(){
    mirror_gif.run = !mirror_gif.run;
    if(mirror_gif.run){
      controls.height.change(200)
      controls.reset_width.press()
      images.clear()
      mirror_gif.current_amount = 0
    }
  },
  stop: function(){
    if(!mirror_gif.run){ return }
    mirror_gif.run = false
    mirror_gif._leftBox.innerHTML = ''
    // turn off mirror automations
    deck.automator.stop_automations(['mirror_image_spacing'])
  },
  draw: function(){

    if(!mirror_gif.run){return;}

    elementType = 'img'
    if( images.using_webcam ){
      elementType = 'canvas'
    }

    _newImage = document.createElement(elementType)

    if( !images.using_webcam ){
      _newImage.setAttribute('src',images.active_set[images.cursor])
    }    

    _newImage.style.height          = state.height
    _newImage.style.width           = state.width
    _newImage.style.opacity         = state.single_opacity
    _newImage.style.marginRight     = state.mirror_image_spacing+'px'
    _newImage.style.borderRadius    = state.border_radius+'%'
    _newImage.style.transform       = 'rotate('+state.single_rotate+'deg)'

    if( state.border_image_on ){
      _newImage.style.borderWidth      = state.border_image_width
      _newImage.style.borderImage      = 'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat'
      _newImage.style.borderImageSlice = state.border_image_slices+"%"
    }

    // split into two image nodes for left and right
    // we are splitting here because a cloned canvas does not carry over its bitmap
    _rightImage = _newImage.cloneNode()
    _leftImage  = _newImage

    // draw video image to canvas
    if( images.using_webcam ){

      _leftImage.setAttribute('height',webcam.height)
      _leftImage.setAttribute('width',webcam.width)

      _leftImage.getContext('2d').drawImage( webcam._sourceVideo, 0, 0)

      _rightImage.setAttribute('height',webcam.height)
      _rightImage.setAttribute('width',webcam.width)

      _rightImage.getContext('2d').drawImage( _leftImage, 0, 0 )
    }

    clear = 'both'
    if( state.mirror_grid_on ){
      clear = 'none'
    }

    // create a container which allows image scaling
    _imageScaleBox                       = document.createElement('div')
    _imageScaleBox.style.transform       = 'scale('+state.image_scale+')'
    _imageScaleBox.style.transformOrigin = '100%'
    _imageScaleBox.style.float           = 'right'
    _imageScaleBox.style.clear           = clear
    _imageScaleBox.style.position        = 'relative'
    _imageScaleBox.setAttribute('class','gif blowable')

    // split into two nodes for left and right    
    _rightScaleBox = _imageScaleBox.cloneNode()
    _leftScaleBox  = _imageScaleBox

    _leftScaleBox.appendChild(_leftImage)
    _rightScaleBox.appendChild(_rightImage)

    mirror_gif._leftBox.insertBefore( _leftScaleBox, mirror_gif._leftBox.firstElementChild )
    mirror_gif._rightBox.insertBefore( _rightScaleBox, mirror_gif._rightBox.firstElementChild )

    // webcam framerate correction
    if( images.using_webcam && framerate.average < framerate.target && state.max_images_amount > 10 ){
      controls.decrease_max_images.press()

      // if framerate is really low, remove again
      if( framerate.average < framerate.target * 0.7 ){
        controls.decrease_max_images.press()        
      }
    }


    mirror_gif.current_amount = mirror_gif._leftBox.childNodes.length + mirror_gif._rightBox.childNodes.length

    // Cleanup
    if(mirror_gif.current_amount >= state.max_images_amount){

      mirror_gif.removeLastImage(mirror_gif._leftBox)
      mirror_gif.removeLastImage(mirror_gif._rightBox)

      // mirror_gif.current_amount = state.max_images_amount;
    }

  },

  removeLastImage: function( _parent ){
    _lastImg = _parent.childNodes[state.max_images_amount]
    if( typeof(_lastImg) !== 'undefined' ){
      while( _trash = _lastImg.nextSibling ){
        _trash.remove()
      }  
    }
  },

  rotate: function(deg){
    mirror_gif.box.style.transform = 'rotate('+(-1*deg)+'deg)'
  }
}