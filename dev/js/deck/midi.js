midi = {
  run: true,
  input_log: Array(), // log of last inputs
  value_log: Array(), // log of last input values
  current_type: null, // button or knob
  controls: JSON.parse( localStorage.midi_map_json ),
  edited: false, // for saving midi maps
  jazz:null, // set in init
  init:function(){

    // set up jazz html object
    if( $('#jazz').length == 0 ){
      document.write('<object id="jazz" type="audio/x-jazz" class="hidden"></object>');
      midi.jazz = document.getElementById("jazz");
    }

    // open Jazz input output
    try{
      midi.jazz.MidiInOpen(0);
      midi.jazz.MidiOutOpen(1);
    }catch(err){
      alert('There was an error connecting to your MIDI device. Restart to try again.');
      // window_ui.launch_modal("midi-error");
      return;
    }

    // var m_out = function(button,color){
    //   if(!midi){return;}
    //   switch(color){
    //     case 'off':
    //       color = 0;
    //       break
    //     case 'white':
    //       color = 1;
    //       break
    //     case 'cyan':
    //       color = 4;
    //       break
    //     case 'pink':
    //       color = 10;
    //       break
    //     case 'red':
    //       color = 20;
    //       break
    //     case 'blue':
    //       color = 35;
    //       break
    //     case 'yellow':
    //       color = 65;
    //       break
    //     case 'green':
    //       color = 127;
    //       break
    //   }

    //   midi.jazz.MidiOut(0x90,button,color);
    // }

    
      // // COLOR THE DIRECTIONAL BUTTONS
      

      // // DEFAULT COLOR OF BUTTONS

      // // GRID BUTTONS
      // // Grouped in columns
      
      // m_out(0,'red');
      // m_out(1,'cyan');
      // m_out(2,'green');
      // m_out(3,'green');

      // m_out(4,'red');
      // m_out(5,'cyan');
      // m_out(6,'green');
      // m_out(7,'green');
      
      // m_out(8,'red');
      // m_out(9,'cyan');
      // m_out(10,'green');
      // m_out(11,'white');
      
      // m_out(12,'red'); 
      // m_out(13,'cyan');
      // m_out(14,'green');
      // m_out(15,'white');

      // // ENCODERS
      // m_out(48,'white');
      // m_out(49,'white');
      // m_out(50,'yellow');
      // m_out(51,'white');
      // m_out(52,'off');
      // m_out(53,'yellow');
      // m_out(54,'off');
      // m_out(55,'off');
      // m_out(56,'off');
      // m_out(57,'off');
      // m_out(58,'off');
      // m_out(59,'off');

      // //SEQ BUTTONS

      // m_out(16,'pink');
      // m_out(32,'white');

      // m_out(17,'pink');
      // m_out(33,'white');

      // m_out(18,'pink');
      // m_out(34,'white');


      // m_out(19,'green');

      // // m_out(20,'blue'); //punches
      // // m_out(21,'blue');
      // // m_out(22,'blue');
      // // m_out(36,'blue');
      // // m_out(37,'blue');

      // m_out(38,'pink'); // WAUTO

      // m_out(39,'yellow');

      // m_out(24,'green');
      // m_out(40,'pink');

      // // m_out(26,'blue'); //bouncers
      // m_out(27,'green');
      // m_out(42,'green');
      // m_out(43,'green');
      // m_out(44,'green');
      // // m_out(28,'blue');
      // // m_out(42,'blue');
      // // m_out(43,'blue');
      // m_out(30,'blue');
      // m_out(31,'blue');
      // // m_out(45,'blue');
      // // m_out(46,'blue');
      // // m_out(47,'blue');

      // // m_out(29,'pink');
      // // m_out(30,'pink');
      // // m_out(45,'white');
      // // m_out(46,'white');
      // // m_out(31,'pink');
      // // m_out(47,'white');



  },

  listen:function(){

    if(!midi.run){ return; }

    // input signal detected
    while( signal = midi.jazz.QueryMidiIn() ){

      // to clear all midi input events that haven't been processed yet.
      // midi.jazz.ClearMidiIn();

      // cut off timestamp
      signal = signal.slice(1, signal.length);

      // input id
      input_id = signal[0].toString() + signal[1].toString();
      input_signature = signal[0].toString() + signal[1].toString() + signal[2].toString();

      // control signal blacklist. For making piano rolls behave like buttons. make interface for this
      midi_ignore = ['1284564','1441000','1441010'];

      // ignore signals on the blacklist
      if( midi_ignore.indexOf(input_signature) !== -1 ){
        return;
      }

      // reset the value log if a new midi input is touched
      // dont let the log get longer than 2
      midi.input_log.push( Array( signal[0], signal[1] ) );
      if( midi.input_log.length > 2 ){ midi.input_log.shift(); }
      if( midi.input_log.length > 1 && midi.input_log[0][1] !== midi.input_log[1][1]){
        midi.value_log = Array();
      }

      // log the midi value to determine if it's a knob or button
      // dont let the log get longer than 2 values
      midi.value_log.push( signal[2] );
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

      // if the control deck is waiting for MIDI to map, map it and stop
      if( midi_mapper.waiting_for_midi_input == true ){
        midi_mapper.map_control(input_id);
        return;
      }

      // send the signal to the control deck
      // control deck updates the view and runs the actual control functions
      controls.update_midi( input_id, signal[2] );

    }

  },
  out:function(m1,m2,m3){
    // console.log(m1,m2,m3);
    if( m1 == undefined || m2 == undefined || m3 == undefined ){ return; }
    m1 = parseInt(m1);
    m2 = parseInt(m2);
    m3 = parseInt(m3);

    Jazz.MidiOut(m1,m2,m3);
  }
}

midi.init();