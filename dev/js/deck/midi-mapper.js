midi_mapper = {
  window:null, // set below in open_map_window
  body:null, // set once window loads
  map_edited:false,
  waiting_for_midi_input: false,
  control_id_to_map:null,
  control_id_to_map_for_automation:null,
  map_folder: gui.App.dataPath + "/control_layouts/midi/",
  map_file_location: gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_map + ".json", // also updated in load_map()

  /* * * * * * * * * * * * */
  /*                       */
  /* Initialization        */
  /*                       */
  /* * * * * * * * * * * * */
  
  init:function(){
    
    // midi map mode press
    $('#map-midi').click(function(){
      $('#controls').toggleClass('mapping');
      midi_mapper.update_mapped_controls();

      // exit preset delete mode
      presets.deleteButtonActive = false
    });

    // edit midi map button
    $('#edit-map').click(function(){

      if( midi_mapper.window == null ){
        midi_mapper.open_map_window();
      }else{
        midi_mapper.window.focus();
      }

    });

    // cancel midi waiting button
    $('#cancel-midi-waiting').click(function(){
      midi_mapper.reset_map();
    });

    // click on mappable control while in mapping mode
    $('body').on('click','.mapping [map]', function(){

      $('body').addClass('modal-show');
      $(this).addClass('midi-waiting');

      midi_mapper.control_id_to_map = $(this).attr('control-id');
      if( midi_mapper.control_id_to_map == 'automation_speed' ){
        midi_mapper.control_id_to_map_for_automation = $(this).attr('automate');
      }
      
      // next step is in midi.js:
      // the midi signal is intercepted because:

      midi_mapper.waiting_for_midi_input = true;

    });

  },

  update_mapped_controls:function(){

    $('.mapped').removeClass('mapped');

    // add a "mapped" class to all mapped controls
    if( midi.controls ){
      $.each(midi.controls,function(input_id,control){
        control.mapped_functions.forEach(function(control_id){

          // special case for automation speed (checks option)
          if( control_id == 'automation_speed' ){
            control_id = control.options.control_id_to_automate;
            $('[automate='+control_id+']').addClass('mapped');
          }

          // normal mapping
          else{
            $('[control-id='+control_id+']').addClass('mapped');
          }            
        });
      });
    }
  },

  open_map_window:function(){

    if( midi_mapper.window !== null ){
      midi_mapper.window.close();      
    }

    midi_mapper.window = gui.Window.open('./midi-map.html',{
      title:'MIDI Map',
      toolbar:false,
      frame:true,
      width:650,
      min_width:650,
      height:400,
    });

    midi_mapper.window.on('loaded', function(){

      midi_mapper.body = $(midi_mapper.window.window.document.body);
      midi_mapper.init_window_ui();
      midi_mapper.update_map_view();

      midi_mapper.window.on('close',function(){      
        midi_mapper.window.close(true);
        midi_mapper.window = null;
      });

    });    
  },
  
  init_window_ui:function(){

    // map selector

    $map_selector = midi_mapper.body.find('select');
    $map_selector.change(function(){

      val = $(this).val();
      val = val.replace(/ /g, '_');

      // save the current map
      midi_mapper.save(function(){
         midi_mapper.load_map(val);          
      },function(err){
        console.log('Could not save the map: '+err);
        midi_mapper.load_map(val);
      });
    });

    // import map button

    $import_map_file = midi_mapper.body.find('#import-map-file');

    midi_mapper.body.find('#import-map').click(function(){
      $import_map_file.click();
    });

    // when map is selected to import
    $import_map_file.change( midi_mapper.import_map );

    // export map button
    
    $export_map_file = midi_mapper.body.find('#export-map-file'); 

    midi_mapper.body.find('#export-map').click(function(){
      $export_map_file.attr('nwsaveas', localStorage.midi_map+'.json').val('').click();
    });

    // when map is selected to export
    $export_map_file.change( midi_mapper.export_map );

    // new map button
    midi_mapper.body.find('#new-map').click( midi_mapper.new_map );

    // delete map button
    midi_mapper.body.find('#delete-map').click( midi_mapper.delete_map );
  },

  /* * * * * * * * * * * * */
  /*                       */
  /* State Updates         */
  /*                       */
  /* * * * * * * * * * * * */

  load_map:function(map_name){
    
    // alert('loading '+map_name)

    if( !map_name || map_name == "None" ){
      localStorage.midi_map = null;
      localStorage.midi_map_json = "{}";
      return;
    }

    localStorage.midi_map = map_name;
    midi_mapper.map_file_location = gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_map + ".json";

    fs.readFile(
      midi_mapper.map_file_location, 'utf8', function(err,data){
      if(data == "undefined" || data == undefined){ data = "{}"; }
      localStorage.midi_map_json = data;      
      midi.controls = JSON.parse( data );
      midi_mapper.update_rows();
      midi_mapper.update_mapped_controls();
      // console.log( data );
    });
  },

  save: function( success_callback, error_callback ){

    if( midi_mapper.map_edited !== true ){
      success_callback();
      return;
    }

    // sort and remove duplicates
    midi_mapper.organize_map();

    // make string from JSON
    localStorage.midi_map_json = JSON.stringify(midi.controls);

    // alert(localStorage.midi_map_json)

    fs.writeFile( 
      midi_mapper.map_file_location,
      localStorage.midi_map_json,
      function(err,data){
        if(err) {
          error_callback( err );
        }else{
          success_callback();
        }
      }
    );
  },

  organize_map:function(){

    sorted_keys = Object.keys(midi.controls).sort();
    organized_controls = {};
    sorted_keys.forEach(function(key){
      organized_controls[key] = midi.controls[key];
    });

    midi.controls = organized_controls;
    midi_mapper.map_edited = true;

  },

  /* * * * * * * * * * * * */
  /*                       */
  /* UI View Updates       */
  /*                       */
  /* * * * * * * * * * * * */

  update_map_view:function(){

    midi_mapper.update_map_selector();
    midi_mapper.update_rows();
  },

  update_map_selector:function(){

    $map_selector = midi_mapper.body.find('select');
    $map_selector.empty();

    midi_folder_contents = fs.readdirSync( localStorage.control_layouts_folder + "/midi" );
    amount_of_maps = 0;

    midi_folder_contents.forEach(function( midi_map ){
      if( midi_map.indexOf('.json') == -1 ){ return; } // only load json files
      map_name = path.basename(midi_map,'.json').replace(/_/g,' '); // make the name pretty
      if( map_name == null || map_name == '' || map_name == ' ' ){return;} // maps must have names
      $map_selector.append("<option>"+ map_name +"</option>"); // add the option
      amount_of_maps++;
    });

    if(amount_of_maps == 0){
      $map_selector.append("<option>New MIDI Map</option>");
    }

    // set to last used midi controller
    $map_selector.val( localStorage.midi_map.replace(/_/g,' ') ).trigger('change');
  },

  update_rows:function(){

    if( midi_mapper.window == null ){ return }
    if( !midi_mapper.body.is(':visible') ){ return }

    $table = midi_mapper.body.find('table');
    $table.empty();
    
    // console.log(midi.controls)

    $.each(midi.controls, function(input_id, data) {

      // used to remove duplicate control ids on the same input
      var previous_control_id = '';

      data.mapped_functions.forEach(function( control_id ){

        // remove this control_id if it is a duplicate
        if( control_id == previous_control_id ){
          console.log( 'removing duplicate '+control_id+' from '+input_id );
        //   midi_mapper.remove_mapping( input_id, control_id );
          return;
        }else{
          previous_control_id = control_id;
        }

        // remove this control if it does not exist
        if( main.controls[control_id] == undefined ){
          console.log( 'removing obsolete control: '+control_id );
          midi_mapper.remove_mapping( input_id, control_id );
          midi_mapper.map_edited = true;
          return;
        }

        control_name = main.controls[control_id].name

        $input_id       = $('<td>'+input_id+'</td>');
        $control_name   = $('<td>'+control_name+'</td>');
        $delete_control = $('<td class="remove">'+svgs.cross+'</td>');

        $delete_control.click(function(){
          midi_mapper.remove_mapping(input_id,control_id,midi_mapper.update_rows);
        });

        $control_row = $('<tr></tr>')
          .attr('input-id',input_id)
          .append($input_id)
          .append($control_name)
          .append($delete_control);

        $table.append($control_row);

      });

    });
  },

  illuminate_row:function(input_id){
    if( midi_mapper.window == null ){ return }
    if( !midi_mapper.body ){ return }
    if( !midi_mapper.body.is(':visible') ){ return }
    
    // used to make sure the row variable does not get overwritten when multiple controls are touched
    var scoped_variables = {};

    // find the row
    scoped_variables.$row = midi_mapper.body.find('[input-id='+input_id+']');
    if( scoped_variables.$row.length == 0 ){ return }

    // illuminate row
    scoped_variables.$row.addClass('active');

    // scroll to row
    midi_mapper.body.stop().animate({
      scrollTop:scoped_variables.$row.offset().top - 70
    },50);

    // fade it out
    scoped_variables.fadeout_timer = setTimeout(function(){
      scoped_variables.$row.removeClass('active');
    },1000);

  },

  /* * * * * * * * * * * * */
  /*                       */
  /* UI Button Presses     */
  /*                       */
  /* * * * * * * * * * * * */

  import_map:function(e){

    // get the file path from the input field
    import_file = e.target.value;
    e.target.value = '';

    // save the current midi map
    midi_mapper.save(function(){

      // get file name from path
      import_file_name = path.basename(import_file);

      if(import_file_name.indexOf('.json') == -1 ){
        alert('Error: '+import_file_name+' is not a MIDI map.');
        console.log('Error: '+import_file_name+' is not a MIDI map.');
        return;
      }

      // declare new destination path
      imported_file_destination = midi_mapper.map_folder + '/' + import_file_name;

      // copy in the map
      copy_file( import_file, imported_file_destination, function(err){

        if(err){
          console.log(err);
          return;
        }

        // set the "last used map" to the new one, so when the selector loads it will load the new one
        localStorage.midi_map = path.basename( import_file_name, '.json' );
        midi_mapper.update_map_selector();

        // load the new map
        midi_mapper.load_map( localStorage.midi_map );

      })

    },function(){
      alert('There was an issue saving the current map beform importing the new map.');
      console.log('There was an issue saving the current map beform importing the new map.');
    });
  },

  export_map:function(e){
    map_file = e.target.value;
    
    midi_mapper.save(function(){
      // alert('the map was saved to '+midi_mapper.map_file_location);
      // alert('copying map to '+map_file);
      copy_file(midi_mapper.map_file_location,map_file,function(err){

        if(err){
          console.log(err);
          return;
        }

        console.log('export success');

      });

    },function(){
      alert('There was an issue exporting the map.');
      console.log('There was an issue exporting the map.');
    });
  },

  new_map:function(){
    new_map_name = prompt("Name for new map:");
    if( new_map_name == null || new_map_name == undefined || new_map_name == ' ' || new_map_name == '' ){ return; }

    // save the current map
    midi_mapper.save(function(){

      // reformat new map name
      localStorage.midi_map = new_map_name.replace(/ /g, '_');

      // set the location of the new map
      midi_mapper.map_file_location = gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_map + ".json";

      // initialize the new map
      midi.controls = {};
      midi_mapper.map_edited = true;

      // save the new map
      midi_mapper.save(function(){

        // update the selector
        midi_mapper.update_map_selector();

        // load the new map rows
        midi_mapper.load_map( localStorage.midi_map );

      },function(){
        alert('there was an error saving the new map')
      });

    },function(){
      alert('There was an issue saving the current map.');
    });
  },

  delete_map:function(){
    map_name = localStorage.midi_map.replace(/_/g,' ');
    delete_confirm = confirm('Are you sure you want to delete '+map_name+'?');
    if( !delete_confirm ){return;}
    fs.unlink( midi_mapper.map_file_location, function(err){
      if(err){console.log(err)}
      
      // update the selector
      midi_mapper.map_edited = false;
      midi_mapper.update_map_selector();
      midi_mapper.body.find('select').trigger('change');

    });
  },

  remove_mapping:function(input_id,control_id,callback){

    mapped_functions = midi.controls[input_id].mapped_functions;
    control_index = mapped_functions.indexOf( control_id );
    
    if (control_index > -1) {
      midi.controls[input_id].mapped_functions.splice(control_index, 1);
      $('[control-id='+control_id+']').removeClass('mapped');
      midi_mapper.map_edited = true;
    }

    if(callback){
      callback();
    }
  },

  /* * * * * * * * * * * * */
  /*                       */
  /* Deck Control Mapping  */
  /*                       */
  /* * * * * * * * * * * * */

  map_control:function(input_id){

    control_id = midi_mapper.control_id_to_map;
    midi_mapper.map_edited = true;

    // add the input_id to the waiting element
    $('.midi-waiting').attr('map',input_id).addClass('mapped');

    // add this input_id to the loaded midi control map
    if( midi.controls[input_id] == undefined ){
      // initialize object for this midi input_id
      midi.controls[input_id] = {
        mapped_functions:[]
      }
    }

    // shortcut to the mapped functions
    mapped_functions = midi.controls[input_id].mapped_functions;

    // make sure the selected control_id is not already mapped to this input_id
    if( mapped_functions.indexOf( control_id ) == -1 ){

      // add the new control to the MIDI map
      mapped_functions.push( control_id );
    }

    // if this control_id is for automation, save the control_id to automate as an option
    if( control_id == 'automation_speed' ){
      // initialize the options object
      if( midi.controls[input_id].options == undefined ){
        midi.controls[input_id].options = {};
      }
      midi.controls[input_id].options.control_id_to_automate = midi_mapper.control_id_to_map_for_automation;
    }

    console.log('input_id: '+input_id);
    console.log('control_id: '+control_id);
    console.log('mapped_functions: '+mapped_functions);

    midi_mapper.update_rows();
    midi_mapper.reset_map();
  },

  reset_map:function(){
    // reset deck controls for new mapping
    $('body').removeClass('modal-show');
    $('.midi-waiting').removeClass('midi-waiting');
    midi_mapper.waiting_for_midi_input = false;
    midi_mapper.control_id_to_map = null;
    midi_mapper.control_id_to_map_for_automation = null;
  },

}

midi_mapper.init();
