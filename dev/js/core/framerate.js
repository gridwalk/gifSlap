var framerate = {

  target: 30,
  current: 0,
  average: 0,
  this_loop_time: new Date,
  last_loop_time: new Date,
  buffer_length: 15,
  buffer: Array(),
  viewUpdateCounter:0,
  update:function(){

    // check framerate
    framerate.this_loop_time = new Date;
    framerate.current = Math.round( 1000 / ( framerate.this_loop_time - framerate.last_loop_time) );
    framerate.last_loop_time = framerate.this_loop_time;
    
    // determine average
    framerate.buffer.push( framerate.current );

    if( framerate.buffer.length > framerate.buffer_length ){
      framerate.buffer.shift();
    }

    sum = 0;
    for( var i = 0; i < framerate.buffer.length; i++ ){
      sum += framerate.buffer[i];
    }

    framerate.average = Math.round( sum/framerate.buffer.length, 1 );

    // limit the amount of view updates
    framerate.viewUpdateCounter++
    if( framerate.viewUpdateCounter >= framerate.buffer_length ){
      framerate.viewUpdateCounter = 0

      // update framerate in deck
      if(deck !== null){
        deck.framerate.set( framerate.average );
      }
    }   

  }
}