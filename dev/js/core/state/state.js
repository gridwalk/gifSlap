var Emitter = require('eventemitter3')
var events = new Emitter()

// updates state and emits an event for the deck to update UI
// animation modules should just read state to render frames
// control_type can be
// slider
// xy
// toggle
// null (no UI representation)
var updateState = function( control_type, control_id, value ){
  state[control_id] = value
  eventName = control_type+'Update'
  events.emit(eventName,control_id,value)
}

var updateIndicatorState = function( control_id, value ){
  if( state[control_id] == value ){ return }
  state[control_id] = value
  events.emit('indicatorUpdate',control_id,value)
}

var updateStateString = function(state_id, stateString) {
  if( state[state_id] == stateString ){ return }
  state[state_id] = stateString
}

var state = {
  
  // overall
  paused: false,
  current_mode:'chain',
  autopilot_run: false,
  zoom_level: 0,
  current_gif_src:'',
  next_gif_src:'',

  // global sliders
  max_images_amount:10,
  height:500,
  width:'auto',
  image_scale:1,
  single_opacity:1,
  single_rotate:360,
  border_radius:0,
  border_image_width:0,
  border_image_slices:0,

  // global toggles
  border_image_on:false,

  // chain sliders
  chain_speed:1,

  // chain xy
  chain_direction_x:60,
  chain_direction_y:60,
  chain_pos_x:0,
  chain_pos_y:0,

  // chain toggles
  chain_reverse_doubler_on:false,
  chain_remove_by_tail_on:false,

  // corners sliders
  corners_quadrant_rotation:0,

  //hallway sliders
  hallway_origin_divisor:0,

  // hallway xy
  hallway_top_bottom_rotation:90,
  hallway_sides_rotation:90,
  hallway_perspective_x:1,
  hallway_perspective_y:1,

  // mirror sliders
  mirror_rotation:0,
  mirror_image_spacing:0,

  // mirror toggles
  mirror_grid_on:false,

  // circle sliders
  circle_container_spin_speed:0.5,
  circle_spin_speed:0.25,

  // circle toggles
  circle_size_lock_on:false,

  // center xy
  center_horizontal_arc:50,
  center_vertical_arc:50,

  // corner box 
  corner_box_src:'',
  corner_box_opacity:0,
  corner_box_size:30,
  corner_box_position_x:0,
  corner_box_position_y:0,
  corner_box_run:false,

  // wind
  wind_speed_x:64,
  wind_speed_y:64,
  wind_intensity:1,
  wind_run:false,

  // background
  background_src:'',
  background_zoom:null,
  background_opacity:0,
  background_scroll_speed_x:10,
  background_scroll_speed_y:10,
  background_run:false,

  // midground
  midground_src:'',
  midground_zoom:1,
  midground_opacity:0,
  midground_scroll_speed_x:10,
  midground_scroll_speed_y:10,
  midground_pos_x: 100,
  midground_pos_y: 100,
  midground_rotation: 0,
  midground_scale: 1,
  midground_run:false,

  // big shrinker
  big_shrinker_src:'',
  big_shrinker_rotation:0,

  // rainbow bars
  rainbow_bars_run: false,
  rainbow_bars_opacity: 0,
  rainbow_bar_width: 33,
  rainbow_bar_speed: 0,
  rainbow_bar_rotation: 90,

  // automations
  automations:[]

}

loadState = function(newState){

  // change to selected mode  
  main.mode_changer.start(newState.current_mode)

  // load gif sources
  main.images.active_set[main.images.cursor] = newState.current_gif_src
  main.corner_box.update.source(newState.corner_box_src)
  main.bg_mod.update.source(newState.background_src)

  // load next gif into preview
  main.images.active_set[controls.get_next_gif_index()] = newState.next_gif_src
  controls.update_next_gif()

  // step through each param

  for (var key in newState) {

    // skip loop if the property is from prototype
    if (!newState.hasOwnProperty(key)) continue

    // if value is a number run the associated control function in control_registry
    // this will update state everywhere and run any functions that require running to display correctly
    // if value is not a number just assign it to state
    
    if( typeof(newState[key]) == 'number' && main.controls[key] ){
      main.controls[key].change(newState[key])
    }else{
      state[key] = newState[key]
    }

    // automations
    if( key == 'automations' ){
      for (var i = newState.automations.length - 1; i >= 0; i--) {
        automator.saveSliderElements(newState.automations[i].control_id)
      }
      
    }
  }

  // special cases for certain controls

  // if background zoom is null, clear out current background zoom
  if( newState.background_zoom == null ) main.bg_mod.reset.zoom()

}