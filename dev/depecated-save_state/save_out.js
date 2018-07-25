var save_out = {

  get_vars: function(){
    var keyValues = [];
    var globals = window; // window for browser environments
    var include = [
    'images',
    'circle',
    'chain',
    'center_pix',
    'hallway',
    'corners',
    'rainbow_bars',
    'midground',
    'bg_mod',
    'big_shrinker',
    'puncher',
    'corner_box',
    'mirror_gif',
    'keydown',
    'wind'];

    // exclude is for the elements within objects!
    var exclude = [
    'images.active_set',
    'images.active_set',
    'images.randomize_order',
    'images.cursor',
    'hallway.layer']
    
    // all the global variables
    for (var variable in globals) {

      //Only keep variables on the include list
      if( !include.contains(variable) )
        continue;

      //if it's an object (module, core file) then output all the sub variables
      if( typeof window[variable] == "object" ){
        
        object_to_save = window[variable];

        // iterate over elements in the object
        for(var obj_element in object_to_save){

          var property_name = variable + "." + obj_element;
          
          // discard certain object elements (list above)
          if( exclude.contains(property_name) )
            continue;

          // discard function elements
          if(typeof object_to_save[obj_element] == 'function')
            continue;

          // discard object elements
          if(typeof object_to_save[obj_element] == 'object')
            continue;

          //put strings in quotes
          if(typeof object_to_save[obj_element] == 'string'){
            object_to_save[obj_element] = "'"+object_to_save[obj_element]+"'";
          }

          keyValues.push(property_name + "=" + object_to_save[obj_element]);
        }

      }else{
        // variable is not an object
        keyValues.push(variable + "=" + globals[variable]);
      }

    }
    // build the string
    keyvalues = keyValues.join(';\n'); 
    keyvalues = keyvalues += ";";
    return keyvalues;
  },
  
  prompt_name: function(creation){
    var creation_name = null;
    var creation_name = prompt("Name this "+creation);
    if( creation_name == null ){
      return "exit";
    }

    return creation_name.replace(/\W|_/gi,"_");
  },

  save_scene: function(){
    
    // data string for ajax
    data_string = "";

    // get html from all the module containers
    // someday this should be detected, rather than manually listed
    containers = [];
    containers[0] = ["chain_container",chain.container];
    containers[1] = ["circle_container",$('#circle')];
    containers[2] = ["hallway_container",$('#hallway')];
    containers[3] = ["mirror_left",$('#mirror-left')];
    containers[4] = ["mirror_right",$('#mirror-right')];
    containers[5] = ["rainbow_bars",$('#rainbow_bars')];
    containers[6] = ["corners",$('#corners')];

    // write the HTML chunks to the data string
    containers.forEach(function( module_container ) {
      data_string += module_container[0] + "=";
      data_string += module_container[1].html() + "&";
    });

    // get name of scene
    name = save_out.prompt_name("scene");
    if(name == "exit"){ alert('quit'); return; }
    data_string += "name=" + name;

    // get the variables currently set
    data_string += "&scene_variables=" + save_out.get_vars();

    // get set name. Used to find the scenes folder in the set fodler
    data_string += "&set_name=" + sets_helper.get_name();

    // get the url of the active image
    data_string += "&active_image=" + images.active_set[images.cursor];

    // get the url of the next active image
    data_string += "&next_active_image=" + images.active_set[images.cursor+1];

    //get the style of the background
    data_string += "&bg_style=" + bg_mod.box.attr('style');

    //get the style of the inner background
    data_string += "&midground_style=" + midground.box.attr('style');

    // Send the data string to PHP, which will write the scene file
    $.ajax({
      type:"POST",
      data: data_string,
      url: "core/save_state/save_scene.php",
      success:function( data ){
        alert(data);
      }
    });


  },

  save_still: function(){

    name = save_out.prompt_name("composition");
    if(name == "exit"){ alert('quit'); return; }

    visuals_container = $('#container').html();
    images_to_copy = images.get_sources();

    data_string = 'name='+name+'&visuals_container='+visuals_container+'&images='+images_to_copy;
    
    // Saving a still composition
    $.ajax({
      type:"POST",
      data: data_string,
      url: "core/save_state/save_still.php",
      success:function( data ){
        //alert(data);
      }
    });

  }

}