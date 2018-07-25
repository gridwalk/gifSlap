var framerate = {
  set:function(value){
    if( deck.current_view !== 'controls' ){ return; }
    $('#current-framerate').val(value);

    if( value < main.framerate.target ){
      $('#current-framerate').css('background-color','#FF9F9F');
    }else{
      $('#current-framerate').css('background-color','#fff');
    }
  },
  init:function(){
    $('#target-framerate').change(function(){
      main.framerate.target = parseInt($(this).val());
    });
  }
}

framerate.init();