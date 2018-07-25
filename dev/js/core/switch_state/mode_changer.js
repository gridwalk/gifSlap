mode_changer = {
	current: 0,
	modes:['chain','corners','hallway','circle','mirror_gif','center_pix'],
	kill_all: function(){
		
    images.clear()
    chain.stop()
    hallway.stop()
    circle.stop()
    mirror_gif.stop()
		corners.stop()
		center_pix.stop()
		
	},
	step: function(){

		// don't change mode when paused
		if( state.paused ){ return }

		mode_changer.current++;

		if(mode_changer.current == mode_changer.modes.length){ 
			mode_changer.current = 0;
		}

		mode_changer.start( mode_changer.modes[mode_changer.current] );
	},
	start:function(mode){

		// don't change if the mode is already on
		if( state.current_mode == mode ){ return }

		state.current_mode = mode
		mode_changer.kill_all();
		switch (mode) {
	    case 'circle':
          circle.init()
          deck.controls.activate_bank( 'circle' )
          autopilot.turn_off()
      break;
	    case 'chain':
          chain.init()
          deck.controls.activate_bank( 'chain' )
      break;
	    case 'hallway':
      		deck.controls.activate_bank( 'hallway' )
          hallway.init()
          autopilot.turn_off()
      break;
	    case 'mirror_gif':
    	   	deck.controls.activate_bank( 'mirror' )
          mirror_gif.init()
          autopilot.turn_off()
      break;
	    case 'corners':
          corners.init()
    	    deck.controls.activate_bank( 'corners' )
    	 	  autopilot.turn_off()
          controls.equalize_quadrants.press()
      break;
	    case 'center_pix':
    	    deck.controls.activate_bank( 'center' )
          center_pix.init()
          autopilot.turn_off()
      break;
		}
	}
}