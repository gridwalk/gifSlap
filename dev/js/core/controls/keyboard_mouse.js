var keyboard_mouse = {
  controls: JSON.parse( localStorage.keyboard_mouse_layout_json ),
  
  keycodes: ["Left Click","","Right Click","CANCEL","","","HELP","","Backspace","Tab","","","CLEAR","Enter","Return","","Shift","Control","Alt","PAUSE","Caps Lock","KANA","EISU","JUNJA","FINAL","HANJA","","Escape","CONVERT","NONCONVERT","ACCEPT","MODECHANGE","Space","Page Up","Page Down","End","Home","Left","Up","Right","Down","SELECT","Print","EXECUTE","Print Screen","Insert","Delete","","0","1","2","3","4","5","6","7","8","9","COLON","SEMICOLON","LESS_THAN","PLUS","GREATER_THAN","QUESTION_MARK","AT","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Command (L)","","Command (R)","","SLEEP","Numpad 0","Numpad 1","Numpad 2","Numpad 3","Numpad 4","Numpad 5","Numpad 6","Numpad 7","Numpad 8","Numpad 9","*","+","SEPARATOR","-",".","/","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","","","","","","","","","NUM_LOCK","SCROLL_LOCK","WIN_OEM_FJ_JISHO","WIN_OEM_FJ_MASSHOU","WIN_OEM_FJ_TOUROKU","WIN_OEM_FJ_LOYA","WIN_OEM_FJ_ROYA","","","","","","","","","","CIRCUMFLEX","EXCLAMATION","DOUBLE_QUOTE","HASH","DOLLAR","PERCENT","AMPERSAND","UNDERSCORE","OPEN_PAREN","CLOSE_PAREN","ASTERISK","PLUS","PIPE","HYPHEN_MINUS","OPEN_CURLY_BRACKET","CLOSE_CURLY_BRACKET","~","","","","","VOLUME_MUTE","VOLUME_DOWN","VOLUME_UP","","","SEMICOLON","PLUS","COMMA","MINUS","PERIOD","SLASH","BACK_QUOTE","","","","","","","","","","","","","","","","","","","","","","","","","","","Open Bracket","BACK_SLASH","Close Bracket","QUOTE","","META","ALTGR","","WIN_ICO_HELP","WIN_ICO_00","","WIN_ICO_CLEAR","","","WIN_OEM_RESET","WIN_OEM_JUMP","WIN_OEM_PA1","WIN_OEM_PA2","WIN_OEM_PA3","WIN_OEM_WSCTRL","WIN_OEM_CUSEL","WIN_OEM_ATTN","WIN_OEM_FINISH","WIN_OEM_COPY","WIN_OEM_AUTO","WIN_OEM_ENLW","WIN_OEM_BACKTAB","ATTN","CRSEL","EXSEL","EREOF","PLAY","ZOOM","","PA1","WIN_OEM_CLEAR",""],

  init:function(){

    //BIND OVERALL UI ACTIONS

    $('#container').mousemove(function(e){ keyboard_mouse.mouse_move(e) });
    $('#container').mousedown(function(e){ keyboard_mouse.mouse_down(e) });
    $('#container').mouseup(function(e){ keyboard_mouse.mouse_up(e) });
    $(document).bind('keydown', function(e){ keyboard_mouse.key_down(e) });
    $(document).bind('keyup', function(e){ keyboard_mouse.key_up(e) });

    // get options from the control map
    for( input_id in keyboard_mouse.controls ){
      for( option_name in keyboard_mouse.controls[input_id].options){
        
        // if this is cursor_xy, set the max variable
        if( input_id == "cursor_xy" && option_name == "max_value" ){ keyboard_mouse.cursor_xy_max = keyboard_mouse.controls[input_id].options[option_name]; }

        // if this is cursor_x, set the max variable
        if( input_id == "cursor_x" && option_name == "max_value" ){ keyboard_mouse.cursor_x_max = keyboard_mouse.controls[input_id].options[option_name]; }

        // if this is cursor_y, set the max variable
        if( input_id == "cursor_y" && option_name == "max_value" ){ keyboard_mouse.cursor_y_max = keyboard_mouse.controls[input_id].options[option_name]; }

        // handle other special control values!
        
      };
    }
  },
  cursor_x:0,
  cursor_y:0,
  mouse_move:function(e){

    keyboard_mouse.cursor_x = e.pageX;
    keyboard_mouse.cursor_y = e.pageY;

    cursor_xy = e.pageX * e.pageY;
    max_screen_value = window.innerWidth * window.innerHeight;

    cursor_xy = Math.round(keyboard_mouse.cursor_xy_max * cursor_xy/max_screen_value);

    if( keyboard_mouse.shifted ){

      // do the shift cursor combo

      if(keyboard_mouse.shift_cursor_current_functions[0] !== undefined ){
        keyboard_mouse.shift_cursor_current_functions[0].forEach(function(shift_cursor_function){
          controls[ shift_cursor_function ].change( cursor_xy, 'mouse' );
        });
      }

    }else{

      // do the normal cursor functions

      // Cursor XY
      if(keyboard_mouse.controls.cursor_xy.mapped_functions.length !== 0){
        keyboard_mouse.controls.cursor_xy.mapped_functions.forEach(function(cursor_xy_function){
          controls[ cursor_xy_function ].change( cursor_xy, 'mouse' );
        });
      }

      // Cursor X
      if(keyboard_mouse.controls.cursor_x.mapped_functions.length !== 0){
        
        keyboard_mouse.controls.cursor_x.mapped_functions.forEach(function(cursor_x_function){
          controls[ cursor_x_function ].change( keyboard_mouse.cursor_x, 'mouse' );
        });

      }

      // Cursor Y
      if(keyboard_mouse.controls.cursor_y.mapped_functions.length !== 0){
        
        keyboard_mouse.controls.cursor_y.mapped_functions.forEach(function(cursor_y_function){
          controls[ cursor_y_function ].change( keyboard_mouse.cursor_y, 'mouse' );
        });
      }

    }

  },
  mouse_down:function(e){

    // LEFT click
    if( e.button == 0 ){
      if(keyboard_mouse.controls.click.mapped_functions.length !== 0){
        keyboard_mouse.controls.click.mapped_functions.forEach(function(click_function){
          controls[click_function].press();
        });
      }
    }

    // RIGHT click
    else if( e.button == 2){
      if(keyboard_mouse.controls.right_click.mapped_functions.length !== 0){
        keyboard_mouse.controls.right_click.mapped_functions.forEach(function(right_click_function){
          controls[right_click_function].press();
        });
      }
    }

  },
  mouse_up:function(e){

  },
  key_down:function(e){

    // if the cursor is in a text box, DONT DO THE KEY FUNCTION
    if( $('input:focus').length || $('textarea:focus').length ){ return; }

    // escape key
    if( e.which == 27 ){ $('#toggle-ui').click(); }

    // set keypress states for combo activators
    
    // SHIFT
    if( e.which == 16 ){ keyboard_mouse.shifted = true; return; }

    // ALT
    if( e.which == 18 ){ keyboard_mouse.alted = true; return; }

    // DELETE
    if( e.which == 8 ){ e.preventDefault(); }

    // check if we need options
    // if( controls[ keyboard_mouse.controls[ e.which ].mapped_functions[i] ].options !== undefined ){
    //   options = keyboard_mouse.controls[ e.which ].options;
    // }else{
    //   options = null;
    // }

    // if we are pressing a "shift cursor" combo, add the combo function to the array to change with the cursor
    // also check if a combo is assigned to this key
    if( keyboard_mouse.shifted && keyboard_mouse.controls[e.which].combos.shift_cursor.length !== 0 ){

      // add the function to the current shift cursor combo array
      // this array is read by the mouse move handler

      // function we're assigning
      combo_function = keyboard_mouse.controls[e.which].combos.shift_cursor;
 
      // make sure it's not already in the array
      if( keyboard_mouse.shift_cursor_current_functions.indexOf(combo_function) == -1 ){
        // add it to the array
        keyboard_mouse.shift_cursor_current_functions.push( combo_function );
      }

    }else if( keyboard_mouse.alted && keyboard_mouse.controls[e.which].combos.alt.length !== 0 ){

      // this is an alt combo (button press)
      // press all functions assigned to this combo

      keyboard_mouse.controls[e.which].combos.alt.forEach( function( control_id ){
        controls[ control_id ].press();
      });


    }else{
      
      // normal key press
      // press every function assigned to this key

      keyboard_mouse.controls[e.which].mapped_functions.forEach( function( control_id ){
        controls[ control_id ].press();
      });

    }


    
    
  },
  key_up:function(e){

    // unset keypress states for combo activators

    // SHIFT
    if( e.which == 16 ){ 
      keyboard_mouse.shifted = false;
      keyboard_mouse.shift_cursor_current_functions = [];
      return;
    }

    // ALT
    if( e.which == 18 ){ 
      keyboard_mouse.alted = false;
      return;
    }

    // remove this key's function from the shift cursor functions array 
    fn_index_in_array = keyboard_mouse.shift_cursor_current_functions.indexOf(keyboard_mouse.controls[e.which].combos.shift_cursor);
    if( fn_index_in_array > -1 ){
      keyboard_mouse.shift_cursor_current_functions.splice(fn_index_in_array,1);
    }

    // run the release function for this control
    keyboard_mouse.controls[e.which].mapped_functions.forEach( function( control_id ){
      if( controls[ control_id ].release ){
        controls[ control_id ].release();
      }
    });

  },
  // states
  key_pressed:false,
  shifted:false,
  alted:false,

  // combo queues
  shift_cursor_current_functions: Array(),

  // declare some options
  // these are defined below when the control map is scanned for options
  cursor_x_max:null,
  cursor_y_max:null
}

keyboard_mouse.init();