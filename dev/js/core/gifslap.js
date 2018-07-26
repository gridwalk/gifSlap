// object for high level functions and variables.
gifslap = {

  toggle:{
    paused:function(){
      deck.updateState( 'toggle', 'paused', !state.paused )
    }
  },

  update:{
    zoom:function(zoomLevel){
      deck.updateState(null,'zoom_level',zoomLevel)
      win.zoomLevel = zoomLevel
    }
  },









  all_gifs: Array(), // set in gifslap.load_gifs();
  r:function(max){
    return Math.round(Math.random() * max);
  },
  
  take_screenshot:function(filePath, callback){  
    win.capturePage(function(img){
      var base64Data = img.replace(/^data:image\/(png|jpg|jpeg);base64/,'')
      fs.writeFile(filePath, base64Data, 'base64',function(err){
        if(err) console.log(err)
        callback(filePath)
      })
    },{ format: "jpeg", datatype: 'raw' })
  },

  load_gifs: function(callback){

    if( localStorage.gif_folder == 'null' || localStorage.gif_folder == "No Folder Selected" ){ return; }

    // if folder has moved return
    if( !fs.existsSync(localStorage.gif_folder) ){ return }

    gifslap.all_gifs = Array();
    gifs_folder_contents = fs.readdirSync(localStorage.gif_folder);
    gifs_folder_contents.forEach(function( item ){
      if( item.toLowerCase().indexOf('.gif') !== -1 ){    
        item = localStorage.gif_folder + "/" + item;
        item = item.replace(/ /g,'%20');
        gifslap.all_gifs.push( item );
      }
    });

    // randomize
    if( localStorage.randomize == 'true' ){
      shuffle_array(gifslap.all_gifs);
    }

    if( callback ){ callback(); }
  }
}

gifslap.load_gifs();