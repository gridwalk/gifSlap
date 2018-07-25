var automator = {
  // 
  // state.automations:[
  //   {
  //     control_id:"chain_speed",
  //     cursor:0,
  //     cursor_moves:1,
  //     steps:600,
  //     wave:'tri',
  //     current_value: 100,
  //     max: 100
  //   }
  // ],

  // used to hold DOM element references, rather than keep them in state
  sliderElements:[],

  get_automation_by_control_id:function(control_id){
    automation = state.automations.filter(function(automation){
      return automation.control_id == control_id;
    });
    return automation[0];
  },
  update_automation_speed: function(control_id, steps){

    automation = automator.get_automation_by_control_id(control_id)

    // if this automation exits, update it    
    if( automation !== undefined ){
      automation.steps = steps

      if( automation.cursor > steps ){
        automation.cursor = steps
      }

      return
    }

    // otherwise register the automation
    automator.register(control_id,steps)

  },

  // saves references to slider dom elements
  // also called in loadState
  saveSliderElements:function(control_id){
    automator.sliderElements[control_id] = {
      $slider:                $('[control-id='+control_id+']'),
      $slider_auto_indicator: $('[control-id='+control_id+'] .slider-auto-bar'),
      $slider_value:          $('[control-id='+control_id+'] .slider-value')
    }
  },
  
  register:function(control_id,steps){

    $automation_button = $('.auto-button[automation-control-id='+control_id+']')

    // get the wave from the DOM
    wave = $automation_button.attr('wave')

    automator.saveSliderElements(control_id)

    automation = {
      control_id: control_id,
      wave: wave,
      steps:steps,
      cursor:0,
      cursor_moves:1,
      current_value:0
    }

    state.automations.push(automation)

    // activate the automation indicator
    $automation_button.addClass('active')

  },
  stop_all:function(){
    state.automations.forEach(function(automation){
      automator.stop_automation(automation.control_id);
    });
  },
  stop_automations:function(control_ids_array){
    control_ids_array.forEach( function(control_id){
      automator.stop_automation(control_id)
      // turn off the button and automation slider
      $('[automation-control-id='+control_id+']').removeClass('active')
    })
  },
  stop_automation:function(control_id){

    // locate the object within the array of automations
    for (var i = 0; i < state.automations.length; i++) {
      if (state.automations[i].control_id === control_id) {

        auto = state.automations[i]
        sliderElements = automator.sliderElements[auto.control_id]

        // set the slider value to the automation's current value
        percent = (auto.current_value / main.controls[control_id].max) * 100
        sliderElements.$slider.find('.slider-value').html( Math.floor(auto.current_value) )
        sliderElements.$slider.find('.slider-bar').css('width', percent+"%")

        // reset the automation speed slider width
        
        sliderElements.$slider.siblings('.auto-speed-slider').width('100%')

        // now remove that object
        state.automations.splice(i, 1);


      }
    }
  },
  draw:function(){

    state.automations.forEach(function( auto ){

      control_id = auto.control_id
      control = main.controls[control_id]

      sliderElements = automator.sliderElements[auto.control_id]

      // get max value from slider
      max_value = sliderElements.$slider_value.text()
      // Sine waves
      // if this is sine wave, the automation is slower at the edges of the curve
      if( auto.wave == 'sine' ){

        // calculate the sine wave
        increase = Math.PI * 2 / auto.steps
        sine_percentage = Math.sin( auto.cursor ) / 2 + 0.5
        auto.cursor += increase

        auto.current_value = (max_value * sine_percentage).toFixed(2)

        // keep the loop going. Once we hit the top go back to 0.
        if( auto.cursor >= auto.steps ){
          auto.cursor = 0
        }

      }else if( auto.wave == 'tri' || auto.wave == 'saw' ){

        // Saw & Tri waves

        // linear distance value between each update of the automation
        slice_width = max_value / auto.steps

        // determine new value
        auto.current_value = (auto.cursor * slice_width).toFixed(2)

        // increment cursor (up or down, since cursor_moves can be negative)
        auto.cursor += auto.cursor_moves

        // when we hit the top
        if( auto.cursor >= auto.steps && auto.cursor_moves == 1 ){

          // saw: start over
          if( auto.wave == 'saw' ){
            auto.cursor = 0  
          }

          // tri: change direction
          if( auto.wave == 'tri' ){
            auto.cursor_moves = -1
          }
          
        }

        // when we hit the bottom
        if( auto.cursor <= 0 && auto.cursor_moves == -1 ){

          // saw: start over
          if( auto.wave == 'saw' ){
            auto.cursor = auto.steps
          }

          // tri: change direction
          if( auto.wave == 'tri' ){
            auto.cursor_moves = 1
          }

        }        

      }else if( auto.wave == 'noise' ){

        // Noise wave (random)

        auto.cursor += 3 // speed of automation

        if( auto.cursor >= auto.steps ){

          // make random value
          auto.current_value = (Math.random(1) * max_value).toFixed(2)

          auto.cursor = 0

        }
      }

      // send the value to the main window
      // control.change( auto.current_value )
      state[control_id] = auto.current_value

      // update the control deck view
      percent = (auto.current_value / max_value) * 100
      sliderElements.$slider_auto_indicator.css('width', percent+"%")
      
    })
  }
}