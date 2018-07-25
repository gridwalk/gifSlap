var hallway={

  update:{
    top_bottom_rotation:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_top_bottom_rotation.max ){ value = controls.hallway_top_bottom_rotation.max }
      deck.updateState( 'xy', 'hallway_top_bottom_rotation', value )
    },
    sides_rotation:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_sides_rotation.max ){ value = controls.hallway_sides_rotation.max }
      deck.updateState( 'xy', 'hallway_sides_rotation', value )
    },
    perspective_x:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_perspective_x.max ){ value = controls.hallway_perspective_x.max }
      deck.updateState( 'xy', 'hallway_perspective_x', value )
    },
    perspective_y:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_perspective_y.max ){ value = controls.hallway_perspective_y.max }
      deck.updateState( 'xy', 'hallway_perspective_y', value )
    },
    origin_divisor:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      deck.updateState( 'slider', 'hallway_origin_divisor', value )
    },

    
  },

  reset:{
    top_bottom_sides_rotation:function(){
      controls.hallway_sides_rotation.change( controls.hallway_sides_rotation.initial )
      controls.hallway_top_bottom_rotation.change( controls.hallway_top_bottom_rotation.initial )
    }
  },







  run: false,
	refresh_pics: false,
	layers: 5,
	_layer: null, // set in init()
	layer_rot: 0,
	layer_sides_auto_rot: 0,
	layer_top_bottom_auto_rot: 0,
	perspective: 250,
	_box: null, // set in init()
	initialized: false,
	ripple_cursor: 0,
	strobe_cursor: 0,
  canvasInLayer: false,

	init: function(){

    controls.height.change( controls.height.max )
    controls.width.change( controls.width.max )
		
		hallway.run = true;
		if( hallway.initialized==true ){ return; }

		css = '\
		.hallway-layer:nth-child(1){\
      width:100%;\
      height:100%;\
  	}\
  	.hallway-layer:nth-child(2){\
      width:80%;\
      height:80%;\
      margin-top:10%;\
      margin-left:10%;\
  	}\
  	.hallway-layer:nth-child(3){\
      width:60%;\
      height:60%;\
      margin-top:20%;\
      margin-left:20%;\
  	}\
  	.hallway-layer:nth-child(4){\
      width:40%;\
      height:40%;\
      margin-top:30%;\
      margin-left:30%;\
  	}\
  	.hallway-layer:nth-child(5){\
      width:20%;\
      height:20%;\
      margin-top:40%;\
      margin-left:40%;\
  	}\
    #hallway img,#hallway canvas{\
      width:100%;\
      height:100%;\
    }';

  	add_css(css);

  	_hallway               = document.createElement('div')
  	_hallway.id            = 'hallway'
  	_hallway.style.cssText = 'position:absolute; height:100%; width:100%; left:0px;	top:0px; z-index:3'

  	_layer                 = document.createElement('div')
  	_layer.className       = 'hallway-layer blowable'
  	_layer.style.cssText   = 'position:absolute; z-index:0 -webkit-perspective-origin-x: 50%; -webkit-perspective-origin-y: 50% -webkit-perspective: ' + hallway.perspective

  	_top                   = document.createElement('div')
  	_top.className         = 'hallway-top'
  	_top.style.cssText     = 'width:100%; height:20%; margin:0px auto; -webkit-transform:rotateX(-63deg);'
    _top.appendChild( document.createElement('img') )

  	_left                  = document.createElement('div')
  	_left.className        = 'hallway-left'
  	_left.style.cssText    = 'float:left; width:50%; height:80%; -webkit-transform: rotateY(-90deg);box-sizing:border-box;'
    _left.appendChild( document.createElement('img') )

		_right                 = document.createElement('div')
  	_right.className       = 'hallway-right'
  	_right.style.cssText   = 'float:left; width:50%; height:80%; -webkit-transform: rotateY(-90deg);box-sizing:border-box;'
    _right.appendChild( document.createElement('img') )


  	_bottom                = document.createElement('div')
  	_bottom.className      = 'hallway-bottom'
  	_bottom.style.cssText  = 'width: 100%; height: 37%; -webkit-transform: rotateX(63deg); position: absolute; bottom: 0px; z-index: -1; box-sizing:border-box'
    _bottom.appendChild( document.createElement('img') )

  	// make the layer from the walls
  	_layer.appendChild( _top )
  	_layer.appendChild( _left )
  	_layer.appendChild( _right )
  	_layer.appendChild( _bottom )

  	// declare THIS IS THE PERFECT LAYER
  	hallway._layer = _layer

		// put the hallway element on the screen
  	_container = document.getElementById('container')
  	_container.appendChild(_hallway)

  	// save reference to the hallway box
  	hallway._box = _hallway

  	// we good
		hallway.initialized = true

	},
	stop: function(){
    if( !hallway.run ){ return }
		hallway.run = false
		hallway._box.innerHTML = ''
    // turn off hallway automations
    deck.automator.stop_automations(['hallway_origin_divisor'])
	},

	draw: function(){

		if(!hallway.run){return;}

		// check if it has been initiallized yet
		if(!hallway._layer){
			hallway.initialized = false;
			hallway.init()
			return;
		}

		// top bottom rotation string
		rotate_x = 'rotateX('+state.hallway_top_bottom_rotation+'deg)'
		
		// sides rotation string
		rotate_y = 'rotateY('+state.hallway_sides_rotation+'deg)'

		// get styles from main image object
    opacity       = images.get_property('opacity')
		border_radius = state.border_radius
    scale         = ( state.image_scale / controls.image_scale.max) * 3 + .85
    rotation      = state.single_rotate
    sidesPadding  = ((((state.height - 10) / controls.width.max * 100) - 100) * -1 / 2)
    layer_width   = ((state.width-10) / controls.width.max) * 100

    // if we are using webcam, initialize canvases
    if( images.using_webcam && hallway.canvasInLayer == false ){

      for( var i=0; i < hallway._layer.childNodes.length; i++ ){
        hallway._layer.childNodes[i].firstElementChild.remove()
        _canvas = document.createElement('canvas')
        _canvas.setAttribute('height',webcam.height)
        _canvas.setAttribute('width',webcam.width)
        hallway._layer.childNodes[i].appendChild(_canvas)
      }

      hallway.canvasInLayer = true
    }

    // if we not using webcam, remove the canvases and reinstate the images
    if( !images.using_webcam && hallway.canvasInLayer == true ){
      for( var i=0; i < hallway._layer.childNodes.length; i++ ){
        hallway._layer.childNodes[i].firstElementChild.remove()
        hallway._layer.childNodes[i].appendChild(document.createElement('img'))
      }
      hallway.canvasInLayer = false
    }

    // NOTE: this updates the prototypical layer, not a new instance

		// set the new CSS on the hallway layers
		// there are 4 walls per layer
		// step through the walls to set the new css and update image sources
		for( var i=0; i < hallway._layer.childNodes.length; i++ ){

			// get the wall element
			_wall = hallway._layer.childNodes[i]

			_wall.style.opacity = opacity
      
      _wall.firstElementChild.style.borderRadius = border_radius + '%'
      _wall.firstElementChild.style.transform = 'rotate('+rotation+'deg) scale('+scale+')'

			if( _wall.classList.contains('hallway-bottom') || _wall.classList.contains('hallway-top') ){
				_wall.style.webkitTransform = rotate_x
        _wall.firstElementChild.src = images.active_set[images.cursor+images.skip_cursor]
			}

      if( _wall.classList.contains('hallway-top')){
        _wall.style.width  = layer_width+'%'
      }

      if( _wall.classList.contains('hallway-bottom')){
        _wall.style.padding = '0 '+((100-layer_width)/2)+'%'
      }

			if( _wall.classList.contains('hallway-left') || _wall.classList.contains('hallway-right') ){
				_wall.style.webkitTransform = rotate_y
        // _wall.style.height          = layer_height+'%'
				_wall.style.padding         = sidesPadding+'% 0'
        _wall.firstElementChild.src = images.active_set[images.cursor]
			}

		}

		// make a copy of the newly edited layer
		new_Layer = hallway._layer.cloneNode(true)

    origin_divisor = (state.hallway_origin_divisor * state.hallway_origin_divisor) + 100

		// get the origin of the perspective for the new layer
		origin_x = (state.hallway_perspective_x * origin_divisor) - (origin_divisor/2);
		origin_y = (state.hallway_perspective_y * origin_divisor) - (origin_divisor/2);		

		// update the new layer CSS

		new_Layer.style.opacity                  = 1
		new_Layer.style.webkitTransform          = 'rotate('+hallway.layer_rot+'deg)'
		new_Layer.style.webkitPerspective        = hallway.perspective
		new_Layer.style.webkitPerspectiveOriginX = origin_x+"%"
		new_Layer.style.webkitPerspectiveOriginY = origin_y+"%"

    if( state.border_image_on ){

      new_Layer.style.borderWidth      = state.border_image_width
      new_Layer.style.borderImage      = 'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat'
      new_Layer.style.borderImageSlice = state.border_image_slices+"%"
      new_Layer.style.left             = (-1 * (state.border_image_width))+"px"
      new_Layer.style.top              = (-1 * (state.border_image_width))+"px"

    }

    // draw all the canvases
    if( images.using_webcam ){
      for( var i=0; i < new_Layer.childNodes.length; i++ ){
        _canvas = new_Layer.childNodes[i].firstElementChild
        ctx = _canvas.getContext('2d')
        ctx.fillRect(0, 0, webcam.width, webcam.height)
        ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
      }
    }

		// finally append the new layer to the hallway

		hallway._box.appendChild( new_Layer )

		// remove a layer if there are too many
		if( hallway._box.childNodes.length > hallway.layers ){
			hallway._box.removeChild( hallway._box.childNodes[0] )
		}

	}
};