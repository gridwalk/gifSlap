
m_out = function(){}; // delete this funciton from the entire project

midi = {
  deck_waiting_for_input: false,
  input_log: Array(), // logs last input
  value_log: Array(), // logs last input value
  current_type: null, // button or knob
  controls: JSON.parse( localStorage.midi_layout_json ),
  edited: false, // for saving midi maps
  init:function(){

    // If there is no midi, stop initialization
    if( localStorage.midi_layout == null ){ return; }

    // set up jazz html object
    document.write('<object id="Jazz" type="audio/x-jazz" class="hidden"></object>');
    var Jazz = document.getElementById("Jazz");

    // open Jazz input output
    try{
      Jazz.MidiInOpen(0);
      Jazz.MidiOutOpen(1);
    }catch(err){
      alert('There was an error connecting to your MIDI device. Refresh to try again.');
      // window_ui.launch_modal("midi-error");
      return;
    }

    // start polling for MIDI
    setInterval(function(){
      
      // input signal detected
      while(a=Jazz.QueryMidiIn()){

        idle_timer = 0;

        // to clear all midi input events that haven't been processed yet.
        //  Jazz.ClearMidiIn();

        // cut off timestamp
        a=a.slice(1,a.length);
        
        // control id
        control_id = a[0].toString() + a[1].toString();
        control_signature = a[0].toString() + a[1].toString() + a[2].toString();

        // control signal blacklist. For making piano rolls behave like buttons. make interface for this
        midi_ignore = ['1284564','1441000','1441010'];

        // ignore signals on the blacklist
        if( midi_ignore.indexOf(control_signature) !== -1 ){
          return;
        }        
        
        // reset the value log if a new midi input is touched
        // dont let the log get longer than 2
        midi.input_log.push( Array( a[0],a[1] ) );
        if( midi.input_log.length > 2 ){ midi.input_log.shift(); }
        if( midi.input_log.length > 1 && midi.input_log[0][1] !== midi.input_log[1][1]){
          midi.value_log = Array();
        }

        // log the midi value to determine if it's a knob or button
        // dont let the log get longer than 2 values
        midi.value_log.push( a[2] );
        if( midi.value_log.length > 2 ){ midi.value_log.shift(); }
        log = midi.value_log;

        // determine if the control is a knob or button
        if( ((log[0] - log[1] < 10) && (log[0] - log[1] > -10) && (log[0] - log[1] !== 0)) || ( log[0] == log[1] ) ){

          // knob
          midi.current_type = 'knob';
        }else{

          // button
          midi.current_type = 'button';
        }

        // stop if deck is waiting for midi input
        if( deck.controls.waiting_for_midi_input){
          deck.controls.update_midi( control_id, value );
          return;
        }

        
        // stop it here if there is no control assigned to this ID
        if( !midi.controls[ control_id ]){
          return;
        }

        // how many functions does this control?
        amount_of_assigned_functions = midi.controls[ control_id ].mapped_functions.length;
        
        i = 0;

        // if a function is not assigned to the requested control, return
        if( controls[ midi.controls[ control_id ].mapped_functions[0] ] == undefined ){ return; }

        // if the control is a button...
        if( controls[ midi.controls[ control_id ].mapped_functions[0] ].type == "button"){
          
          // loop through assigned functions
          while( i < amount_of_assigned_functions ){

            if( midi.controls[ control_id ].mapped_functions.indexOf( midi.controls[ control_id ].mapped_functions[i] ) !== i ){
              console.log('duplicate function');
              return;
            }

            // button press or release

            if( a[2] > 0 ){
              // console.log(control_id);
              // console.log(controls[ midi.controls[ control_id ].mapped_functions[i] ].press)
              // button press

              // check if we send options
              if( controls[ midi.controls[ control_id ].mapped_functions[i] ].options !== undefined ){
                options = midi.controls[ control_id ].options;
              }else{
                options = null;
              }

              controls[ midi.controls[ control_id ].mapped_functions[i] ].press( options );
            
            }else{

              // button release
              if( controls[ midi.controls[ control_id ].mapped_functions[i] ].release ){
                controls[ midi.controls[ control_id ].mapped_functions[i] ].release();
              }

            }

          i++;
          }
        }

        // control is a knob
        if( controls[ midi.controls[ control_id ].mapped_functions[0] ].type == "knob"){

          // detect max and minimum knob values
          if( a[2] == 127 ){ midi.max = true; }else{ midi.max = false; }
          if( a[2] == 0   ){ midi.min = true; }else{ midi.min = false; }
        
          // loop through assigned functions
          while( i < amount_of_assigned_functions ){

            // get control
            control_name = midi.controls[ control_id ].mapped_functions[i];
            control_obj  = controls[ control_name ];
            
            // get max value
            max = control_obj.max;
            if( max == undefined ){ max = 200; }

            // determine value to send based on knob position
            percent = a[2] / 127;
            value = max * percent;

            // send the value
            control_obj.change( value, "knob" );

            deck.controls.update_midi( control_name, control_id, value );
            
            i++;
          }
        }
      }
    },0);
  },
  out:function(m1,m2,m3){
    // console.log(m1,m2,m3);
    if( m1 == undefined || m2 == undefined || m3 == undefined ){ return; }
    m1 = parseInt(m1);
    m2 = parseInt(m2);
    m3 = parseInt(m3);

    Jazz.MidiOut(m1,m2,m3);
  },
  save: function(){
    if( midi.edited == false ){ return; }

    localStorage.midi_layout_json = JSON.stringify(midi.controls);

    fs.writeFile( gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_layout + ".json", localStorage.midi_layout_json, function(err,data){
      if(err) {
        console.log(err);
      }else{
        console.log("MIDI layout saved!");
      }
    });
  }
}

midi.init();