// require('nw.gui').Window.get().showDevTools()

var _controls = document.getElementById('controls')

var controls = {
  dragging: false,
  dragging_slider: null, // stores which slider is being dragged
  dragging_xy: null, // stores which xy is being dragged
  xy_top_px:null, // pixel position of the top of the current XY being dragged. Used to tell if the draghas left the box
  xy_left_px:null, // pixel position of the left of the current XY being dragged. ^^
  default_max_value: 200,
  init:function(){

    controls.update_next_gif();
    controls.initialize_xy_pads();
    controls.initialize_sliders();
    controls.initialize_buttons();
    
  },
  reset:function(){
    
    $('.xy-container .reset').click();
    $('[control-id=activate_chain_mode]').click();
    $('[menu-target=controls]').click();
    $('.toggle, .auto-button').removeClass('active');

    $('.slider').each(function(){
      control_id = $(this).attr('control-id');
      initial = main.controls[control_id].initial || 0;
      controls.update(control_id,initial);
    });

    automator.stop_all();

    // make the chain look alive
    main.controls.chain_direction_x.change(66);
    main.controls.chain_direction_y.change(66);
    
  },
  initialize_xy_pads:function(){
    
    // replace <xy> elements with full xy pads
    $('xy').each(function(){
      name = $(this).attr('name');
      control_id_x = $(this).attr('control-id-x');
      control_id_y = $(this).attr('control-id-y');
      control_id_reset = $(this).attr('control-id-reset');
      classes = $(this).attr('class');
      if( !classes ){ classes = ''; }
      if( localStorage.show_intensive_controls !== 'true' && classes.indexOf('intensive') !== -1 ){ classes+=' hidden' }
      
      xy_html = '\
        <div class="xy-container '+classes+'">\
          <span>'+name+'</span>\
          <div class="reset" map control-id="'+control_id_reset+'">'+svgs.block+'Reset</div>\
          <div class="xy-surface locked">\
            <div class="map-axis">\
              <b class="map-x-axis" map control-id="'+control_id_x+'" >&harr;</b>\
              <b class="map-y-axis" map control-id="'+control_id_y+'" >&#8597;</b>\
            </div>\
            <div class="x-axis" control-id="'+control_id_x+'"></div>\
            <div class="y-axis" control-id="'+control_id_y+'"></div>\
            <div class="xy-position"></div>\
          </div>\
        </div>'

      $(this).before(xy_html);
      $(this).remove();
    });

    var mousemove_on_xy = function(event){
      
      // the current xy being dragged
      $xy = controls.dragging_xy;

      x = event.clientX - controls.xy_left_px;
      y = event.clientY - controls.xy_top_px + window.pageYOffset;

      // maximum
      if( x >= $xy.width()  ){ x = $xy.width(); }
      if( y >= $xy.height() ){ y = $xy.height(); }

      // minimum
      if( x < 0 ){ x = 0; }
      if( y < 0 ){ y = 0; }     

      // get percents
      x_percent = x / $xy.width();
      y_percent = y / $xy.height();

      // calculate values to send
      x_control_id = $xy.children('.x-axis').attr('control-id');
      y_control_id = $xy.children('.y-axis').attr('control-id');

      x_max = main.controls[x_control_id].max;
      y_max = main.controls[y_control_id].max;

      x_value = x_max * x_percent;
      y_value = y_max * y_percent;

      // send the values to the control functions

      // send horizontal changes
      if( !event.shiftKey ){
        main.controls[x_control_id].change(x_value);
      }

      // send vertical changes
      if( !event.ctrlKey ){
        main.controls[y_control_id].change(y_value);
      }
    }

    // initialize drag on xy pads
    $('.xy-surface').mousedown(function(event){
      controls.dragging    = true;
      controls.dragging_xy = $(this);
      
      // save the xy position of the entire pad
      controls.xy_top_px   = $(this).offset().top;
      controls.xy_left_px  = $(this).offset().left;
      
      // trigger the pad
      mousemove_on_xy(event)
    });

    // drag end X/Y
    $(window).mouseup(function(){
      controls.dragging    = false;
      controls.dragging_xy = null;
      controls.xy_top_px   = null;
      controls.xy_left_px  = null;
    }) // no semicolon because chained:

    // on drag xy
    .mousemove(function(event){

      if(!controls.dragging){return}
      if(controls.dragging_xy == null){return}
      if( $('#controls').hasClass('mapping') ){return}

      mousemove_on_xy(event)
    })

    // event listener for XY state change
    events.on('xyUpdate',function(control_id,value){

      // don't even mess around with NaNs
      if( value == 'auto'){ return }
      if( isNaN(value) )  { return }

      _axis = _controls.querySelectorAll('[control-id='+control_id+']')[1]

      // update axis height or width
      percent = value / main.controls[control_id].max * 100

      dimension = 'height'
      if( _axis.classList.contains('x-axis') ){
        dimension = 'width'
      }

      _axis.style[dimension] = percent+'%'
      _axis.parentNode.querySelectorAll('.xy-position')[0].style[dimension] = percent+'%'

    })

  },
  reset_axis_view:function(control_id){

    initial = main.controls[control_id].initial;

    $axis = $('[control-id='+control_id+']');

    $axis.attr('style','');
    $axis.siblings('.xy-position').attr('style','');

  },
  initialize_sliders:function(){
    
    // replace <slider> elements with full slider html
    $('slider').each(function(){
      
      control_id        = $(this).attr('control-id');
      reset_control_id  = $(this).attr('reset-control-id');
      classes           = $(this).attr('class');
      if( !classes ){ classes = ''; }
      if( localStorage.show_intensive_controls !== 'true' && classes.indexOf('intensive') !== -1 ){ classes+=' hidden' }
      
      name              = main.controls[control_id].name;
      initial           = main.controls[control_id].initial;
      if( !initial ){ initial = 0; }

      auto_button       = '';
      auto_bar          = '';
      auto_speed_slider = '';
      
      if( main.controls[control_id].auto == true ){        
        auto_button = '<div class="auto-button" wave="sine" automation-control-id="'+control_id+'">'+svgs.wave_saw+svgs.wave_sine+svgs.wave_tri+svgs.wave_noise+'</div>';
        auto_bar = '<div class="slider-auto-bar"></div>';        
        auto_speed_slider = '<div class="auto-speed-slider" automate="'+control_id+'" control-id="automation_speed" map ><div class="auto-slider-bar"></div></div>';
      }

      reset_button = '';
      if( reset_control_id !== undefined ){
        reset_button = '<div class="reset" control-id="'+reset_control_id+'" map >'+svgs.block+'Reset</div>';
      }
      
      slider_html = '\
        <div class="slider-container '+classes+'">\
          <span>'+name+'</span>\
          '+reset_button+'\
          '+auto_button+'\
          <div class="slider" control-id="'+control_id+'" map>\
            <span class="slider-value">'+initial+'</span>\
            <div class="slider-bar">\
            '+auto_bar+'\
            </div>\
          </div>\
          '+auto_speed_slider+'\
        </div>'

      $(this).before(slider_html);
      $(this).remove();
    });

    // initialize slider bar width
    $('.slider[control-id]').each(function(){
      // value = parseInt($(this).children('.slider-value').text());
      
      control_id = $(this).attr('control-id');
      control = main.controls[control_id]
      initial = control.initial
      max     = control.max

      if( !max ){ max = controls.default_max_value }
      percent = (initial/max)*100
      $(this).children('.slider-bar').css('width',percent+'%')
    });

    // when mouse moves on slider
    var mousemove_on_slider = function(e){

      // the current slider being dragged
      $slider = controls.dragging_slider;

      // get drag value
      posX = $slider.offset().left;
      width = $slider.width();
      percent = Math.floor((event.pageX - posX)*(100/width));
      
      // maximum and minimum percent
      if( percent > 100 ){ percent = 100; }
      if( percent < 0   ){ percent = 0;   }

      // get the control id
      control_id = $slider.attr('control-id');

      // maximum sent value
      max = main.controls[control_id].max;
      if( !max ){ max = controls.default_max_value; }

      // determine whether value should be a whole number or decimal
      
      // decimal
      if( max < 50 ){
        value = (max * (percent*.01)).toFixed(2);
      }

      // whole number
      else{
        value = Math.floor(max * (percent*.01));   
      }


      // set bar width
      $slider.children('.slider-bar,.auto-slider-bar').css('width', percent+"%");

      // if this is an automation slider, pass the control id to automate and the new amount of speed percent
      if( control_id == "automation_speed" ){
        control_id_to_automate = $slider.attr('automate')
        main.controls['automation_speed'].change(percent,control_id_to_automate)
      }

      // this is a normal slider, run the control function
      else{

        // set text value
        // $slider.children('.slider-value').text(value);

        // run the actual control function
        main.controls[control_id].change(value);

      }
    }

    // drag start on sliders & automation sliders
    $('.slider[control-id], .auto-speed-slider').mousedown(function(e){
      if( $('#controls').hasClass('mapping') ){return}
      controls.dragging = true;
      controls.dragging_slider = $(this);

      mousemove_on_slider(event)
    })

    // drag end on sliders
    $(window).mouseup(function(){
      controls.dragging = false;
      controls.dragging_slider = null;
    })

    // on drag slider
    .mousemove(function(event){

      if(!controls.dragging){return}
      if(controls.dragging_slider == null){return}

      mousemove_on_slider(event)
      
    });


    // event listener for slider state change
    events.on('sliderUpdate',function(control_id,value){

      // don't even mess around with NaNs
      if(value == 'auto'){ return }
      if( isNaN(value) ) { return }

      _slider = _controls.querySelectorAll('[control-id='+control_id+']')[0]

      // update slider width
      percent = value / main.controls[control_id].max * 100
      _slider.querySelectorAll('.slider-bar, .auto-slider-bar')[0].style.width = percent+'%'

      // update slider text value
      _sliderValue = _slider.getElementsByClassName('slider-value')[0]
      _sliderValue.innerHTML = value
    })

  },
  initialize_buttons:function(){

    // click control bank activators
    $('#control-bank-activators .slim-button').click(function(){
      control_bank_id = $(this).attr('name');
      controls.activate_bank( control_bank_id );
    });

    // control button presses
    $('[control-id]:not(.slider):not(.auto-speed-slider)').click(function(){
      if( $('#controls').hasClass('mapping') ){return}
      control_id = $(this).attr('control-id');
      main.controls[control_id].press();
    });

    // automation button click
    $('.auto-button').click(function(){

      if( $('#controls').hasClass('mapping') ){return} // dont toggle when mapping

      control_id = $(this).attr('automation-control-id');
      if( !$(this).hasClass('active') ){        
        // register automation

        max_steps          = 800
        automation_percent = $(this).siblings('.auto-speed-slider').children('.auto-slider-bar').width()
        steps = max_steps * (automation_percent * 0.01)

        automator.update_automation_speed(control_id,steps)
        controls.update_automation_view(control_id, 1)
      }else{        
        automator.stop_automation(control_id);
        controls.update_automation_view(control_id, 0)
      }

    })

    // automation button right click
    .mousedown(function(e){
      if( e.which !== 3 ){ return } // filter for right click

      old_wave = $(this).attr('wave')

      if( old_wave == 'sine' ){ new_wave = 'saw'; }
      else if( old_wave == 'saw' ){ new_wave = 'tri' }
      else if( old_wave == 'tri' ){ new_wave = 'noise' }
      else if( old_wave == 'noise' ){ new_wave = 'sine' }

      $(this).attr('wave',new_wave);

      // if the automation is running, update with the new waveform
      if( $(this).hasClass('active') ){
        console.log('update automation with new waveform')
        control_id = $(this).attr('automation-control-id');
        
        automation = automator.get_automation_by_control_id(control_id);
        automation.wave = new_wave;

      }

    });

    // toggle next gif preview type
    $('#next-gif').click(function(){
      if( localStorage.next_gif_preview == "canvas" ){
        localStorage.next_gif_preview = "gif";
      }else{
        localStorage.next_gif_preview = "canvas";
      }
      controls.update_next_gif();
    });

    // event listener for toggle state change
    events.on('toggleUpdate',function(control_id,value){

      _toggle = _controls.querySelectorAll('[control-id='+control_id+']')[0]

      // if state name is different from control_id, make sure to add the state-id attribute to the HTML
      if(!_toggle){
        _toggle = _controls.querySelectorAll('[state-id='+control_id+']')[0]
      }

      if(!_toggle) return

      if( value == true ){
        _toggle.classList.add('active')
      }else{
        _toggle.classList.remove('active')
      }

    })

    // event listener for indicator state change
    events.on('indicatorUpdate',function(control_id,value){

      _indicator = _controls.querySelectorAll('[state-id='+control_id+']')[0]

      if( value == true ){
        _indicator.classList.add('running')
      }else{
        _indicator.classList.remove('running')
      }

    })

  },
  activate_bank:function(control_bank_id){

    $bank_button = $('#control-bank-activators .slim-button[name='+control_bank_id+']');

    // hide other control banks and show this one
    $('.control-bank').hide();
    
    $('[bank-id='+control_bank_id+']').show();

    // activate this button
    $bank_button.addClass('controls-showing');

    // deactivate other buttons
    $bank_button.siblings().removeClass('controls-showing');

    // if this is a mode button, dont show addon controls
    if( $bank_button.parent().attr('id') == 'mode-control-bank-activators' ){
      $('#addon-control-bank-activators .slim-button').removeClass('controls-showing');
    }
  },
  update:function(control_id, value, option_value){

    if( deck.current_view !== 'controls' ){ return; }
    
    // maximum allowed for this control
    max = main.controls[control_id].max;
    if(!max){ max = controls.default_max_value }

    if( max > 127 ){
      // round value to whole number
      value = Math.round(value);
    }else{
      // round value to 2 decimals
      value = Math.round(value * 100)/100;
    }

    percent = (value / max) * 100;

    // check for slider or XY
    $slider = $('.slider[control-id='+control_id+']');
    $x_axis = $('.x-axis[control-id='+control_id+']');
    $y_axis = $('.y-axis[control-id='+control_id+']');
    $automation_bar = $('[automate='+option_value+']');

    if( $slider.length ){ // its a slider

      // console.log(value,percent)

      // update the slider text
      $slider.children('.slider-value').text(value);
      
      // update the slider width
      $slider.children('.slider-bar').css('width', percent+"%");  
    }

    if( $automation_bar.length ){ // its an automation bar
      $automation_bar.children('.auto-slider-bar').css('width', percent+"%");   
    }

    if( $x_axis.length ){ // its an X axis 
      $xy_pos = $x_axis.siblings('.xy-position');
      $x_axis.add($xy_pos).css('width',percent+'%');

    } 

    if( $y_axis.length ){ // its a Y axis
      $xy_pos = $y_axis.siblings('.xy-position');
      $y_axis.add($xy_pos).css('height',percent+'%');
    }



  },
  toggles_state:[],
  

  // This function doesnt seem to work!!!
  update_toggle: function(control_id, active_bool){
    if( deck.current_view !== 'controls' ){ return; }

    // limit DOM queries by saving the last state of the toggle
    
    if( controls.toggles_state[control_id] == undefined ){
      controls.toggles_state[control_id] = false;
    }

    if( controls.toggles_state[control_id] == active_bool ){
      
      // same state, do nothing
      return;
    
    }else{

      // new state, set the state and continue the function
      controls.toggles_state[control_id] = active_bool;
    }

    if( active_bool == 0 || active_bool == false ){
      $('[control-id='+control_id+']').removeClass('active');
    }else{
      $('[control-id='+control_id+']').addClass('active');
    }
  },
  
  automation_toggles_state:[],
  update_automation_view: function(control_id, active_bool){
    if( deck.current_view !== 'controls' ){ return; }

    // limit DOM queries by saving the last state of the toggle
    
    if( controls.automation_toggles_state[control_id] == undefined ){
      controls.automation_toggles_state[control_id] = false;
    }

    if( controls.automation_toggles_state[control_id] == active_bool ){
      
      // same state, do nothing
      return;
    
    }else{

      // new state, set the state and continue the function
      controls.automation_toggles_state[control_id] = active_bool;
    }

    if( active_bool == 0 || active_bool == false ){
      $('[automation-control-id='+control_id+']').removeClass('active');
    }else{
      $('[automation-control-id='+control_id+']').addClass('active');
    }
  },

  // this will be populated by the function directly below
  // used to make sure we only update the state of the buttons when a new state is recieved
  addon_running_state:[], 
  update_addon_running_indicator:function(addon_id,running){
    
    // // initialize the addon_running_state with all the addon states coming in
    // if( controls.addon_running_state[addon_id] == undefined ){
    //   controls.addon_running_state[addon_id] = false;
    // }

    // if( controls.addon_running_state[addon_id] == running ){
      
    //   // same state, do nothing
    //   return;
    
    // }else{

    //   // new state, set the state and continue the function
    //   controls.addon_running_state[addon_id] = running;
    // }


    // $addon_indicator = $('[name='+addon_id+']');

    // // turn the addon running indicator on or off

    // if( running == true ){
    //   $addon_indicator.addClass('running');
    // }else{
    //   $addon_indicator.removeClass('running');
    // } 

  },

  // updates control view and runs function
  update_midi: function( input_id, value ){

    // do nothing if the control is not mapped
    if( midi.controls[input_id] == undefined ){ return; }

    // iterate over the mapped functions
    midi.controls[input_id].mapped_functions.forEach(function(control_id){

      // check if this input_id has assigned functions
      if( control_id == undefined ){ 
        console.log('no functions assigned to this input_id')
        return;
      }

      // check if this is a valid control_id
      control = main.controls[control_id];
      if( control == undefined ){
        console.log('invalid control id: '+control_id)
        return;
      }

      // if this control expects an option, get that option value from the map
      option_value = null;
      if( control.option_name !== undefined ){
        option_value = midi.controls[input_id].options[control.option_name];
        
        if(!option_value){
          console.log('option for midi control was requested but not provided;');
          return;
        }
      }

      // branch by control type
      if( control.type == 'knob' ){
      
        // determine value to send based on percent of 127
        percent = value/127;
        max = control.max || controls.default_max_value;
        knob_value = max * percent;

        // update the control view (slider or XY)
        controls.update(control_id, knob_value, option_value);

        // run the control function
        control.change(knob_value, option_value);

      }else if( control.type == 'button' && value > 0 ){

        // run the control function
        toggle_state = control.press();

        // update the controls view
        if( toggle_state == undefined ){return}
        controls.update_toggle( control_id, toggle_state );

      }

    });

    // send feedback to the MIDI Map window
    midi_mapper.illuminate_row(input_id);

  },

  get_next_gif_index:function(){
    
    // index of the next gif
    var next_gif_index = main.images.cursor + main.images.skip_cursor
    if( next_gif_index == main.images.active_set.length ){
      next_gif_index = 0
    }

    if( main.images.cursor == 0 && main.images.skip_cursor == 1 ){
      next_gif_index = 1
    }

    return next_gif_index

  },
  update_next_gif:function(){

    next_gif_index = controls.get_next_gif_index()

    // update readout
    $('#next-gif .current').html(next_gif_index+1)
    $('#next-gif .total').html(main.images.active_set.length)

    // get the src
    var next_gif_src = main.images.active_set[ next_gif_index ]

    // save the next gif src to state
    updateState( null, 'next_gif_src', next_gif_src )

    // split depending on if we are using first-frame preview or the full gif
    if( localStorage.next_gif_preview == "canvas" ){

      $canvas = $('#next-gif-canvas');

      ctx = $canvas[0].getContext('2d');
      
      // clear the canvas
      ctx.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
      
      $('#next-gif-img').hide();
      $canvas.show();

      var img = new Image();
      
      img.onload = function() {

        canvas_width   = $canvas.width();
        canvas_height  = $canvas.height();
        natural_width  = img.width;
        natural_height = img.height;
        scale_ratio    = canvas_height / natural_height;
        scaled_width   = natural_width * scale_ratio;
        scaled_height  = canvas_height;

        // explicitly set canvas height and width
        $canvas.attr({
          height: scaled_height+"px",
          width:  canvas_width+"px"
        }).height(scaled_height);

        // center the image
        center_offset = (canvas_width - scaled_width) / 2;
        
        ctx.drawImage(img, 0, 0, natural_width, natural_height, center_offset, 0, scaled_width, scaled_height);

      };
      
      img.src = next_gif_src;
    
    }else{

      $('#next-gif-canvas').hide();
      $('#next-gif-img').show().attr('src', next_gif_src);

    }    
    
  },

  // used when the main window is refreshing.
  suspend:function(){

    // kill all automations
    state.automations = []

    // keep reference to this window
    deck_window = gui.Window.get().window;

    // attempt to reconnect deck to main
    deck_searching_for_main = setInterval(function(){

      // main has finished refreshing
      if(localStorage.refreshing !== true){
        main.deck = deck_window;
        controls.reset();
        clearInterval(deck_searching_for_main);
      }

    },1000);

  },

  update_show_intensive:function(){

    if( localStorage.show_intensive_controls == 'true' ){
      $('.intensive').removeClass('hidden')
    }else{
      $('.intensive').addClass('hidden')
    }    

  }
}

$(window).ready(function(){
  controls.init();  
});
