var corner_box = {

  update:{
    opacity:function(value){
      deck.updateState( 'slider', 'corner_box_opacity', value )
      deck.updateIndicatorState('corner_box_run',!!value)
      corner_box.draw()
    },
    size:function(value){
      deck.updateState( 'slider', 'corner_box_size', value )
      corner_box.draw()
    },
    position_x:function(value){
      deck.updateState( 'xy', 'corner_box_position_x', value )
      corner_box.draw()
    },
    position_y:function(value){
      deck.updateState( 'xy', 'corner_box_position_y', value )
      corner_box.draw()
    },
    source:function(src) {
      deck.updateStateString('corner_box_src',src)
      corner_box.refreshImage()
    }

  },

  draw:function(){

    width   = state.corner_box_size
    posX    = state.corner_box_position_x
    posY    = state.corner_box_position_y
    opacity = state.corner_box_opacity

    setStyles(corner_box.box,{
      opacity:   opacity * .01,
      width:     width+'%',
      left:      posX+'%',
      top:       posY+'%',
      transform: 'translate(-'+posX+'%,-'+posY+'%)'
    })

    // remove image when opacity is 0
    if( !corner_box.using_webcam ){
      if(opacity == 0 ){
        corner_box.box.innerHTML = ''
      }else if( !corner_box.box.innerHTML ){
        corner_box.refreshImage()
      }
    }
  },

  refreshImage:function() {

    src = state.corner_box_src
    if(src == null){
      src = images.active_set[images.cursor]
    }

    corner_box.box.innerHTML = '<img class="locked" src="'+src+'" style="width:100%" />'
  },
  
  box:null, // set in init()
  init:function(){
  
    $corner_box = $('<div id="corner-box" ></div>').css({
      'width': "30%",
      'position': 'absolute',
      'top': '0px',
      'left': '0px;',
      'z-index':'100000000000',
      'opacity':'0'
    })

    $('#container').append($corner_box)

    corner_box.box = $corner_box[0]
    
  },
  
  set_from_preview(){
    
    src = images.active_set[ images.cursor + images.skip_cursor ]
    corner_box.update.source(src)
    
    controls.skip_next_gif.press()
    corner_box.disable_webcam()
    deck.$('[control-id="send_cam_to_corner_box"]').removeClass('active')
  },

  using_webcam:false,
  toggle_webcam:function(){
    if( corner_box.using_webcam ){
      corner_box.disable_webcam()
    }else{
      corner_box.enable_webcam()
    }

  },
  enable_webcam:function(){
    corner_box.box.innerHTML = '<video autoplay src="'+webcam.stream_src+'" style="width:100%" ></video>'
    corner_box.using_webcam = true
  },
  disable_webcam:function(){
    corner_box.refreshImage()
    corner_box.using_webcam = false
  }
}

corner_box.init();