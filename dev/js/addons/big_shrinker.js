
$("<div id='big-shrinker-box'></div>").css({
	'width':'100%',
	'height':'100%',
	'position':'absolute',
	'top':'0',
	'left':'0'
}).appendTo( $('#container') );

big_shrinker = {

	box: $('#big-shrinker-box'),
	update:{
		rotation:function(value){
			deck.updateState( 'slider', 'big_shrinker_rotation', value )
			big_shrinker.rotate(value)
		},
    source:function(src) {
      deck.updateStateString('big_shrinker_src',src)
    }
	},
	
	go: function(){

		if( state.big_shrinker_src == '' ){
			big_shrinker.update.source(images.active_set[images.cursor])
		}

		// set active indicator on deck
		deck.controls.update_addon_running_indicator('big-shrinker',true);

		$big_shrinker = $('<img />')
			.attr('src',state.big_shrinker_src)
			.addClass('locked')
			.css({
				'position': 'absolute',
			    'top': '0px',
			    'left': '0px',
			    'width': '100%',
			    'height': '100%'
			});
		big_shrinker.box.prepend($big_shrinker);
		$big_shrinker.hide(5000,function(){
			$(this).remove();
			
			// remove active indicator on deck
			deck.controls.update_addon_running_indicator('big-shrinker',false);

		});
	},
	rotate: function(deg){
		big_shrinker.box.css('-webkit-transform','rotate('+(-1*deg)+'deg)');
	}
}