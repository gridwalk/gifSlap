/* * * * * * * * * * *
*                    *
* GIF FOLDER         *
* * * * * * * * * * **/

$('#gif-folder-readout').attr('value',localStorage.gif_folder);

settings_ui.init_gif_folder_ui();
settings_ui.update_gif_folder_readout(localStorage.gif_folder);
controls.update_next_gif();

/* * * * * * * * * * *
*                    *
* MIDI LAYOUTS       *
* * * * * * * * * * **/

// // watch the MIDI layouts folder for changes
// // midi_watch = fs.watch( localStorage.control_layouts_folder + "/midi", function(){
// //   update_midi_layouts();
// // });


// $('#midi-filesystem').click(function(){
//   gui.Shell.openItem(gui.App.dataPath + "/control_layouts/midi/");
// });

/* * * * * * * * * * *
*                    *
* RANDOMIZATION      *
* * * * * * * * * * **/

var randomize = function(randomize){

  localStorage.randomize = randomize;
  if(randomize == true || randomize == 'true'){

    // randomize the gifs
    main.images.randomize_order = true;
    main.shuffle_array( main.images.active_set );

  }else{

    // reload the gifs without randomization
    main.images.randomize_order = false;
    main.gifslap.load_gifs();

  }
}

// trigger change to randomization variable
$('#randomize').change(function(){
  randomize( $(this).prop('checked') );
});

// set the initial state of the checkbox
if( localStorage.randomize == 'true' ){
  $('#randomize').prop('checked',true);
  randomize(true);
}else{
  $('#randomize').prop('checked',false);
  randomize(false);
}

/* * * * * * * * * * *
*                    *
* GAMEPAD            *
* * * * * * * * * * **/

$('#gamepad').change(function(){
  localStorage.gamepad = $(this).prop('checked');

  if( localStorage.gamepad == 'true' ){
    main.gamepadSupport.init();
  }else{
    main.gamepadSupport.stopPolling();
  }

});

if( localStorage.gamepad == 'true' ){
  $('#gamepad').prop('checked',true);  
}else{
  $('#gamepad').prop('checked',false);
}

/* * * * * * * * * * * * * * * * *
*                                *
* PROCESSOR INTENSIVE CONTROLS   *
* * * * * * * * * * * * * * * * **/



$('#show-intensive-controls').change(function(){

  localStorage.show_intensive_controls = $(this).prop('checked');
  controls.update_show_intensive() 

})

if( localStorage.show_intensive_controls == 'true' ){
  $('#show-intensive-controls').prop('checked',true);  
}else{
  $('#show-intensive-controls').prop('checked',false);
}

/* * * * * * * * * * *
*                    *
* VERSION NUMBER     *
* * * * * * * * * * **/

// plug in version number
version = gui.App.manifest.version;
$('#version').html(version);