var webcam = {
  run:false,
  sources_cursor:0,
  sources:[],
  stream_src:null,
  _sourceVideo:null,
  width:480,
  height:270,

  init: function(){

    // stop any running webcams
    // webcam.die();    

    webcam.sources = []

    // get the stream
    MediaStreamTrack.getSources(function(sourceInfos){
      
      console.log(sourceInfos)

      // make new list of video sources
      for (var i = 0; i !== sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'video') {
          webcam.sources.push( sourceInfo.id );
        }
      }

      // choose video source from the list
      var videoSource = webcam.sources[ webcam.sources_cursor ]

      // specs of the video
      var constraints = {
        video: {
          optional: [{sourceId: videoSource}],
          // mandatory: {
          //   minWidth: webcam.width,
          //   minHeight: webcam.height
          // }
        }
      }

      // succes or error functions
      navigator.webkitGetUserMedia(constraints, webcam.successCallback, webcam.errorCallback)
    
    })
    
    
  },  
  
  successCallback: function(stream) {
    
    // remove any old source videos
    $('#source-video').remove()

    // show the send options on deck
    deck.$('#webcam-sends').removeClass('hidden');

    window.stream = stream; // make stream available to console
    webcam.stream_src = window.URL.createObjectURL(stream);
    webcam.run = true;

    // make new source video
    $webcamVideo = $('<video autoplay></video>')
      .attr('id','source-video')
      .attr('src',webcam.stream_src)
      .attr("class","locked")
      .css({
        'position':'absolute',
        'visibility':'hidden',
        'left':'-9999999px',
        'width':webcam.width+'px',
        'height':webcam.height+'px'
      })

    $('#container').append($webcamVideo)
    webcam._sourceVideo = $webcamVideo[0]

  },
  
  errorCallback: function(error){
    console.log('navigator.getUserMedia error: ', error);
  },
  
  die:function(){    
    
    // hide send options on deck
    deck.$('#webcam-sends').addClass('hidden')
    deck.$('[control-id="send_webcam_to_foreground"]').removeClass('active')
    deck.$('[control-id="send_webcam_to_background"]').removeClass('active')
    deck.$('[control-id="send_webcam_to_corner_box"]').removeClass('active')

    // turn off webcam everywhere
    corner_box.disable_webcam()
    images.disable_webcam()
    bg_mod.disable_webcam()

    // remove source video
    document.getElementById('source-video').remove()    

    if(window.stream)
      window.stream.stop()

    webcam.stream_src = null    
    webcam.run = false
  },

  next_input:function(){
    webcam.sources_cursor++
    if( webcam.sources_cursor >= webcam.sources.length ){
      webcam.sources_cursor = 0
    }
    webcam.init()
  }
}