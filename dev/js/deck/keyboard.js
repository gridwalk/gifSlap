keyboard = {
  init:function(){
    
    $(window).keydown(function(e){
      if( keyboard.controls[e.which] && keyboard.controls[e.which]['keydown'] ){
        keyboard.controls[e.which]['keydown']()
      }      
    })

    $(window).keyup(function(e){
      if( keyboard.controls[e.which] && keyboard.controls[e.which]['keyup'] ){
        keyboard.controls[e.which]['keyup']()
      }      
    })


  },
  state:{
    shift:false,
    control:false
  },
  reset_modifiers:function(){
    keyboard.state.shift = false
    keyboard.state.control = false
    $('body').removeClass('keydown-shift')
    $('body').removeClass('keydown-control')
  },
  controls:{

    '16':{ // SHIFT
      keydown:function(){
        keyboard.state.shift = true
        $('body').addClass('keydown-shift')
      },
      keyup:function(){
        keyboard.state.shift = false
        $('body').removeClass('keydown-shift')
      }
    },

    '17':{ // CONTROL
      keydown:function(){
        keyboard.state.control = true
        $('body').addClass('keydown-control')
      },
      keyup:function(){
        keyboard.state.control = false
        $('body').removeClass('keydown-control')
      }
    },

    '27':{ // ESC
      keydown: function(){ 

        // exit preset delete mode
        presets.deleteButtonActive = false
      
        // exit midi waiting screen
        if( midi_mapper.waiting_for_midi_input ){
          midi_mapper.reset_map();
        }

        // exit midi learn mode
        else if( $('#controls').hasClass('mapping') ){
          $('#controls').removeClass('mapping');
          $('#map-midi').removeClass('active');
        }
        
      }
    },

    '32':{ // SPACE
      keydown: function(){
        main.controls.pause_play.press()
      }
    }    
  }
}

keyboard.init();