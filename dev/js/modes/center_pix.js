
// Setup commands
$center_pix = $("<div id='center-pix'></div>").css({
	'position': 'absolute',
	'height': '100%',
	'width': '100%',
	'left': '50%',
	'top': '0px',
	'z-index': '3',
	'text-align': 'center'
});

$('#container').append($center_pix);

add_css( '#center-pix div {position: absolute;}' );

var center_pix = {

	update:{
		horizontal_arc:function(value){
			if( !center_pix.run ){ return }
			deck.updateState( 'xy', 'center_horizontal_arc', value )
		},
		vertical_arc:function(value){
			if( !center_pix.run ){ return }
			deck.updateState( 'xy', 'center_vertical_arc', value )
		}
	},

	run: false,
	current_amount: 0,
	max_scale:3,
	box: $('#center-pix'),
	init: function(){
		center_pix.run = !center_pix.run;

		if(center_pix.run){
			
			images.clear();
			center_pix.current_amount = 0;

			controls.width.change( window.innerWidth / 3 )
			controls.height.change( window.innerWidth / 3 )

		}
	},
	stop:function(){
		center_pix.run = false
		// turn off center automations
		// no automations yet, but here's a placeholder
		// deck.automator.stop_automations(['chain_speed'])
	},
	draw: function(){

		if(!center_pix.run){ return; }

		// generate CSS for nth-child scaling
		css = '';
		i = 1;
		scale_fraction = center_pix.max_scale / state.max_images_amount;
		while( i < state.max_images_amount ){
			
			scale = i * scale_fraction

			horizontal_arc = state.center_horizontal_arc - (controls.center_horizontal_arc.max/2)
			vertical_arc   = state.center_vertical_arc   - (controls.center_vertical_arc.max / 2)

			margin_top  = (state.max_images_amount - (i+1)) * vertical_arc
			margin_left = (state.max_images_amount - (i+1)) * horizontal_arc

			// allow threaded rotation
			threaded_rotation = '';
			if( images.threaded_rotation ){
				if( i%2 == 0 ){ flop = -1 }else{ flop = 1 }
				threaded_rotation = 'rotate('+state.single_rotate*flop+'deg)';	
			}		

			css = css + " #center-pix div:nth-child("+i+"){";
				css = css + "-webkit-transform:scale("+scale+") translateX("+margin_left+"px) translateY("+margin_top+"px) "+threaded_rotation+";";
				css = css + "z-index:"+ (state.max_images_amount - i) +";";
			css = css + "}";
			
			i++;
		}

		// replace the stylesheet
		$('#center-pix-style').remove();
		add_css(css,'center-pix-style');

		mtop = -1*(state.height/2);
		mleft = -1*(state.width/2);

		rotation = 'rotate('+state.single_rotate+'deg)';
		if( images.threaded_rotation ){
			rotation = '';
		}

		elementType = '<img />'

		if( images.using_webcam ){
			elementType = "<canvas />"
		}

		$img = $(elementType)
			.attr("src",images.active_set[images.cursor])
			.css({
				'height':state.height,
				'width':state.width,
				'opacity':state.single_opacity,
				'-webkit-transform': rotation,
				'border-radius': state.border_radius+"%",
				'left':'50%',
				'top': '50%',
				'position':'absolute',
				'margin-top': mtop,
				'margin-left': mleft
			});

		// draw video image to canvas
		if( images.using_webcam ){
			$img
				.attr('height',webcam.height)
				.attr('width',webcam.width)

			ctx = $img[0].getContext('2d')
			ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
		}

		$div = $('<div style="height:100%" class="blowable gif" />').append( $img );
		center_pix.box.prepend( $div );
		center_pix.current_amount++;

		if(center_pix.current_amount >= state.max_images_amount){
			center_pix.box.find('div:gt('+state.max_images_amount+')').remove();
			center_pix.current_amount = state.max_images_amount;			
		}

	}
};