//setup

$border_boxes_box = $('<div id="border-boxes-box"></div>').css({
  'position': 'absolute',
  'top':'0px',
  'height': '100%',
  'width': '100%',
  'z-index': '2',
  'box-sizing':'border-box'
});

$('#container').append($border_boxes_box);

var border_boxes = {
  run: false,
  box: $('#border-boxes-box'),
  current_cursor: 0,
  init: function(){
    border_boxes.run = true;
    border_boxes.set_boxes();

    // set active indicator on deck
    deck.controls.update_addon_running_indicator('border-boxes',true);
  },
  set_boxes:function(){
    i=0;
    while(i<4){
      $border_boxes_square = $("<div class='border-boxes-box'></div>")
      .css({
        'border-image':'url('+images.active_set[images.cursor+i]+') 48% repeat',
        'background-image':'url('+images.active_set[images.cursor+i+1]+')',
        'background-size':'cover',
        'width':'50%',
        'height':'50%',
        'float':'left',
        'border-width':'50px',
        'box-sizing':'border-box'
      });
      border_boxes.box.append($border_boxes_square);
      i++;
    }
  },
  draw: function(){
    if( !border_boxes.run ){ return; }
    if( images.cursor !== border_boxes.current_cursor ){
      border_boxes.box.empty();
      border_boxes.set_boxes();
      border_boxes.current_cursor = images.cursor;
    }

    $('.border-boxes-box').css({
      "border-image-slice":(state.width/42)+"%"
    });
    border_boxes.box.css('padding', state.height/10+"px");

  },
  die: function(){
    border_boxes.run = false;
    border_boxes.box.empty();
    deck.controls.update_addon_running_indicator('border-boxes',false);
  }
}