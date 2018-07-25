

// START THE LOOP!!!
run_loop = function(){

  // MIDI listen
  deck.midi.listen();

  // do nothing if gifSlap is paused
  if ( state.paused == true ){
    requestAnimationFrame(run_loop);
    return;
  }

  framerate.update();

  // Addons
  rainbow_bars.draw();
  wind.draw();  
  bg_mod.draw();
  midground.draw();
  
  // Modules
  hallway.draw();
  mirror_gif.draw();
  center_pix.draw();
  circle.draw();  
  chain.draw();
  border_boxes.draw();
  corners.draw();
  
  // Autopilot
  autopilot.modify_params();
  autopilot.draw();

  // Automator
  deck.automator.draw();

  requestAnimationFrame(run_loop);
};

// kick off the loop once the deck has loaded
var loop_waiting = setInterval(function(){

  if( deck !== null ){

    // establish connection to state
    state = deck.state

    // reveal the deck
    deck.deck.win.show();

    // clear the loading message
    $('#loading').remove();

    // kick off the loop
    requestAnimationFrame(run_loop)
    clearInterval(loop_waiting)   

    // save the current gif to state
    deck.updateState( null, 'current_gif_src', images.active_set[images.cursor] )

  }

},100);


// Functions to run on the BPM
bpm_sync.run_on_beat = function(){

  bpm_sync.show_bpm_indicator();
  autopilot.draw();
  bg_mod.zoomer_add();

};