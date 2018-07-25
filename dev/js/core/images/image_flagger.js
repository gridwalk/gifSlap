var image_flagger = {
  run: function(){
    images_to_flag = images.get_sources();

    data_string = 'images='+images_to_flag;
    
    $.ajax({
      type:"POST",
      data: data_string,
      url: "core/images/image_flagger.php",
      success:function( data ){

        // alert(data);
        
      }
    });
  }
}