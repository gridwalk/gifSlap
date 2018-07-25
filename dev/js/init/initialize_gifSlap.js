/* * * * * * * * * * * *
*                      *
* initialization       *
* * * * * * * * * * * **/

// function to declare configuration variables
init_storage = function(key,default_value){
  if( localStorage[key] == undefined || localStorage[key] == "undefined" ){
    console.log("initializing "+key+" as "+default_value);
    localStorage[key] = default_value;
  }
}

// folder path containing the users gifs
init_storage('gif_folder',null);

// name of last selected MIDI map
init_storage('midi_map', 'New_MIDI_Map');

// stringified JSON of midi map
init_storage('midi_map_json',"{}");

// randomization of gifs
init_storage('randomize','true');

// type of next-gif preview
init_storage('next_gif_preview','canvas');

// gamepad usage
init_storage('gamepad','false');

// refreshing state
init_storage('refreshing','false');

// platform this is running on
var isWin = /^win/.test(process.platform);
if( isWin ){
  init_storage('operating_system','win');
}else{
  init_storage('operating_system','mac');
}

// Make folders

// function to create a folder if it doesnt exist
init_folder = function(folder_path,callback){
  fs.exists( folder_path, function(exists) {
    if( !exists) {
      fs.mkdir(folder_path,function(err){
        if(err){console.log(err)}
        if(callback){callback();}
      });      
    }
  });
}

// create control_layouts folder
localStorage.control_layouts_folder = gui.App.dataPath + "/control_layouts";
init_folder(localStorage.control_layouts_folder,function(){

  // create MIDI controls folder
  init_folder( localStorage.control_layouts_folder+"/midi",function(){
    
    // copy over included midi maps

  });

  // we must reload because the control folders must be fully initialized before checking their contents.
  location.reload();
});


// create presets folder
localStorage.presets_folder = gui.App.dataPath + "/presets";
init_folder(localStorage.presets_folder)


// global var, links to deck.state in loop.js
var state;