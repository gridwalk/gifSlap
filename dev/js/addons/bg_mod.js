// add the BG Box to the DOM
$bg_box = $("<div id='bg-box'></div>").css({
	'position': 'absolute',
	'height': '100%',
	'width': '100%',
	'z-index': '-1',
	'left': '0px',
	'top': '0px',
	'opacity':'0',
	'-webkit-transform':'translate(0px)',
	'image-rendering':'pixelated',
	'background-image':'url('+images.active_set[images.cursor]+')'
})

$('#container').append($bg_box);


// Module properties and functions
var bg_mod = {

	box: $('#bg-box'),

	update:{
    zoom:function(value){
      deck.updateState( 'slider', 'background_zoom', value )
			bg_mod.zoom(value)
    },
    scroll_speed_x:function(value){
    	deck.updateState( 'xy', 'background_scroll_speed_x', value )  	
    },
    scroll_speed_y:function(value){
    	deck.updateState( 'xy', 'background_scroll_speed_y', value )  	
    },
    opacity:function(value){
    	deck.updateState( 'slider', 'background_opacity', value )
    	bg_mod.box.css("opacity", value*.01)
    	deck.updateIndicatorState('background_run',!!value)
    },
    source:function(src) {
      deck.updateStateString('background_src',src)
      bg_mod.box.css('background-image','url('+src+')')
    }
  },

  reset:{
    zoom:function(){
      deck.updateState( null, 'background_zoom', null )
      bg_mod.box.css({"background-size": ''})
    }
  },


	// CALLED FROM THE MAIN LOOP. RUNS EVERY FRAME
	draw:function(){

		if( !state.background_run ){ return }

		// if the background is running, do other BG stuff too
		bg_mod.vscroll();
		bg_mod.hscroll();
		bg_mod.zoomer_zoom();

	},

	//CLEAR THE BG
	clear: function(){
		bg_mod.box.css('opacity','0')
		deck.automator.stop_automations(['background_opacity','background_zoom'])
		deck.controls.update('background_opacity',0)		
	},

	//SHOW THE BG
	show: function(){
		bg_mod.box.css('background-image','url('+bg_mod.active_set[bg_mod.cursor]+')');
		bg_mod.box.css('opacity','1')
	},

	//GO TO THE NEXT IMAGE
	next: function(){
		//restart if cursor is at the end
		if (bg_mod.cursor >= bg_mod.active_set.length){ bg_mod.cursor = 1; }
		
		// set the cursor
		// if( _3up.bg_offset == 1 ){
      bg_mod.cursor++;
  //   }else{
  //     bg_mod.cursor = bg_mod.cursor + _3up.bg_offset;
  //     _3up.bg_offset =1;
  //   }

		//set the new bg
		bg_mod.box.css('background-image','url('+bg_mod.active_set[bg_mod.cursor]+')');
		
		if( bg_mod.box.css('opacity') == 0 ){
			bg_mod.box.css('opacity',1);
		}

	},

	vscrolling_speed: 0,
	vscroll_invert: false,
	vscroll: function(){		
		
		scroll_speed_y = state.background_scroll_speed_y - (controls.background_scroll_speed_y.max / 2)

		vpos = bg_mod.box.css('backgroundPosition').split(' ')[1] 
		vpos = parseInt(vpos)
		bg_mod.box.css("background-position-y",vpos+scroll_speed_y+"px")
		
	},

	hscrolling_speed: 0,
	hscroll_invert: false,
	hscroll: function(){		
		
		scroll_speed_x = state.background_scroll_speed_x - (controls.background_scroll_speed_x.max / 2)

		hpos = bg_mod.box.css('backgroundPosition').split(' ')[0]
		hpos = parseInt(hpos)
		bg_mod.box.css("background-position-x",hpos+scroll_speed_x+"px")
		
	},

	zoom:function(value){
		if( value == 0 ){ value = 1 }
		value = value+"%"
		bg_mod.box.css({"background-size": value})	
	},

	zoomer_on: false,
	zoomer_add:function(){
		$zoom_pic = $("<img />").css({
			'position':'absolute',
			'top':'50%',
			'left':'50%',
			'height':'10px',
			'width':'auto',
			'-webkit-transform':'scale(0)'
		}).attr({
			'class':'bg-zoomer locked',
			'src':bg_mod.active_set[bg_mod.cursor]
		});

		bg_mod.box.append($zoom_pic);
	},
	zoomer_zoom: function(){

		if(!bg_mod.zoomer_on){return;}

		$('.bg-zoomer').each(function(){

			node = $(this)[0];
			var curTransform = new WebKitCSSMatrix(window.getComputedStyle(node).webkitTransform);
			console.log(curTransform.a); // curTransform is an object,
			console.log(curTransform.d); // a through

			// size = $(this).css('-webkit-transform');
			// console.log(size);
			
			if( curTransform.d > 100 ){ $(this).remove(); }

			$(this).css('-webkit-transform','scale('+(curTransform.d+1)+')');

		});
	},
	using_webcam:false,
  toggle_webcam:function(){

    if( bg_mod.using_webcam ){
      bg_mod.disable_webcam()
    }else{
      bg_mod.enable_webcam()
    }

  },
  enable_webcam:function(){

  	$webcamVideo = $('<video autoplay src="'+webcam.stream_src+'"></video>').css({
  		'width':      'auto',
  		'min-height': '100%',
  		'min-width':  '100%'
  	})

    bg_mod.box.html($webcamVideo);
    bg_mod.using_webcam = true

  },
  disable_webcam:function(){
    bg_mod.box.html('');
    bg_mod.using_webcam = false
  }
}