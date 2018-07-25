// control registry

var controls = {

  // GLOBAL

  pause_play : {
    name: "Pause / Play",
    type: 'button',
    desc: 'Pause or resume the main loop.',
    group: 'global',
    press: function(){
      gifslap.toggle.paused()
    }
  },

  save_preset : {
    name: "Save Preset",
    type: 'button',
    desc: 'Save a preset to load later.',
    group: 'global',
    press: function(){
      deck.presets.save()
    }
  },

  next_image : {
    name: "Next Image",
    type: 'button',
    desc: 'Advance the image cursor by 1.',
    group: 'global',
    press: function(){
      images.next();
    }
  },

  previous_image : {
    name: "Previous Image",
    type: 'button',
    desc: 'Move back the image cursor by 1.',
    group: 'global',
    press: function(){
      images.prev();
    }
  },

  skip_next_gif : {
    name: "Skip Next GIF",
    type: 'button',
    desc: 'Skip the next GIF.',
    group: 'global',
    press: function(){
      images.preview_skip()
    }
  },

  unskip_next_gif : {
    name: "Unskip Next GIF",
    type: 'button',
    desc: 'Unskip the next GIF.',
    group: 'global',
    press: function(){
      images.preview_unskip()
    }
  },

  automation_speed:{
    name: "Automation Speed",
    type: 'knob',
    desc: 'Speed of automation for selected control.',
    option_name: 'control_id_to_automate',
    max: 100,
    initial:100,
    change:function(steps, control_id_to_automate){

      if( steps > 0 ){

        steps = steps * 8

        // register/update the automation
        deck.automator.update_automation_speed(control_id_to_automate,steps)

        // update view of automation
        deck.controls.update_automation_view(control_id_to_automate,1)

      }else{

        // remove the automation
        deck.automator.stop_automation(control_id_to_automate)
        deck.controls.update_automation_view(control_id_to_automate,0)
      }
      
    }
  },

  max_images_amount : {
    name:   'Max Image Amount',
    type:   'knob',
    desc:   'Maximum amount of images allowed on screen. High values slow down the program!',
    group:  'global',
    max:     200,
    initial: 10,
    auto:true,
    change: function( value ){
      images.update.max_images_amount(value)        
    }
  },
  increase_max_images : { // used by autopilot
    name: "Increase Max Images by 1",
    type: 'button',
    desc: 'Increases the max amount of images by 1.',
    group: 'global',
    press: function(){
      controls.max_images_amount.change( state.max_images_amount + 1 )
    }
  },
  decrease_max_images : { // used by autopilot
    name: "Decrease Max Images by 1",
    type: 'button',
    desc: 'Decreases the max amount of images allowed by 1.',
    group: 'global',
    press: function(){
      controls.max_images_amount.change( state.max_images_amount - 1 )
    }
  },

  // IMAGE DIMENSIONS
  height : {
    name: "Height",
    type: 'knob',
    desc: 'Height of the leading image. Adjusts image size proportionately until Width is changed.',
    max: 2000,
    initial:500,
    auto:true,
    group: 'image-manipulation',
    change: function( value ){
      images.update.height(value)      
    }
  },

  shrink_all_images : {
    name: "Shrink All Images",
    type: 'button',
    desc: 'Animates shrinking of all images.',
    group: 'image-manipulation',
    press: function(){
      images.shrink_all();
    }
  },

  image_scale : {
    name: "Image Scale",
    type: 'knob',
    desc: 'Size multiplier for images. Scales from center of image.',
    group: 'image-manipulation',
    max:5,
    initial:1,
    auto:true,
    change: function( value){
      images.update.scale(value)
    }
  },

  reset_scale : {
    name: "Scale Reset",
    type: 'button',
    desc: 'Resets image scale to 1x.',
    group: 'image-manipulation',
    press: function( value, input_type ){
      images.update.scale(1)
    }
  },

  width : {
    name: "Width",
    type: 'knob',
    desc: 'Width of the leading image.',
    group: 'image-manipulation',
    max:2000,
    initial:300,
    auto:true,
    change: function( value ){
      images.update.width(value)
    }
  },

  reset_width : {
    name: "Width Reset",
    type: 'button',
    desc: 'Resets width of the leading image.',
    group: 'image-manipulation',
    press: function( value, input_type ){

      images.update.width('auto')

      images.get_current_size(function(width,height,ratio){
        width_px = Math.round(state.height * ratio)
        // nonstandard way to update slider position independent of state value!
        deck.events.emit( 'sliderUpdate', 'width', width_px )
      })
        
    }
  },

  single_opacity : {
    name: "Opactiy",
    type: 'knob',
    desc: 'Opacity of the leading image.',
    group: 'image-manipulation',
    max:1,
    initial:1,
    auto:true,
    change: function( value ){
      images.update.opacity(value)        
    }
  },

  single_rotate : {
    name: "Single Rotate",
    type: 'knob',
    desc: 'Rotation of the leading image.',
    group: 'image-manipulation',
    max:360,
    initial:360,
    auto:true,
    change: function( value ){
      images.update.rotation(value)        
    }
  },

  toggle_threaded_rotation: {
    name: "Toggle Threaded Rotation",
    type: 'button',
    desc: 'Alternates rotation degrees.',
    group: 'image-manipulation',
    press: function(){
      images.toggle_threaded_rotation();
    }
  },

  border_radius : {
    name: "Border Radius",
    type: 'knob',
    desc: 'Roundness of the leading image\'s corners.',
    group: 'image-manipulation',
    max:50,
    initial:0,
    auto:true,
    change: function( value ){
      images.update.border_radius(value)        
    }
  },
  
  border_image_width : {
    name: "Border Image Width",
    type: 'knob',
    desc: 'Width of the Border Image. The border image is the next image in the list of images, applied as the border of the leading image.',
    group: 'image-manipulation',
    max:100,
    auto:true,
    change: function( value ){
      images.update.border_image_width(value)
    }
  },

  border_image_slices : {
    name: "Border Image Slices",
    type: 'knob',
    desc: 'Controls how many slices of the next image are shown in the Border Image.',
    group: 'image-manipulation',
    max:50,
    auto:true,
    change: function( value ){
      images.update.border_image_slices(value)        
    }
  },

  // BORDER BOXES

  toggle_border_boxes : {
    name: "Toggle Border Boxes",
    type: 'button',
    desc: 'Turn on/off the border boxes addon.',
    group: 'border-boxes',
    press: function(){
      if(border_boxes.run){
        border_boxes.die();
      }else{
        border_boxes.init();
      }
    }
  },

  // WIND
  
  wind_speed_x:{
    name: "Wind Speed X",
    type: 'knob',
    desc: 'Direction of Wind on X-Axis',
    max:128,
    initial: 64,
    change: function( value ){
      wind.update.speed_x(value)
    },
    group:'wind'
  },
  wind_speed_y:{
    name: "Wind Speed Y",
    type: 'knob',
    desc: 'Direction of Wind on Y-Axis',
    max:128,
    initial: 64,
    change: function( value ){
      wind.update.speed_y(value)
    },
    group:'wind'
  },

  wind_speed_reset:{
    name:"Wind Speed Reset",
    type:'button',
    desc:'Reset direction of wind',
    press:function(){
      controls.wind_speed_x.change( controls.wind_speed_x.initial )
      controls.wind_speed_y.change( controls.wind_speed_y.initial )
    },
    group:'wind'
  },

  wind_intensity:{
    name: "Wind Intensity",
    type: 'knob',
    desc: 'Multiplier for Wind Speed',
    max:  10,
    initial: 1,
    auto:true,
    change: function( value ){
      wind.update.intensity(value)
    }
  },
  reset_wind_x : {
    name: "Reset Wind X",
    type: 'button',
    desc: 'Stops wind movement on X-Axis.',
    press: function(){
      wind.x_offset = 0;
    },
    group:'wind'
  },
  reset_wind_y : {
    name: "Reset Wind Y",
    type: 'button',
    desc: 'Stops wind movement on Y-Axis.',
    press: function(){
      wind.y_offset = 0;
    },
    group:'wind'
  },
  wind_direction_up : {
    name: "Wind Direction Up",
    type: 'button',
    desc: 'Blows images upwards.',
    press: function(){

      if( wind.direction !== "up" ){
        wind.direction = "up";
        wind.x_offset = 0;
        wind.y_offset = -15;
      }else{
        wind.y_offset = 0;
        wind.direction = null;
      }
      
    },
    group:'wind'
  },
  wind_direction_left : {
    name: "Wind Direction Left",
    type: 'button',
    desc: 'Blows images to the left.',
    press: function(){
      if(wind.direction!=='left'){
        wind.direction = "left";
        wind.x_offset = -15;
        wind.y_offset = 0;
      }else{
        wind.x_offset = 0;
        wind.direction = null;
      }
    },
    group:'wind'
  },
  wind_direction_down : {
    name: "Wind Direction Down",
    type: 'button',
    desc: 'Blows images downward.',
    press: function(){
      if(wind.direction!=='down'){
        wind.direction = "down";
        wind.x_offset = 0;
        wind.y_offset = 15;
      }else{
        wind.y_offset = 0;
        wind.direction = null;
      }
    },
    group:'wind'
  },
  wind_direction_right : {
    name: "Wind Direction Right",
    type: 'button',
    desc: 'Blows images to the right.',
    press: function(){
      if(wind.direction!=='right'){
        wind.direction = "right";
        wind.x_offset = 15;
        wind.y_offset = 0;
      }else{
        wind.x_offset = 0;
        wind.direction = null;
      }
    },
    group:'wind'
  },

  // MODE CONTROL

  next_mode : {
    name: "Next Mode",
    type: 'button',
    desc: 'Turn off the current mode and activate the next one.',
    group: 'mode-control',
    press: function(){
      mode_changer.step();
    }
  },

  // activate_set : {
  //   name: "Activate Set",
  //   type: 'button',
  //   desc: 'Places the cursor at [0] in the chosen set of images.',
  //   option:{
  //     type:'select',
  //     name:'Set Name:',
  //     list:'sets'
  //   },
  //   press: function(){
      
  //   }
  // },
  // flag_images : {
  //   name: "Flag Images for Deletion",
  //   type: 'button',
  //   desc: 'Moves all onscreen image files to sets/-delete',
  //   press: function(){
  //     image_flagger.run();  
  //   }
  // },
  // save_scene : {
  //   name: "Save Scene",
  //   type: 'button',
  //   desc: 'Save the composition to reactivate later.',
  //   press: function(){
  //     save_out.save_scene();        
  //   }
  // },
  // activate_scene : {
  //   name: "Activate Scene",
  //   type: 'button',
  //   desc: 'Activate a Scene.',
  //   option:{
  //     type:'select',
  //     name:'Scene Name:',
  //     list:'scenes'
  //   },
  //   press: function(){
      
  //   }
  // },
  // save_still : {
  //   name: "Save Still",
  //   type: 'button',
  //   desc: 'Save an HTML copy of the composition. ',
  //   press: function(){
  //     save_out.save_still();
  //   }
  // },

  // CORNERS

  activate_corners_mode : {
    name: "Activate Corners Mode",
    type: 'button',
    group:'corners',
    desc: 'Activates the Corners mode.',
    press: function(){
      mode_changer.start('corners');      
    }
  },

  corners_quadrant_rotation:{
    name: "Rotate Quadrants",
    type: 'knob',
    group: 'corners',
    desc: 'Rotates all four quadrants of Corners mode.',
    auto: true,
    initial: 360,
    max: 360,
    change:function(value){
      corners.update.quads_rotation(value)
    }
  },

  equalize_quadrants : {
    name: "Equalize Quadrants",
    type: 'button',
    group:'corners',
    desc: 'Makes all 4 corners the same size.',
    press: function(){
      corners.equalize_quadrants()
    }
  },

  // CHAIN

  activate_chain_mode : {
    name: "Activate Chain Mode",
    type: 'button',
    group:'chain',
    desc: 'Activates the Chain mode.',
    press: function(){
      mode_changer.start('chain');      
    }
  },
  chain_speed : {
    name:    "Chain Speed",
    type:    'knob',
    group:   'chain',
    desc:    'Changes the speed of the chain movement.',
    max:     20,
    initial: 1,
    auto:true,
    change: function( value ){      
      chain.update.speed(value)      
    }
  },
  
  chain_direction_x : {
    name: "Chain Direction X",
    type: 'knob',
    group:'chain',
    desc: 'Fine control of the X axis of chain movement.',
    max:128,
    initial:64,
    change: function( value ){
      chain.update.direction_x(value)
    }
  },

  chain_direction_y : {
    name: "Chain Direction Y",
    type: 'knob',
    group:'chain',
    desc: 'Fine control of the Y axis of chain movement.',
    max:128,
    initial:64,
    change: function( value ){
      chain.update.direction_y(value)
    }
  },

  chain_direction_reset : {
    name: "Chain Direction Reset",
    type: 'button',
    group:'chain',
    desc: 'Sets chain direction to 0.',
    press: function(){
      chain.reset.direction()
    }
  },

  toggle_chain_reverse_doubler:{
    name:"Toggle Chain Reverse Doubler",
    type:'button',
    group:'chain',
    desc:'Creates a mirror image in chain mode.',
    press:function(){
      chain.toggle.reverse_doubler()
    }
  },

  toggle_chain_remove_by_tail:{
    name:"Toggle Chain Remove By Tail",
    type:'button',
    group:'chain',
    desc:'Toggles between random removal and end-of-tail removal.',
    press:function(){
      chain.toggle.remove_by_tail()
    }
  },

  chain_direction_up : {
    name: "Chain Direction Up",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to up.',
    press: function(){
      
      if(!chain.run){return;}

      // add up to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("up");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("up");
      }

      // remove down
      index_in_array = chain.direction_pressed.indexOf("down");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }
      
    },
    release: function(){

      // remove up from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("up");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  chain_direction_left : {
    name: "Chain Direction Left",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to left.',
    press: function(){
      
      if(!chain.run){return;}

      // remove right
      index_in_array = chain.direction_pressed.indexOf("right");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

      // add left to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("left");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("left");
      }
      
    },
    release: function(){
      
      // remove left from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("left");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  chain_direction_down : {
    name: "Chain Direction Down",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to down.',
    press: function(){
      
      if(!chain.run){return;}

      // remove up
      index_in_array = chain.direction_pressed.indexOf("up");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

      // add down to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("down");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("down");
      }
      
    },
    release: function(){
      
      // remove down from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("down");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  chain_direction_right : {
    name: "Chain Direction Right",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to right.',
    press: function(){

      if(!chain.run){return;}

      // remove left
      index_in_array = chain.direction_pressed.indexOf("left");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

      // add right to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("right");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("right");
      }
      
    },
    release: function(){
      
      // remove right from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("right");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  
  // HALLWAY

  activate_hallway_mode : {
    name: "Activate Hallway Mode",
    type: 'button',
    group:'hallway',
    desc: 'Activates the Hallway mode.',
    press: function(){
      mode_changer.start('hallway');
    }
  },
  hallway_top_bottom_rotation : {
    name: "Hallway Top Bottom Rotation",
    type: 'knob',
    group:'hallway',
    desc: 'Rotates the top and bottom walls of the Hallway.',
    max:180,
    initial:90,
    change: function( value ){
      hallway.update.top_bottom_rotation(value)
    }
  },

  hallway_sides_rotation : {
    name: "Hallway Sides Rotation",
    type: 'knob',
    group:'hallway',
    desc: 'Rotates the sides of the Hallway.',
    max:180,
    initial:90,
    change: function( value ){
      hallway.update.sides_rotation(value)     
    }
  },

  hallway_sides_rotation_reset : {
    name: "Hallway Sides Rotation Reset",
    type: 'button',
    group:'hallway',
    desc: 'Sets hallway sides, top, bottom rotation to 0.',
    press: function(){
      hallway.reset.top_bottom_sides_rotation()
    }
  },

  hallway_origin_divisor: {
    name: "Hallway Stretch",
    type: 'knob',
    group:'hallway',
    desc: 'Intensity of the Hallway warp.',
    max:   100,
    initial: 0,
    auto:true,
    change: function( value ){
      hallway.update.origin_divisor(value)
    }
  },

  hallway_perspective_x : {
    name: "Hallway Perspective X",
    type: 'knob',
    group:'hallway',
    desc: 'Horizontal direction of the hallway perspective.',
    max: 2,
    initial:1,
    change: function( value, input_type ){
      hallway.update.perspective_x(value)
    }
  },
  hallway_perspective_y : {
    name: "Hallway Perspective Y",
    type: 'knob',
    group:'hallway',
    desc: 'Vertical direction of the hallway perspective.',
    max:2,
    initial:1,
    change: function( value, input_type ){
      hallway.update.perspective_y(value)
    }
  },

  hallway_perspective_reset : {
    name: "Hallway Perspective Reset",
    type: 'button',
    group:'hallway',
    desc: 'Resets hallway perspective.',
    press: function(){
      controls.hallway_perspective_x.change( controls.hallway_perspective_x.initial );
      controls.hallway_perspective_y.change( controls.hallway_perspective_y.initial );
      deck.controls.reset_axis_view('hallway_perspective_x');
      deck.controls.reset_axis_view('hallway_perspective_y');
    }
  },

  // MIRROR 

  activate_mirror_mode : {
    name: "Activate Mirror Mode",
    type: 'button',
    group:'mirror',
    desc: 'Activates the Mirror mode.',
    press: function(){
      mode_changer.start('mirror_gif');
      
    }
  },
  mirror_rotation : {
    name: "Mirror Rotation",
    type: 'knob',
    group:'mirror',
    desc: 'Rotates the entire Mirror mode.',
    max: 360,
    initial:0,
    change: function( value ){
      mirror_gif.update.rotation(value)        
    }
  },

  toggle_mirror_vertical_stream : {
    name: "Toggle Grid",
    type: 'button',
    group:'mirror',
    desc: 'Toggles between a vertical-only stream and allowing images to stack side-by-side.',
    press: function(){
      mirror_gif.toggle.grid()
    }
  },
  mirror_image_spacing : {
    name: "Mirror Image Spacing",
    type: 'knob',
    group:'mirror',
    desc: 'Width of the gap between streams, and space between images.',
    max: 200,
    initial: 0,
    auto:true,
    change: function( value ){
      mirror_gif.update.margin(value)        
    }
  },

  // BACKGROUND  

  send_to_background : {
    name: "Send To Background",
    type: 'button',
    group:'background',
    desc: 'Send previewed GIF to background.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ]
      bg_mod.update.source(src)
      controls.skip_next_gif.press()
    }
  },

  background_zoom : {
    name: "Background Zoom",
    type: 'knob',
    group:'background',
    desc: 'Zoom in or out of the background image.',
    max:500,
    initial:50,
    auto:true,
    change: function( value ){
      bg_mod.update.zoom(value)
    }
  },
  background_scroll_speed_x : {
    name: "Background Scroll Speed X",
    type: 'knob',
    group:'background',
    desc: 'Speed of background horizontal scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      bg_mod.update.scroll_speed_x(value)
    }
  },

  background_scroll_speed_y : {
    name: "Background Scroll Speed Y",
    type: 'knob',
    group:'background',
    desc: 'Speed of background vertical scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      bg_mod.update.scroll_speed_y(value)
    }
  },

  background_scroll_reset:{
    name:"Background Scroll Reset",
    type:'button',
    desc:'Turn off background scrolling.',
    press:function(){
      controls.background_scroll_speed_x.change( controls.background_scroll_speed_x.initial );
      controls.background_scroll_speed_y.change( controls.background_scroll_speed_y.initial )
    }
  },
 
  background_opacity : {
    name: "Background Opacity",
    type: 'knob',
    group:'background',
    desc: 'Controls the opacity of the background.',
    max:100,
    initial:0,
    auto:true,
    change: function( value ){
      bg_mod.update.opacity(value)   
    }
  },
  toggle_bg_opacity : {
    name: "Toggle Background Opacity",
    type: 'button',
    group:'background',
    desc: 'Toggles background visibility.',
    press: function(){
      if( state.background_opacity < 0.2 ){
        controls.background_opacity.change(100)
      }else{
        controls.background_opacity.change(0)
      }
    }
  },

  // toggle_bg_zoomer:{
  //   name: "Toggle Background Zoomer",
  //   type: 'button',
  //   group:'background',
  //   press: function(){
  //     bg_mod.zoomer_on = !bg_mod.zoomer_on;
  //   }
  // },
  // add_bg_zoomer:{
  //   name: "Add Background Zoomer",
  //   type: 'button',
  //   group:'background',
  //   press: function(){
  //     bg_mod.zoomer_on = true;
  //     bg_mod.zoomer_add();
  //   }
  // },  


  // MIDGROUND

  send_to_midground : {
    name: "Send To Midground",
    type: 'button',
    group:'background',
    desc: 'Send previewed GIF to midground.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ]
      midground.update.source(src)
      controls.skip_next_gif.press()
    }
  },
  midground_zoom : {
    name: "Midground Zoom",
    type: 'knob',
    group: 'midground',
    desc: 'Zoom in or out of the midground image.',
    max:500,
    initial:50,
    auto:true,
    change: function( value ){
      midground.update.zoom(value)
    }
  },
  midground_scroll_speed_x : {
    name: "Midground Autoscroll Speed X",
    type: 'knob',
    group: 'midground',
    desc: 'Speed of midground horizontal scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      midground.update.scroll_speed_x(value)
    }
  },
  midground_scroll_speed_y : {
    name: "Midground Autoscroll Speed Y",
    type: 'knob',
    group: 'midground',
    desc: 'Speed of midground vertical scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      midground.update.scroll_speed_y(value)
    }
  },
  midground_scroll_reset:{
    name:"Midground Scroll Reset",
    type:'button',
    desc:'Turn off midground scrolling.',
    press:function(){
      controls.midground_scroll_speed_x.change( controls.midground_scroll_speed_x.initial );
      controls.midground_scroll_speed_y.change( controls.midground_scroll_speed_y.initial );
    }
  },
  midground_opacity : {
    name: "Midground Opacity",
    type: 'knob',
    group: 'midground',
    desc: 'Opacity of the midground.',
    max:100,
    auto:true,
    change: function( value ){
      midground.update.opacity(value)
    }
  },
  toggle_midground_opacity : {
    name: "Toggle Midground Opacity",
    type: 'button',
    group: 'midground',
    desc: 'Toggles midground visibility.',
    press: function(){
      if( state.midground_opacity < 0.2 ){
        controls.midground_opacity.change(100)
      }else{
        controls.midground_opacity.change(0)
      }
    }
  },
  
  midground_pos_y : {
    name: "Midground Position Y",
    type: 'knob',
    group: 'midground',
    desc: 'Vertical position of the midground',
    max:200,
    initial:100,
    change: function( value ){
      midground.update.position_y(value)
    }
  },
  midground_pos_x : {
    name: "Midground Position X",
    type: 'knob',
    group: 'midground',
    desc: 'Horizontal position of the midground',
    max:200,
    initial:100,
    change: function( value ){
      midground.update.position_x(value)
    }
  },
  midground_pos_reset:{
    name:"Midground Position Reset",
    type:'button',
    desc:'Reset midground position to center of screen.',
    press:function(){
      controls.midground_pos_x.change( controls.midground_pos_x.initial )
      controls.midground_pos_y.change( controls.midground_pos_y.initial )
    }
  },
  midground_rotation : {
    name: "Midground Rotation",
    type: 'knob',
    group: 'midground',
    desc: 'Rotation of the entire midground',
    max:360,
    initial:0,
    auto:true,
    change: function( value ){
      midground.update.rotation(value)
    }
  },
  midground_scale : {
    name: "Midground Scale",
    type: 'knob',
    group: 'midground',
    desc: 'Scale of the entire midground',
    max:3,
    initial:1,
    auto:true,
    change: function( value ){
      midground.update.scale(value)        
    }
  },
  
  // BIG SHRINKER

  activate_big_shrinker : {
    name: "Activate Big Shrinker",
    type: 'button',
    group: 'big-shrinker',
    desc: 'A giant image appears and shrinks into nothing.',
    press: function(){
      big_shrinker.go()
    }
  },
  
  big_shrinker_rotation : {
    name: "Big Shrinker Rotation",
    type: 'knob',
    group: 'big-shrinker',
    desc: 'Rotate the Big Shrinker image.',
    max:360,
    initial:0,
    auto:true,
    change: function( value ){
      big_shrinker.update.rotation(value)        
    }
  },
  send_preview_to_big_shrinker : {
    name: "Send Preview To Big Shrinker",
    type: 'button',
    group:'big-shrinker',
    desc: 'Send previewed GIF to Big Shrinker.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ]
      big_shrinker.update.source(src)
      controls.skip_next_gif.press()
    }
  },

  // PUNCHER

  activate_puncher:{
    name: "Activate Puncher",
    type: 'button',
    group: 'puncher',
    desc: 'Adds a GIF to the screen that falls down out of view.',
    press: function(){
      puncher.punch();
    }
  },

  send_preview_to_puncher : {
    name: "Send Preview To Puncher",
    type: 'button',
    group:'puncher',
    desc: 'Send previewed GIF to Puncher.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ];
      puncher.set(src);
      controls.skip_next_gif.press();
    }
  },

  puncher_vertical_destination:{
    name: "Puncher Vertical Destination",
    type: 'knob',
    group: 'puncher',
    desc: 'Sets the vertical position that Punch GIFs move to.',
    max: 127,
    change: function( value, input_type ){

      if( input_type == 'knob' ){

        value = ((value/8)*window.innerHeight) - (window.innerHeight*8);

      }else{
        value = (value - ( window.innerHeight * .5 ))*100;
      }

      puncher.vertical_destination = value;

    }
  },

  puncher_horizontal_destination:{
    name: "Puncher Horizontal Destination",
    type: 'knob',
    group: 'puncher',
    desc: 'Sets the horizontal position that Punch GIFs move to.',
    max: 127,
    change: function( value, input_type ){

      // if( input_type == 'knob' ){
        value = ((value/8)*window.innerWidth) - (window.innerWidth*8);
      // }else{
        // value = (value - ( window.innerWidth * .5 ))*100;
      // }

      puncher.horizontal_destination = value;

    }
  },

  // RAINBOW BARS
  
  toggle_rainbow_bars : {
    name: "Toggle Rainbow Bars",
    type: 'button',
    group:'rainbow-bars',
    desc: 'Turn the Rainbow Bars on/off.',
    press: function(){

      if( state.rainbow_bars_opacity < 0.2 ){
        controls.rainbow_bars_opacity.change(100)
      }else{
        controls.rainbow_bars_opacity.change(0)
      }
    }
  },

  rainbow_bars_opacity : {
    name: "Rainbow Bars Opacity",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Opacity of the rainbow bars',
    max:100,
    initial:0,
    auto:true,
    change: function( value ){
      rainbow_bars.update.opacity(value)        
    }
  },
  
  rainbow_bar_width : {
    name: "Rainbow Bar Width",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Width of each Rainbow Bar.',
    max:500,
    initial:33,
    auto:true,
    change: function( value ){
      rainbow_bars.update.bar_width(value)
    }
  },
  rainbow_bar_speed : {
    name: "Rainbow Bars Speed",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Speed of the Rainbow Bars movement.',
    max: 500,
    initial:1,
    auto:true,
    change: function( value ){
      rainbow_bars.update.speed(value)
    }
  },
  rainbow_bar_rotation : {
    name: "Rainbow Bar Rotation",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Rotation of the leading Rainbow Bar.',
    max:180,
    initial:0,
    auto:true,
    change: function( value ){
      rainbow_bars.update.rotation(value)
    }
  },

  // CIRCLE

  activate_circle_mode : {
    name: "Activate Circle Mode",
    type: 'button',
    group:'circle',
    desc: 'Activates the Circle mode.',
    press: function(){
      mode_changer.start('circle');
    }
  },

  toggle_circle_size_lock : {
    name: "Toggle Circle Size Lock",
    type: 'button',
    group:'circle',
    desc: 'Prevent or allow the size/opacity of the leading circle image to change.',
    press: function(){
      circle.toggle.size_lock()
    }
  },

  circle_container_spin_speed : {
    name: "Circle Container Spin Speed",
    type: 'knob',
    group:'circle',
    desc: 'Rotation speed of the entire Circle mode.',
    max:1,
    initial:0.25,
    auto:true,
    change: function( value ){
      circle.update.container_spin_speed(value)
    }
  },

  circle_spin_speed : {
    name: "Circle Images Spin Speed",
    type: 'knob',
    group:'circle',
    desc: 'Rotation speed of the images in the Circle mode.',
    max:1,
    initial:0.25,
    auto:true,
    change: function( value ){
      circle.update.spin_speed(value)
    }
  },
  
  // CENTER MODE
  
  activate_center_mode : {
    name: "Activate Center Mode",
    type: 'button',
    group: 'center',
    desc: 'Activates the Center mode.',
    press: function(){
      mode_changer.start('center_pix');
    }
  },

  center_horizontal_arc:{
    name: "Center Horizontal Arc",
    type: "knob",
    group: "center",
    desc: 'Creates a horizontal arc in Center Mode.',
    max:100,
    initial:50,
    change: function(value,input_type){
      center_pix.update.horizontal_arc(value)
    }
  },

  center_vertical_arc:{
    name: "Center Vertical Arc",
    type: "knob",
    group: "center",
    desc: 'Creates a vertical arc in Center Mode.',
    max:100,
    initial:50,
    change: function(value,input_type){
      center_pix.update.vertical_arc(value)
    }
  },

  center_arc_reset:{
    name: "Reset Center Arcs",
    type: "button",
    group: "center",
    desc: "Resets arcs and centers all images in Center Mode.",
    press: function(){
      if( !center_pix.run ){ return }
      controls.center_horizontal_arc.change( controls.center_horizontal_arc.initial )
      controls.center_vertical_arc.change( controls.center_vertical_arc.initial )
    }
  },

  // CORNER BOX

  toggle_corner_box : {
    name: "Toggle Corner Box",
    type: 'button',
    group: 'corner-box',
    desc: 'Turns on/off the corner box.',
    press: function(){
      if( state.corner_box_opacity < 0.2 ){
        controls.corner_box_opacity.change(100)
      }else{
        controls.corner_box_opacity.change(0)
      }
    }
  },
  send_preview_to_corner_box : {
    name: "Send Preview To Corner Box",
    type: 'button',
    group:'corner-box',
    desc: 'Send previewed GIF to Corner Box.',
    press: function(){
      corner_box.set_from_preview()
    }
  },
  corner_box_opacity : {
    name: "Corner Box Opacity",
    type: 'knob',
    group:'corner-box',
    desc: 'Controls the opacity of the corner box.',
    max:100,
    initial:0,
    auto:true,
    change: function( value ){
      corner_box.update.opacity(value)
    }
  },
  corner_box_size : {
    name: "Corner Box Size",
    type: 'knob',
    group:'corner-box',
    desc: 'Controls the size of the corner box.',
    max:100,
    initial:30,
    auto:true,
    change: function( value ){
      corner_box.update.size(value)
    }
  },
  corner_box_position_x : {
    name: "Corner Box Position X",
    type: 'knob',
    group:'corner-box',
    desc: 'Moves the corner box horizontally.',
    max:100,
    initial:0,
    change: function( value ){
      corner_box.update.position_x(value)
    }
  },
  corner_box_position_y : {
    name: "Corner Box Position Y",
    type: 'knob',
    group:'corner-box',
    desc: 'Moves the corner box vertically.',
    max:100,
    initial:0,
    change: function( value ){
      corner_box.update.position_y(value)
    }
  },
  corner_box_position_reset :{
    name:"Corner Box Position Reset",
    type:'button',
    group:'corner-box',
    desc:'Reset corner box position.',
    press:function(){
      corner_box.update.position_x( controls.corner_box_position_x.initial );
      corner_box.update.position_y( controls.corner_box_position_y.initial );
      deck.controls.reset_axis_view('corner_box_position_x');
      deck.controls.reset_axis_view('corner_box_position_y');
    }
  },

  // AUTOPILOT

  toggle_autopilot : {
    name: "Toggle Autopilot",
    type: 'button',
    desc: 'Turns on/off autopilot.',
    group: 'autopilot',
    press: function(){
      autopilot.toggle()
    }
  },
  // tap_tempo : {
  //   name: "Tap Tempo",
  //   type: 'button',
  //   desc: 'Tap repeatedly to define the tempo for certain modes. (Autopilot)',
  //   press: function(){
  //     bpm_sync.tap_for_bpm();
  //   }
  // },

  // WINDOW
  
  // take_screenshot : {
  //   name: "Take Screenshot",
  //   type: 'button',
  //   desc: 'Takes a screensot, saved to the user folder.',
  //   group: 'window',
  //   press: function(){
  //     gifslap.take_screenshot();
  //   }
  // },

  refresh : {
    name: "Refresh Page",
    type: 'button',
    desc: 'Refresh the browser',
    group: 'window',
    press: function(){
      deck.controls.suspend()
      localStorage.refreshing = true
      location.reload()
    }
  },
  zoom_in : {
    name: "Zoom In",
    type: 'button',
    desc: 'Zooms page, increases performance.',
    group: 'window',
    press: function(){
      if( state.zoom_level >= 9 ) return
      gifslap.update.zoom( state.zoom_level + 1 )
    }
  },
  zoom_out : {
    name: "Zoom Out",
    type: 'button',
    desc: 'Zooms page out, but can decrease performance.',
    group: 'window',
    press: function(){
      if( state.zoom_level <= -7 ) return
      gifslap.update.zoom( state.zoom_level - 1 )
    }
  },
  zoom_level:{
    name: "Zoom Level",
    type: 'knob',
    group:'window',
    desc: 'Changes the zoom amount',
    max:20,
    initial:0,
    change: function( value ){
      gifslap.update.zoom( value )
    }
  },
  reset_zoom : {
    name: "Reset Zoom",
    type: 'button',
    desc: 'Sets zoom level to 0',
    group: 'window',
    press: function(){
      gifslap.update.zoom( 0 )
    }
  },

  // MIDI

  send_midi : {
    name: "Send MIDI Signals",
    type: 'button',
    desc: 'Send MIDI signals out. One signal per line. Format: 144,10,127',
    group: 'MIDI',
    options:{
      1:{
        type:'textarea',
        id:'signal',
        placeholder:'One signal per line. Example:\n144,10,127'
      }
    },
    press: function(options){
      if(!options){return}
      midi_signals = options.signal.split('\n');
      midi_signals.forEach(function( midi_signal ){
        midi_bytes = midi_signal.split(',');
        midi.out( midi_bytes[0], midi_bytes[1], midi_bytes[2]);
      });
    }
  },

  // WEBCAM

  toggle_webcam: {
    name: "Toggle Webcam",
    type: 'button',
    desc: 'Turns webcam on or off',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){
        webcam.init();
      }else{
        webcam.die();
      }
    }
  },

  next_webcam_input: {
    name: "Next Webcam Input",
    type: 'button',
    desc: 'Switches to the next available webcam',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      webcam.next_input()
    }
  },

  send_webcam_to_corner_box: {
    name: "Send Webcam to Corner Box",
    type: 'button',
    desc: 'Sets webcam as corner box image',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      corner_box.toggle_webcam();
    }
  },

  send_webcam_to_background: {
    name: "Send Webcam to Background",
    type: 'button',
    desc: 'Sets webcam as background',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      bg_mod.toggle_webcam();
    }
  },

  send_webcam_to_foreground: {
    name: "Send Webcam to Foreground",
    type: 'button',
    desc: 'Sets webcam as foreground',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      images.toggle_webcam();
    }
  },

  // toggle_midi : {
  //   name: "Toggle MIDI",
  //   type: 'button',
  //   desc: 'Sends one of two MIDI signals, alternating when pressed. Used to light up or turn off LEDs on MIDI controllers. One signal per line. Requires exactly two lines. Format: 144,10,127',
  //   options:{
  //     1:{
  //       type:'textarea',
  //       id:'toggle_signals',
  //       placeholder:'One signal per line. Example:\n144,10,127\n144,10,0'
  //     }
  //   },
  //   press: function(options, input_id){
  //     if(!options){return}
  //     midi_signals = options.signal.split('\n');
  //     midi_signals.forEach(function( midi_signal ){
  //       midi_bytes = midi_signal.split(',');
  //       midi.out( midi_bytes[0], midi_bytes[1], midi_bytes[2]);
  //     });
  //   }
  // },

  // depracated

  hallway_layer_width : {
    name: "Hallway Layer Width",
    type: 'knob',
    group:'hallway',
    desc: 'Deprecated: Controls width of hallway top/bottom images.',
    max:100,
    initial:100,
    change: function( value ){
    }
  },
  hallway_layer_height : {
    name: "Hallway Layer Height",
    type: 'knob',
    group:'hallway',
    desc: 'Deprecated: Controls height of hallway side images.',
    max:100,
    initial:100,
    change: function( value ){
    }
  },
  
  // renamed the following sliders for v0.8.0

  single_height : {
    change: function( value ){
      controls.height.change(value)
    }
  },

  single_width : {
    change: function( value ){
      controls.width.change(value)
    }
  },

  rotate_quads:{
    change:function(value){
      controls.corners_quadrant_rotation.change(value)
    }
  },

}