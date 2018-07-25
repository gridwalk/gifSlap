// set up the corners

$corners = $("<div id='corners'></div>").css({
  'position': 'absolute',
  'height': '100%',
  'width': '100%',
  'left': '0px',
  'top': '0px',
  'z-index': '3'
});

$quad1 = $("<div id='corners-quad1' class='corners-quad'>").css({
  'position':'absolute',
  'left':'0',
  'top':'0',
  'width':'50%',
  'height':'50%'
});

$quad2 = $quad1.clone().attr('id','corners-quad2').css({
  'left':'50%',
  '-webkit-transform': 'scaleX(-1)'
});

$quad3 = $("<div id='corners-quad3' class='corners-quad'>").css({
  'position':'absolute',
  'left':'0',
  'bottom':'0',
  'width':'50%',
  'height':'50%',
  '-webkit-transform': 'scaleY(-1)'
});

$quad4 = $quad3.clone().attr('id','corners-quad4').css({
  'left':'50%',
  '-webkit-transform': 'scaleX(-1) scaleY(-1)'
});

$corners.append( $quad1 );
$corners.append( $quad2 );
$corners.append( $quad3 );
$corners.append( $quad4 );

$('#container').append($corners);

var corners = {

  update:{
    quads_rotation:function(value){
      deck.updateState( 'slider', 'corners_quadrant_rotation', value )
      corners.rotate_quads(value)
    }
  },

  run:false,
  image_amount: 0,
  box:$corners,
  z:0,
  previous_height:0,
  init:function(){
    if( corners.run == false ){ corners.run = true; }
    corners.image_amount = 0;
  },
  stop:function(){
    corners.run = false
    // turn off corners automations
    deck.automator.stop_automations(['rotate_quads'])
  },
  draw:function(){

    if(!corners.run){return;}

    height = images.get_property('height');
    if( height < corners.previous_height ){ corners.z++; }
    corners.previous_height = height;
    
    
    opacity = state.single_opacity

    elementType = "<img />"
    src = images.active_set[images.cursor]

    if( images.using_webcam ){
      elementType = "<canvas />"
      src = webcam.stream_src
    }

    // generate the new image
    $new_image = $(elementType)
      .attr("src",src)
      .attr("class","gif corners blowable")
      .css({
        'height':        state.height,
        'width':         state.width,
        'top':           '0px',
        'left':          '0px',
        'z-index':       corners.z,
        'opacity':       opacity,
        'position':      'absolute',
        'border-radius': state.border_radius+"%",
        '-webkit-transform': 'rotate('+state.single_rotate+'deg) scale('+state.image_scale+')'
      });

    if( state.border_image_on ){
      $new_image.css({
        'border-width':state.border_image_width,
        'border-image':'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat',
        "border-image-slice":state.border_image_slices+"%"
      });
    }

    // prepare webcam canvas size
    if( images.using_webcam ){
      $new_image
        .attr('height',webcam.height)
        .attr('width',webcam.width)
    }

    clones = []
    clones[0] = $new_image.clone()
    clones[1] = $new_image.clone()
    clones[2] = $new_image.clone()
    clones[3] = $new_image.clone()

    // draw video image to canvases
    if( images.using_webcam ){
      for (var i = 0; i < clones.length; i++) {
        ctx = clones[i][0].getContext('2d')
        ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
      }
    }

    // quad 1,2,3,4
    clones[0].prependTo( $('#corners-quad1') )
    clones[1].prependTo( $('#corners-quad2') )
    clones[2].prependTo( $('#corners-quad3') )
    clones[3].prependTo( $('#corners-quad4') )

    // cleanup
    corners.image_amount = $('#corners .gif').length;
    while( corners.image_amount > state.max_images_amount && corners.image_amount > 4 ){

      $('.corners-quad').each(function(){
        if( $(this).find('.gif').length > 1 ){
          $(this).find('.gif').last().remove();
        }
      });
      
      corners.image_amount = $('#corners .gif').length;
    }
  },
  rotate_quads:function(degrees){
    $quad1.css('-webkit-transform','rotate('+degrees+'deg)');
    $quad2.css('-webkit-transform','scaleX(-1) rotate('+degrees+'deg)');
    $quad3.css('-webkit-transform','scaleY(-1) rotate('+degrees+'deg)');
    $quad4.css('-webkit-transform','scaleX(-1) scaleY(-1) rotate('+degrees+'deg)');
  },
  equalize_quadrants:function(){
    controls.height.change( window.innerHeight/2 )
    controls.width.change( window.innerWidth/2 )
  }
}