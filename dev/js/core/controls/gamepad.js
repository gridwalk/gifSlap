var gamepadSupport = {
  TYPICAL_BUTTON_COUNT: 16,
  TYPICAL_AXIS_COUNT: 4,
  ticking: false, // Whether we’re requestAnimationFrameing like it’s 1999.

  // The canonical list of attached gamepads, without “holes” (always starting at [0])
  gamepads: [],

  // Remembers the connected gamepads at the last check; used 
  // to figure out when gamepads get connected or disconnected, since no
  // events are fired.
  prevRawGamepadTypes: [],

  // Previous timestamps for gamepad state; used to not bother with
  // analyzing the polled data if nothing changed (timestamp is the same as last time).
  prevTimestamps: [],

  /**
   * Initialize support for Gamepad API.
   */

  init: function() {
    
    gamepadSupport.startPolling();    
    
  },

  /*
  * Starts a polling loop to check for gamepad state.
  */
  startPolling: function() {
    // Don’t accidentally start a second loop, man.
    if (!gamepadSupport.ticking) {
      gamepadSupport.ticking = true;
      gamepadSupport.tick();
    }
  },

  /**
   * Stops a polling loop by setting a flag which will prevent the next
   * requestAnimationFrame() from being scheduled.
   */
  stopPolling: function() {
    gamepadSupport.ticking = false;
  },

  /**
   * A function called with each requestAnimationFrame(). Polls the gamepad
   * status and schedules another poll.
   */
  tick: function() {
    gamepadSupport.pollStatus();
    gamepadSupport.scheduleNextTick();
  },

  scheduleNextTick: function() {
    // Only schedule the next frame if we haven’t decided to stop via
    // stopPolling() before.
    if (gamepadSupport.ticking) {
      window.requestAnimationFrame(gamepadSupport.tick);
    }
  },

  /**
   * Checks for the gamepad status. Monitors the necessary data and notices
   * the differences from previous state (buttons for Chrome/Firefox,
   * new connects/disconnects for Chrome). If differences are noticed, asks
   * to update the display accordingly. Should run as close to 60 frames per
   * second as possible.
   */
  pollStatus: function() {
    // Poll to see if gamepads are connected or disconnected. Necessary
    // only on Chrome.
    gamepadSupport.pollGamepads();

    for (var i in gamepadSupport.gamepads) {
      var gamepad = gamepadSupport.gamepads[i];

      // Don’t do anything if the current timestamp is the same as previous
      // one, which means that the state of the gamepad hasn’t changed.
      // This is only supported by Chrome right now, so the first check
      // makes sure we’re not doing anything if the timestamps are empty
      // or undefined.
      if (gamepad.timestamp && (gamepad.timestamp == gamepadSupport.prevTimestamps[i])) {
        continue;
      }

      gamepadSupport.prevTimestamps[i] = gamepad.timestamp;
      gamepadSupport.updateDisplay(i);
    }
  },

  // This function is called only on Chrome, which does not yet support
  // connection/disconnection events, but requires you to monitor
  // an array for changes.
  pollGamepads: function() {
    
    // Get the array of gamepads – the first method (getGamepads)
    // is the most modern one and is supported by Firefox 28+ and
    // Chrome 35+. The second one (webkitGetGamepads) is a deprecated method
    // used by older Chrome builds.
    var rawGamepads =
        (navigator.getGamepads && navigator.getGamepads() );

    if (rawGamepads) {
      // We don’t want to use rawGamepads coming straight from the browser,
      // since it can have “holes” (e.g. if you plug two gamepads, and then
      // unplug the first one, the remaining one will be at index [1]).
      gamepadSupport.gamepads = [];

      // We only refresh the display when we detect some gamepads are new
      // or removed; we do it by comparing raw gamepad table entries to
      // “undefined.”
      var gamepadsChanged = false;

      for (var i = 0; i < rawGamepads.length; i++) {
        if (typeof rawGamepads[i] != gamepadSupport.prevRawGamepadTypes[i]) {
          gamepadsChanged = true;
          gamepadSupport.prevRawGamepadTypes[i] = typeof rawGamepads[i];
        }

        if (rawGamepads[i]) {
          gamepadSupport.gamepads.push(rawGamepads[i]);
        }
      }

      // Ask the tester to refresh the visual representations of gamepads
      // on the screen.
      if (gamepadsChanged) {
        // amount of gamepads plugged in has changed

      }
    }
  },

  // run functions based on control states

  updateDisplay: function(gamepadId) {

    var gamepad = gamepadSupport.gamepads[gamepadId];

    
    if(gamepad.buttons){
     

      if(gamepad.buttons[0].pressed){ // A
        console.log('a')

       if(chain.run){

          controls.height.change( state.height - 10 )
          
          if (state.height <= 10){
            controls.height.change(300)
          }

          if( state.height > 50 ){ 
            controls.max_images_amount.change(170)
          }
          if( state.height > 100 ){ 
            controls.max_images_amount.change(100)
          }
          if( state.height > 200 ){ 
            controls.max_images_amount.change(50)            
          }
          if( state.height > 300 ){
            controls.max_images_amount.change(45)            
          }
        }

        if( mirror_gif.run ){
          controls.toggle_mirror_vertical_stream.press()
        }

        if( corners.run ){
          if( state.border_radius == 500 ){
            images.update.border_radius(0)            
          }else{
            images.update.border_radius(50)
            controls.width.change(state.height)
          }
        }

        if( hallway.run ){
          hallway.update.origin_divisor( (state.hallway_origin_divisor + 10) % controls.hallway_origin_divisor.max )
        }

      }
      
      if(gamepad.buttons[1].pressed){ // B
       console.log('b')

       if(chain.run){
          controls.height.change( state.height + 10)
          
          if( state.height > 300){
            controls.height.change(10)
          }

          if( state.height > 50 ){
            controls.max_images_amount.change(200)
          }
          if( state.height > 100 ){ 
            controls.max_images_amount.change(100)            
          }
          if( state.height > 200 ){ 
            controls.max_images_amount.change(50)            
          }
          if( state.height > 300 ){ 
            controls.max_images_amount.change(45)            
          }
        }

        if( mirror_gif.run ){
          mirror_gif.toggle.grid()
        }

        if( corners.run ){
          if( state.border_radius == 500 ){
            images.update.border_radius(0)
          }else{
            images.update.border_radius(50)
            controls.width.change(state.height)
          }
        }

        if( hallway.run ){
          newDivisor = state.hallway_origin_divisor - 10
          if( newDivisor < 0 ){ newDivisor = controls.hallway_origin_divisor.max }
          hallway.update.origin_divisor( newDivisor )
        }


      }

      if(gamepad.buttons[2].pressed){ // X
        console.log('x')

        rotation_value = state.single_rotate - 5
        if( rotation_value < 0 ){ rotation_value = 360 + rotation_value }
        images.update.rotation( rotation_value )

        if( hallway.run ){
          hallway.update.origin_divisor( (state.hallway_origin_divisor + 20) % controls.hallway_origin_divisor.max )
        }

      }

      if(gamepad.buttons[3].pressed){ // Y
        console.log('y')
        
        rotation_value = (state.single_rotate + 5)%360        
        images.update.rotation( rotation_value )

        if( hallway.run ){
          newDivisor = state.hallway_origin_divisor - 20
          if( newDivisor < 0 ){ newDivisor = controls.hallway_origin_divisor.max }
          hallway.update.origin_divisor( newDivisor )
        }

      }

      

      if(gamepad.buttons[4].pressed){ // left bumper
            console.log('l bump')
            images.prev();
          }



      if(gamepad.buttons[5].pressed){ // right bumper
          console.log('r bump')
          images.next();
        }

      if(gamepad.buttons[6].pressed){ // left trigger
        console.log('l trig')
        if( bg_mod.box.css('opacity') == 0 ){
          bg_mod.next();
          bg_mod.show();
        }else{
          bg_mod.clear();
        }
        
      }

      if(gamepad.buttons[7].pressed){ // right trigger
        console.log('r trig')
        bg_mod.next();
        
      }

      

      // PAUSE
      if( gamepad.buttons[9].pressed){
        console.log('pause')

        if(chain.run){
          mode_changer.start('mirror_gif');
        }else if(mirror_gif.run){
          mode_changer.start('corners');
        }else if(corners.run){
          mode_changer.start('hallway');
        }else if(hallway.run){
          mode_changer.start('chain');
        }

      }

      // next mode
      if( gamepad.buttons[8].pressed){
        console.log('select')
        if(chain.run){
          mode_changer.start('mirror_gif');
        }else if(mirror_gif.run){
          mode_changer.start('corners');
        }else if(corners.run){
          mode_changer.start('hallway');
        }else if(hallway.run){
          mode_changer.start('chain');
        }
        

      }

      // D PAD
      if(gamepad.buttons[12].pressed){ // up
        console.log('up');

        if( chain.run ){
          controls.chain_direction_up.press();
          setTimeout(function(){
            controls.chain_direction_up.release();
          },100);
        }

        if( mirror_gif.run ){
          controls.height.change( state.height - 10 )
          
          if( state.height <= 10 ){
            controls.height.change( 100 )
          }

        }

        if( corners.run ){
          images.update.scale( +(state.image_scale + 0.1).toFixed(2) )
          if( state.image_scale > 2 ){ 
            images.update.scale(0.1)
          }
        }

      }
      if(gamepad.buttons[13].pressed){ // down
        console.log('down')
        if( chain.run ){
          controls.chain_direction_down.press();
          setTimeout(function(){
            controls.chain_direction_down.release();
          },100);
        }

        if( mirror_gif.run ){
          controls.height.change( state.height + 10 )
          if( state.height >= 100 ){
            controls.height.change(10)
          }
        }

        if( corners.run ){
          images.update.scale( +(state.image_scale - 0.1 ).toFixed(2) )
          if( state.image_scale <= 0 ){ 
            images.update.scale(2)
          }
        }
        
      }
      if(gamepad.buttons[15].pressed){ // right
        console.log('right')
        if( chain.run ){
          controls.chain_direction_right.press();
          setTimeout(function(){
            controls.chain_direction_right.release();
          },100);
        }

        if( mirror_gif.run ){
          if( state.width == "auto" ){ controls.width.change(200) }
          controls.width.change(state.width + 10)
        }

        if( corners.run ){
          images.update.scale( +(state.image_scale + 0.1).toFixed(2) )
          if( state.image_scale > 2 ){ 
            images.update.scale(0.1)
          }
        }

      }
      if(gamepad.buttons[14].pressed){ // left
        console.log('left')
        if( chain.run ){
          controls.chain_direction_left.press();
          setTimeout(function(){
            controls.chain_direction_left.release();
          },100);
        }

        if( mirror_gif.run ){
          if( state.width == "auto" ){ controls.width.change(200) }
          controls.width.change(state.width - 10)
          if( state.width <= 10 ){ controls.width.change(200) }
        }

        if( corners.run ){
          images.update.scale( +(state.image_scale - 0.1).toFixed(2))
          if( state.image_scale <= 0 ){ 
            images.update.scale(2)
          }
        }
      }

      // analog stick press in
      if(gamepad.buttons[10].pressed){
        console.log(' L stick press')
        chain.update.direction_x(0)
        chain.update.direction_y(0)
        
      }
      if(gamepad.buttons[11].pressed){
        console.log(' R stick press')
        wind.x_offset = 0;
        wind.y_offset = 0;
        
      }

    }
    
    // Update all the analog sticks.
    if(gamepad.axes){
                
      // console.log(gamepad.axes[0],gamepad.axes[1]);
      // console.log(gamepad.axes[2],gamepad.axes[3]);
          

      if( chain.run){

        directionX = ((gamepad.axes[0] + 1) * controls.chain_direction_x.max/2).toFixed(2)
        directionY = ((gamepad.axes[1] + 1) * controls.chain_direction_y.max/2).toFixed(2)

        chain.update.direction_x( directionX )
        chain.update.direction_y( directionY )

      }

      if( chain.run || mirror_gif.run ){
        wind_x = gamepad.axes[2] * 25;
        wind_y = gamepad.axes[3] * 25;

        if( ( wind_x > 5 || wind_x < -5 ) || ( wind_y > 5 || wind_y < -5 ) ){
          wind.run = true;
          wind.x_offset = wind_x;
          wind.y_offset = wind_y;
        }else{
          wind.x_offset = 0;
          wind.y_offset = 0;
        }
      }


      if( mirror_gif.run ){

        

        rotation_value = (Math.floor(state.single_rotate + (gamepad.axes[3] * 10)))%360
        if(rotation_value < 0){ rotation_value = 360 }

        images.update.rotation( rotation_value )

        width = Math.round(state.width + (gamepad.axes[0]*10))
        controls.width.change(width)

        if( gamepad.axes[0] == -1 ){ controls.width.change(state.width-1) }
        if( gamepad.axes[0] == 1 ){ controls.width.change(state.width+1) }

        
      }

      if( corners.run ){

        width = Math.round(state.width + (gamepad.axes[0]*10))
        controls.width.change(width)

        if( gamepad.axes[0] == -1 ){ controls.width.change(state.width + 5) }
        if( gamepad.axes[0] == 1 ){ controls.width.change(state.width - 5) }

        height = Math.round(state.height + (gamepad.axes[1]*10))
        controls.height.change( height )

        if( gamepad.axes[1] == -1 ){ controls.height.change( state.height + 5 ) }
        if( gamepad.axes[1] == 1 ){ controls.height.change( state.height - 5 ) }

        wind_x = gamepad.axes[2] * 50;
        wind_y = gamepad.axes[3] * 50;
        if( ( wind_x > 5 || wind_x < -5 ) || ( wind_y > 5 || wind_y < -5 ) ){

          if( wind_x < 0 ){ wind_x = wind_x * -1 }
          if( wind_y < 0 ){ wind_y = wind_y * -1 }

          wind.run = true;
          wind.x_offset = wind_x;
          wind.y_offset = wind_y;
        }else{
          wind.x_offset = 0;
          wind.y_offset = 0;
        }

      }
    
      if( hallway.run ){

        // hallway_perspective_x_joystick = (gamepad.axes[0]*200)+ 100;
        // controls.hallway_perspective_x.change( hallway_perspective_x_joystick, 'gamepad' );

        // hallway_perspective_y_joystick = (gamepad.axes[1]*200)+ 100;
        // controls.hallway_perspective_y.change( hallway_perspective_y_joystick, 'gamepad' );

        hallway.update.perspective_x( state.hallway_perspective_x + gamepad.axes[0]*.10 )
        hallway.update.perspective_y( state.hallway_perspective_y + gamepad.axes[1]*.10 )

        hallway.update.sides_rotation( state.hallway_sides_rotation + gamepad.axes[2]*10 )
        hallway.update.top_bottom_rotation( state.hallway_top_bottom_rotation + gamepad.axes[3]*10 )
        
      }
    }
  }
}


if( localStorage.gamepad == 'true' ){
  gamepadSupport.init();
}