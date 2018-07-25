var wind={

  update:{
    speed_x:function(value){
      deck.updateState( 'xy', 'wind_speed_x', value )
    },
    speed_y:function(value){
      deck.updateState( 'xy', 'wind_speed_y', value )
    },
    intensity:function(value){
      deck.updateState( 'slider', 'wind_intensity', value )
    },
  },

  draw: function(){

    if( state.wind_run == true && state.wind_speed_x == 64 && state.wind_speed_y == 64 ){
      deck.updateIndicatorState('wind_run',false)
      deck.automator.stop_automations(['wind_intensity'])
    }else if( state.wind_speed_x !== 64 || state.wind_speed_y !== 64 ){
      deck.updateIndicatorState('wind_run',true)
    }

    if( !state.wind_run ){ return }

    _blowable_images = document.getElementsByClassName('blowable')
    
    for( var i=0; i < _blowable_images.length; i++ ){

      // get the image
      _blowable_image = _blowable_images[i]

      // get css values of image

      css_left = parseInt( _blowable_image.style.left );
      if( !css_left ){ css_left = 0 }

      css_top = parseInt( _blowable_image.style.top );
      if(!css_top){ css_top = 0 }

      // remove images that go offscreen in chain
      if( chain.run ){

        css_width  = parseInt( _blowable_image.style.width )
        css_height = parseInt( _blowable_image.style.height )

        if( css_left < 0 - css_width || css_left > window.innerWidth || css_top < 0 - css_height || css_top > window.innerHeight ){
          _blowable_image.remove()
          chain.amount--

          // reduce i because we are removing an element from the array. If we dont reduce it the for loop skips an image
          i--
          continue;
        }
      }     

      // center the value, produce negatives if needed
      x_offset = state.wind_speed_x - (controls.wind_speed_x.max / 2)
      y_offset = state.wind_speed_y - (controls.wind_speed_y.max / 2)

      // adjust for intensity
      x_offset = Math.floor(x_offset * state.wind_intensity)
      y_offset = Math.floor(y_offset * state.wind_intensity)

      unit = 'px'

      // apply new styles
      _blowable_image.style.left = css_left + x_offset + unit
      _blowable_image.style.top  = css_top  + y_offset + unit

    }
  }
}