//CIRCLE GIFS

var circle_container = document.createElement('div');
circle_container.setAttribute("style","width:100%;height:100%;z-index:999999999999999;position:absolute;top:0px;-webkit-transform-origin:center 50% 0px;");
circle_container.setAttribute('id','circle');
document.getElementById('container').appendChild( circle_container );

var circle = {

  update:{
    container_spin_speed:function(value){
      if( !circle.run ){ return }
      deck.updateState( 'slider', 'circle_container_spin_speed', value )
    },

    spin_speed:function(value){
      if( !circle.run ){ return }
      value = +(value)
      deck.updateState( 'slider', 'circle_spin_speed', value )
      // circle.spin_speed = value*.005;
    }
  },

  toggle:{
    size_lock:function(){
      if(!circle.run){ return }
      deck.updateState( 'toggle', 'circle_size_lock_on', !state.circle_size_lock_on )
    }
  },

  run: false,
  refresh: false,
  refresh_cursor: 0,
  _images: null, // set in init()
  points: 41,
  radius: 350,
  theta_length: .15,
  center_x: (window.innerWidth / 2),
  center_y: (window.innerHeight / 2),
  angle: 0,
  container_angle: 0,
  spin_speed: .02,
  cursor: 0,
  draw_interval: null,
  draw_i: 0, // used to count the number of images that have been drawn
  stop: function(){
    circle.run = false
    // turn off circle automations
    deck.automator.stop_automations(['circle_spin_speed','circle_container_spin_speed'])
  },
  init: function(){

    controls.height.change(100)
    controls.width.change(100)
    controls.image_scale.change(1)
    controls.wind_speed_reset.press()

    circle._images = null
    _circle = document.getElementById('circle')

    circle.run = true;

    $('#circle .gif').remove();
    
    circle.center_x = (window.innerWidth / 2)
    circle.center_y = (window.innerHeight / 2)

    perim = circle.get_perim()

    circle.draw_i = 0

    // draw images around the perimeter until all points have an image

    circle.draw_interval = setInterval(function(){

      // stop when we have enough images
      if( circle.draw_i == perim.length || !circle.run ){ 
        clearInterval( circle.draw_interval )
        return
      }

      // _circlePic = document.createElement('img')
      // _circlePic.style.height = '100%'
      // _circlePic.style.width  = '100%'

      // _circlePic.setAttribute('src',images.active_set[images.cursor])

      _wrapper = document.createElement('div')
      _wrapper.setAttribute('class','circle gif')

      
      _wrapper.style.backgroundImage = 'url('+images.active_set[images.cursor]+')'
      _wrapper.style.backgroundSize = '100% 100%'

      _wrapper.style.position     = 'absolute'
      _wrapper.style.overflow     = 'hidden'
      _wrapper.style.height       = state.height
      _wrapper.style.width        = state.width
      _wrapper.style.opacity      = state.single_opacity
      _wrapper.style.borderRadius = state.border_radius+"px"
      _wrapper.style.left         = perim[circle.draw_i][0]
      _wrapper.style.top          = perim[circle.draw_i][1]
      _wrapper.style.transform    = 'rotate('+state.single_rotate+'deg)'

      // _wrapper.appendChild(_circlePic)      
      _circle.appendChild(_wrapper)

      circle.draw_i++
      circle._images = _circle.getElementsByClassName('gif')

    },20)
    
  },
  get_perim: function(){
    i = 0;
    theta = 0;
    perim = new Array();
    while( i <= circle.points){
      x = circle.center_x + circle.radius * Math.cos(theta);
      y = circle.center_y + circle.radius * Math.sin(theta);
      perim[i] = [x,y];
      i++;
      theta = theta+circle.theta_length;
    }
    return perim;
  },
  restart:function(){
    circle.refresh = true;
    circle.refresh_cursor = 0;
  },
  resize:function(){
    if( !circle.run ){ return; }
    circle.center_x = (window.innerWidth / 2);
    circle.center_y = (window.innerHeight / 2);
    circle.init();
  },

  draw: function(){

    if( !circle.run ){ return }
    if( circle._images == null ){ return }

    //Spin the whole circle
    circle.container_angle           = circle.container_angle - state.circle_container_spin_speed
    circle_container.style.transform = "rotate("+circle.container_angle+"deg)"    

    //Apply styles to every image simultaneously (rotate, scale)
    for (var i = 0; i < circle._images.length; i++){

      spin_speed = state.circle_spin_speed * 0.1

      circle.angle = +(( circle.angle + spin_speed ).toFixed(4)) // round to 4 decimals
      circle.angle = circle.angle%360

      circle._images[i].style.transform = "rotate("+circle.angle+"deg) scale("+state.image_scale+")"
    }

    // set a new source image
    if( circle.refresh ){
      circle._images[circle.refresh_cursor].style.backgroundImage = 'url('+images.active_set[images.cursor]+')'
      circle.refresh_cursor++
      if( circle.refresh_cursor >= circle._images.length ){
        circle.refresh = false
      }
    }

    //Apply stlyes frame by frame
    _imgWrap = circle._images[circle.cursor]

    if( typeof(_imgWrap) == "undefined" ){ return }

    // insert canvases if we're using webcam
    if( images.using_webcam ){

      _canvas = _imgWrap.getElementsByTagName('canvas')[0]
      if( _canvas == undefined ){

      	// add canvas
      	_canvas = document.createElement('canvas')

      	_canvas.setAttribute('height',webcam.height)
	      _canvas.setAttribute('width',webcam.width)
	      _canvas.style.width = '100%'
	      _canvas.style.height = '100%'

	      _imgWrap.appendChild(_canvas)

	      ctx = _canvas.getContext('2d')
	      ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)

      }else{
      	// update canvas
      	console.log('update canvas')
      	ctx = _canvas.getContext('2d')
	      ctx.fillRect(0, 0, webcam.width, webcam.height)
	      ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
      }

    }else{
    	_canvas = _imgWrap.getElementsByTagName('canvas')[0]
    	if( _canvas ){
    		_canvas.remove()
    	}
    }

    _imgWrap.style.opacity          = state.single_opacity
    _imgWrap.style.borderRadius     = state.border_radius+'px'

    if( state.border_image_on ){
	    _imgWrap.style.borderWidth      = state.border_image_width
	    _imgWrap.style.borderImage      = 'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat'
	    _imgWrap.style.borderImageSlice = state.border_image_slices+"%"
	  }else{
	  	_imgWrap.style.borderWidth      = 0
	  	_imgWrap.style.borderImage      = 'none'
	  }

    if( !state.circle_size_lock_on ){

      // calculate pixel value of auto width
      if( state.width == 'auto' ){        
        images.get_current_size(function(width,height,ratio){
          controls.width.change( state.height * ratio )
        })
      }

      _imgWrap.style.height         = state.height
      _imgWrap.style.width          = state.width
    }

    circle.cursor++
    if( circle.cursor >= circle._images.length ){
      circle.cursor = 0
    }
  }
}