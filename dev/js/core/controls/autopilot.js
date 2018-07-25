var autopilot = {

  run:false,

  // rotation
  rotation_speed: 0,
  size_multiplier: 1,

  // direction
  chain_x_mod: 0,
  chain_y_mod: 0,

  // speed
  speed_mod: 1,

  // counter counts up, when it reaches frequency it draws.
  counter:0,
  frequency:10,

  toggle:function(){
    deck.updateState( 'toggle', 'autopilot_run', !state.autopilot_run )
    if(state.autopilot_run){
      mode_changer.start('chain');
    }
  },

  turn_off:function(){
    deck.updateState( 'toggle', 'autopilot_run', false )
  },

  // outputs actions to the screen
  show_log: false,
  log: function(message){
    if(!autopilot.show_log){ return }
    $('#text').prepend('<div>'+message+'</div>');
  },

  percent_chance:function(total,max,callback){
    if( gifslap.r(total) < max ){
      callback();
    }
  },

  

  // function runs inside the main loop
  modify_params:function(){

    if( !state.autopilot_run ) return

    // rotation
    rotation_value = (state.single_rotate + autopilot.rotation_speed) % 360
    if( rotation_value < 0 ){ rotation_value = 360 + rotation_value }
    images.update.rotation( rotation_value )

    // size
    newHeight = Math.round(state.height * autopilot.size_multiplier)
    controls.height.change( newHeight )

    // change images amount based on size and current amount
    if( state.height > 300 || state.max_images_amount > 80){

      autopilot.percent_chance(100,50,function(){
        controls.decrease_max_images.press();
      });

      
    }
    if( state.height < 200 && state.max_images_amount < 90 ){
      controls.increase_max_images.press();
    }

    // speed
    if( autopilot.speed_mod !== 0 ){
      newSpeed = +(state.chain_speed * autopilot.speed_mod).toFixed(2)
      controls.chain_speed.change( newSpeed )
    }

    // direction
    chain.update.direction_x( state.chain_direction_x + autopilot.chain_x_mod )
    chain.update.direction_y( state.chain_direction_y + autopilot.chain_y_mod )

    if( autopilot.chain_x_mod > window.innerWidth ){
      autopilot.chain_x_mod * -1;
    }

    if( autopilot.chain_y_mod > window.innerHeight ){
      autopilot.chain_y_mod * -1;
    }

    // wind
    if( autopilot.wind_multiplier !== 0 ){
      images.fly_off_dist = images.fly_off_dist * autopilot.wind_multiplier;
      if( images.fly_off_dist > 300 ){
        autopilot.wind_multiplier = .99
      }
    }

  },

  draw:function(){
    
    if( !state.autopilot_run ) return
    if( state.paused ) return 

    autopilot.counter++;
    if( autopilot.counter < autopilot.frequency ) return
    autopilot.counter = 0;

    if( autopilot.show_log ){
      $('#text div:nth-child(50)').nextAll().remove();
    }
    
    if( chain.run ){

      // reverse doubler
      if( state.chain_reverse_doubler_on ){

        // change to turn off reverse doubler
        autopilot.percent_chance(100,2,function(){
          controls.toggle_chain_reverse_doubler.press()
        })

      }else{

        // chance to turn on reverse doubler
        autopilot.percent_chance(100,5,function(){
          controls.toggle_chain_reverse_doubler.press()
        })
      }

      // remove by tail
      if( state.chain_remove_by_tail_on ){

        // chance to turn off remove by tail
        autopilot.percent_chance(100,2,function(){
          controls.toggle_chain_remove_by_tail.press()
        })

      }else{

        // chance to turn on remove by tail
        autopilot.percent_chance(100,5,function(){
          controls.toggle_chain_remove_by_tail.press()
        })

      }      

      // rotation
      if( autopilot.rotation_speed ){

        // chance to stop rotating
        autopilot.percent_chance(100,2,function(){

          autopilot.log('stopped rotating');
          autopilot.rotation_speed = 0;
        });
        

      }else{

        autopilot.percent_chance(100,2,function(){

          autopilot.log('started rotating');

          // degrees of rotation
          autopilot.rotation_speed = gifslap.r(4);

          // chance for negative rotation
          autopilot.percent_chance(100,50,function(){
            autopilot.rotation_speed = autopilot.rotation_speed * -1;
          });
        });
      }

      // Size
      if( autopilot.size_multiplier !== 1 ){

        // chance to stop grow/shrinking
        chance_to_stop_size_change = gifslap.r(100);
        if( chance_to_stop_size_change > 95 || state.height > 400 || state.height < 200 ){
          
          autopilot.log('stopped size change');
          autopilot.size_multiplier = 1;
        }

      }else{

        // chance to start size change
        autopilot.percent_chance(100,10,function(){

          autopilot.log('started size change');

          // grow or shrink
          grow_or_shrink = gifslap.r(1);
          if( grow_or_shrink == 0 && state.height < 400 ){
            
            // grow
            autopilot.size_multiplier = gifslap.r(2) * .01 + 1;  

          }else if( state.height > 200 ){

            // shrink
            autopilot.size_multiplier = 1 - gifslap.r(5) * .01;  

          }

        });

      }

      // Speed
      // chance to slow down
      if( autopilot.speed_mod == 1 ){
        autopilot.percent_chance(100,3,function(){
  
          autopilot.log('slowing down');


          // slow down.
          // how slow?
          autopilot.speed_mod = 1 - (gifslap.r(3)*.01);
  
        });
      }else{

        // chance to remove speed mod
        autopilot.percent_chance(100,10,function(){
  
          autopilot.log('full speed');


          autopilot.speed_mod = 1;
          newSpeed = +(gifslap.r(100) * .01).toFixed(2)
          controls.chain_speed.change( newSpeed )
  
        });
      }

      // opacity
      if( state.single_opacity == 1 ){

        // chance to change opacity
        autopilot.percent_chance(100,3,function(){

          autopilot.log('reduced opacity');
          controls.single_opacity.change( +((gifslap.r(90) + 10) * 0.01).toFixed(2) )

        })

      }else{

        // opacity is not 1. chance to bring it back to 1
        autopilot.percent_chance(100,3,function(){

          autopilot.log('restored opacity');

          controls.single_opacity.change(1)

        });

      }

      // wind
      if( autopilot.wind_multiplier !== 0 ){

        // chance to stop wind
        autopilot.percent_chance(100,3,function(){

          autopilot.log('stopped wind');

          autopilot.wind_multiplier = 0;
          images.fly_direction = null;

        });

      }else{

        // chance to start wind
        autopilot.percent_chance(100,10,function(){

          autopilot.log('started wind');

          // start wind
          
          images.fly_off_dist = 1;
          images.fly_direction = null;
          autopilot.wind_multiplier = 1.005;

          wind_direction = gifslap.r(4);
          if( wind_direction == 0 ){

            // up
            controls.wind_direction_up.press()

          }else if( wind_direction == 1 ){

            // left
            controls.wind_direction_left.press()

          }else if( wind_direction == 2 ){

            // down
            controls.wind_direction_down.press()

          }else if( wind_direction == 3 ){

            // right
            controls.wind_direction_right.press()

          }
          
        });

      }

      // Direction
      (function(){

        same_direction_chance = gifslap.r(100);

        if( autopilot.chain_x_mod !== 0 || autopilot.chain_y_mod !== 0 ){

          // chance for same direction is smaller for gradual arc directions
          if( same_direction_chance < 93 ){ 
            return;
          }  

        }else{

          // chance for same direction is greater if we are doing a straight direction
          if( same_direction_chance < 90 ){ 
            return;
          }  

        }

        

        direction = gifslap.r(8) + 1;
      
        controls.chain_direction_right.release();
        controls.chain_direction_up.release();
        controls.chain_direction_down.release();
        controls.chain_direction_left.release();
        autopilot.chain_x_mod = 0;
        autopilot.chain_y_mod = 0;

        autopilot.log('changing direction');

        if( direction == 1 ){

          // up

          // full speed up or gradual up
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_y_mod = gifslap.r(100) * .01 + 1;
            
          }else{
            controls.chain_direction_up.press();  
          }

          

        }else if( direction == 2 ){

          // down

          // full speed down or gradual down
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_y_mod = gifslap.r(100) * .01;
            
          }else{
            controls.chain_direction_down.press();  
          }

        }else if( direction == 3 ){

          // left
          
          // full speed left or gradual left
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_x_mod = gifslap.r(100) * .01 + 1;
            
          }else{
            controls.chain_direction_left.press();  
          }

        }else if( direction == 4 ){

          // right
          
          // full speed right or gradual right
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_x_mod = gifslap.r(100) * .01;
            
          }else{
            controls.chain_direction_right.press();  
          }

        }else if( direction == 5 ){

          // up right

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x(gifslap.r(20))
            chain.update.direction_y(gifslap.r(20) * -1)

          }else{

            // straight diagonal
            controls.chain_direction_right.press();
            controls.chain_direction_up.press();

          }

        }else if( direction == 6 ){

          // down right

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x(gifslap.r(20))
            chain.update.direction_y(gifslap.r(20))

          }else{          

            controls.chain_direction_right.press();
            controls.chain_direction_down.press();

          }

        }else if( direction == 7 ){

          // down left

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x( gifslap.r(20) * -1 )
            chain.update.direction_y( gifslap.r(20) )

          }else{

            controls.chain_direction_left.press();
            controls.chain_direction_down.press();

          }

        }else if( direction == 8 ){

          // up left

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x( gifslap.r(20) * -1 )
            chain.update.direction_y( gifslap.r(20) * -1 )

          }else{

            controls.chain_direction_left.press();
            controls.chain_direction_up.press();

          }

        }


      })();
    }

    else if( hallway.run ){


    }

  }
}