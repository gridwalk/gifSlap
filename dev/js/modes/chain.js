$('#container').append('<div id="chain"></div>')
$chain_reverse_container = $('<div id="chain-reverse"></div>')
$chain_reverse_container.css({
	'transform':'scaleX(-1)'
})
$('#container').append($chain_reverse_container)



var chain = {

	update:{
		speed:function(value){
			if(!chain.run){return}
			deck.updateState( 'slider', 'chain_speed', value )
		},
		direction_x:function(value){
			if(!chain.run){return}
			deck.updateState( 'xy', 'chain_direction_x', value )
		},
		direction_y:function(value){
			if(!chain.run){return}
			deck.updateState( 'xy', 'chain_direction_y', value )
		},
	},

	toggle:{
		reverse_doubler:function(){
			deck.updateState( 'toggle', 'chain_reverse_doubler_on', !state.chain_reverse_doubler_on )
		},
		remove_by_tail:function(){
			deck.updateState( 'toggle', 'chain_remove_by_tail_on', !state.chain_remove_by_tail_on )
			if(!state.chain_remove_by_tail_on){
				chain.container_reverse[0].innerHTML = ''
			}
		},
	},

	reset:{
		direction:function(){
			if(!chain.run){return;}
			zero_x = (controls.chain_direction_x.max/2)
			zero_y = (controls.chain_direction_y.max/2)
			deck.updateState( 'xy', 'chain_direction_x', zero_x )
			deck.updateState( 'xy', 'chain_direction_y', zero_y )
		}
	},



	run: true,
	restart: false,
	container: $('#chain'),
	container_reverse: $('#chain-reverse'),
	direction_pressed:Array(),
	amount: 0, //THE AMOUNT OF IMAGES SHOWN FROM THE CURRENT CHAIN, ALSO USED FOR Z-INDEX
	images: [], // updated on frame, holds all the images in chain
	reverse_doubler_images: [], // updated on frame, holds all the images in reverse doubler
	pos_x: 100,
	pos_y: 100,
	// direction_x: 5,
	// direction_y: 5,
	z: 0, // Z INDEX
	init: function(){
		chain.run = true;
		chain.restart = false;

		controls.height.change( 220 )
		controls.reset_width.press()

		//if the image overlaps the right edge, bring it in
		if( state.chain_pos_x + state.height > window.innerWidth ){ state.chain_pos_x = state.chain_pos_x - state.height; }

	},
	stop:function(){
		chain.run = false
		// turn off chain automations
		deck.automator.stop_automations(['chain_speed'])
	},

	draw: function(){

		if(!chain.run){ return; }

		if( state.single_opacity == 0 ){
			chain.cleanup()
			return
		}

		chain.z++;
		
		direction_x = state.chain_direction_x - (controls.chain_direction_x.max/2)
		direction_y = state.chain_direction_y - (controls.chain_direction_y.max/2)

		state.chain_pos_x = state.chain_pos_x + ( direction_x * state.chain_speed );
		state.chain_pos_y = state.chain_pos_y + ( direction_y * state.chain_speed );
		
		//PREVENT IMAGE FROM GOING OFFSCREEN
		
		//get width of images
		if( isNaN( state.width ) ){
			var estimated_width = $('img').eq(0).width();
		}else{
			var estimated_width = state.width;
		}
		
		//prevent image from going offscreen
		if( state.chain_pos_x > $('#container').width() - (estimated_width*.25)){ //right side
			state.chain_pos_x = 0 - (estimated_width*.75);
		}else if( state.chain_pos_y > $('#container').height() -(state.height*.4)){ //bottom
			state.chain_pos_y = 0 - (state.height*.6);
		}else if(state.chain_pos_x < 0 - (estimated_width*.75) ){ //left
			state.chain_pos_x = $('#container').width() - (estimated_width*.25);
		}if(state.chain_pos_y < 0 - (state.height*.6)){ //top
			state.chain_pos_y = $('#container').height() - (state.height*.4);
		}

		elementType = "<img />"
		src = images.active_set[images.cursor]

		if( images.using_webcam ){
			elementType = "<canvas />"
		}

		// generate the new image
		$add_image = $(elementType)
			.attr("src",src)
			.attr("class","gif chain blowable")
			.css({
				'position': 'absolute',
				'height':  state.height,
				'width':   state.width,
				'top':     state.chain_pos_y,
				'left':    state.chain_pos_x,
				'z-index': chain.z,
				'opacity': state.single_opacity,
				'border-radius': state.border_radius+"%",
				'-webkit-transform': 'rotate('+state.single_rotate+'deg) scale('+state.image_scale+')'
			});

		if( state.border_image_on ){
			next_src = images.active_set[images.cursor+images.skip_cursor]
			$add_image.css({
				'border-width':state.border_image_width,
				'border-image':'url('+next_src+') 48% repeat',
				"border-image-slice":state.border_image_slices+"%"
			});
		}

		// draw video image to canvas
		if( images.using_webcam ){
			chain.drawToCanvas($add_image)
		}

		//ADD THE NEW IMAGE!
		chain.container.prepend( $add_image )

	  // add the doubled image
		if( state.chain_reverse_doubler_on ){
			
			$double_image = $add_image.clone()

			// if we are using webcam, draw the canvas
			if( images.using_webcam ){
				chain.drawToCanvas($double_image)
			}			

			chain.container_reverse.prepend( $double_image )
		}

		//REMOVE IMAGES (CLEAN UP PHASE)
		chain.cleanup()
		
	},

	drawToCanvas:function($canvas){
		$canvas
			.attr('height',webcam.height)
			.attr('width',webcam.width)

		ctx = $canvas[0].getContext('2d')
		ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
	},

	cleanup:function(){
		chain.images                = chain.container[0].childNodes
		chain.reverse_doubler_images = chain.container_reverse[0].childNodes

		// default remove function is remove randomly
		remove_function = chain.remove_random

		// or alternatively remove by tail
		if( state.chain_remove_by_tail_on ){ remove_function = chain.remove_tail }

		// run the remove function for each excess gif
		remove_amount = chain.amount - state.max_images_amount

		i = 0
		while( i < remove_amount ){
			remove_function()
			i++
		}

		// get accurate amount of gifs on the screen
		chain.amount = chain.images.length + chain.reverse_doubler_images.length
	},

	remove_tail: function(){

		images_collection = chain.images

		if( !state.chain_reverse_doubler_on && chain.reverse_doubler_images.length > 0 ){
			images_collection = chain.reverse_doubler_images
		}else if( chain.images.length < chain.reverse_doubler_images.length ){
			images_collection = chain.reverse_doubler_images
		}

		index = images_collection.length-1
		if(images_collection[index]){
			images_collection[index].remove()
		}

	},

	remove_random:function(){

		// if there reverse doubler is on, choose randomly which image group to remove from
		if( state.chain_reverse_doubler_on ){
			// random one or the other
			images_collection = Math.round(Math.random()) ? chain.images : chain.reverse_doubler_images	
		}else{
			// choose from all gifs on screen

			// must convert these node lists into arrays to concatenate them
			chain.images = Array.prototype.slice.call(chain.images)
			chain.reverse_doubler_images = Array.prototype.slice.call(chain.reverse_doubler_images)

			images_collection = chain.images.concat( chain.reverse_doubler_images )
		}
		
		random_index = Math.floor( Math.random() * images_collection.length )
		
		if( (random_index < 5) && (state.single_opacity !== 0) ){ random_index = 6 }

		if( images_collection[random_index] ){
		  images_collection[random_index].remove()
		} 
	}
}