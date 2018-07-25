preview_screen = {
  load:function(){
    if( gui.Screen.Init !== undefined ){
      gui.Screen.Init();  
    }

    gui.Screen.chooseDesktopMedia(["window"], function(streamId) {
      var vid_constraint = {
        mandatory: {
          chromeMediaSource: 'desktop', 
          chromeMediaSourceId: streamId, 
          maxWidth: 400, 
          maxHeight: 300,
          minFrameRate: 10,
          maxFrameRate: 30
        }, 
        optional:[]
      };

      console.log(streamId);

      navigator.webkitGetUserMedia({audio:false, video:vid_constraint},
        function(stream){
          document.getElementById('preview').src = URL.createObjectURL(stream);
          $('#enable-preview').hide();
          
          stream.onended = function() {
            // $('#enable-preview').show();
          };

        },function(error){
          console.log('failure',error);
      });
    });
  }
}

$('#preview, #enable-preview').click(function(){
  preview_screen.load();
});

