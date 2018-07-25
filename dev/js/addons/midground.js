
// Setup commands

$midground_box = $("<div id='midground-box'></div>").css({
	'height': '80%',
	'width': '80%',
	'margin-top': '5%',
	'opacity':'0',
	'background-size': 'cover',
	'display': 'inline-block',
	'z-index':'1',
	'image-rendering':'pixelated'
});

$('#container').append($midground_box);

// Module properties and functions
var midground = {

	run: false,
	active_set: JSON.parse(JSON.stringify( gifslap.all_gifs )),
	cursor: 0,

	box: $('#midground-box'),

	update:{
    zoom:function(value){
      deck.updateState( 'slider', 'midground_zoom', value )
			midground.zoom(value)
    },
    scroll_speed_x:function(value){
    	deck.updateState( 'xy', 'midground_scroll_speed_x', value )  	
    },
    scroll_speed_y:function(value){
    	deck.updateState( 'xy', 'midground_scroll_speed_y', value )  	
    },
    opacity:function(value){
    	deck.updateState( 'slider', 'midground_opacity', value )
    	midground.box.css("opacity", value*.01)
    	deck.updateIndicatorState('midground_run',!!value)
    },
    position_x:function(value){
    	deck.updateState( 'xy', 'midground_pos_x', value )
      midground.update_transform()
    },
    position_y:function(value){
    	deck.updateState( 'xy', 'midground_pos_y', value )
      midground.update_transform()
    },
    rotation:function(value){
    	deck.updateState( 'slider', 'midground_rotation', value )
      midground.update_transform()
    },
    scale:function(value){
    	deck.updateState( 'slider', 'midground_scale', value )
      midground.update_transform()
    },
    source:function(src) {
      deck.updateStateString('midground_src',src)
      midground.box.css('background-image','url('+src+')')
    }
  },


	draw: function(){

		if( midground.box.css('opacity') == 0 ){

			midground.run = false;

		}else{

			midground.run = true;
			midground.vscroll();
  		midground.hscroll();

		}

		deck.controls.update_addon_running_indicator('midground',midground.run);

	},

	//CLEAR THE MIDGROUND
	clear: function(){
		midground.box.css('opacity','0')
		deck.automator.stop_automations(['midground_opacity','midground_zoom','midground_rotation','midground_scale'])
		deck.controls.update('midground_opacity',0)
	},

	//SHOW THE MIDGOROUND
	show: function(){
		midground.box.css('background-image','url('+midground.active_set[midground.cursor]+')');
		midground.box.css('opacity','1')
	},

	//GO TO THE NEXT IMAGE
	next: function(){
		//restart if cursor is at the end
		if (midground.cursor >= midground.active_set.length){ midground.cursor = 1; }
		
		midground.cursor++;

		//set the new bg
		midground.box.css('background-image','url('+midground.active_set[midground.cursor]+')');
		
		if( midground.box.css('opacity') == 0 ){
			midground.box.css('opacity',1);
		}
	},

	//GO TO THE PREVIOUS IMAGE
	prev: function(){
		//restart if cursor is at 0
		if (midground.cursor <= 0){ midground.cursor = midground.active_set.length-1; }
		//set the new bg
		midground.cursor--;
		midground.box.css('background-image','url('+midground.active_set[midground.cursor]+')');
		if( midground.box.css('opacity') == 0 ){
			midground.box.css('opacity',1);
		}
	},

	vscrolling_speed: 0,
	// vscroll_invert: false,
	vscroll: function(){

		scroll_speed_y = state.midground_scroll_speed_y - (controls.midground_scroll_speed_y.max / 2)

		vpos = midground.box.css('backgroundPosition').split(' ')[1];
		vpos = parseInt(vpos);
		midground.box.css("background-position-y",vpos+scroll_speed_y+"px");
	},

	hscrolling_speed: 0,
	hscroll_invert: false,
	hscroll: function(){
		scroll_speed_x = state.midground_scroll_speed_x - (controls.midground_scroll_speed_x.max / 2)
		hpos = midground.box.css('backgroundPosition').split(' ')[0];
		hpos = parseInt(hpos);
		midground.box.css("background-position-x",hpos+scroll_speed_x+"px");
	},
	
	update_transform:function(){

		rotation   = state.midground_rotation
		scale      = state.midground_scale
		position_x = state.midground_pos_x - 100
		position_y = state.midground_pos_y - 100

		midground.box.css('-webkit-transform','rotate('+rotation+'deg) scale('+scale+') translateX('+position_x+'%) translateY('+position_y+'%)')
		
	},
	zoom:function(value){
		midground.box.css({"background-size": value+"%"})
	}
}
