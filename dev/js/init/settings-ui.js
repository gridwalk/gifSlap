
// used in onboarding AND on deck settings

settings_ui = {

  init_gif_folder_ui: function(){

    $('#gif-folder').change(function(){
      folder = $(this).val();
      if( localStorage.operating_system == 'win' ){
        folder = folder.replace(/\\/g,'/');
      }

      if( folder == '' ){
        folder = localStorage.gif_folder;
      }

      localStorage.gif_folder = folder;
      settings_ui.update_gif_folder_readout(folder);
      gifslap.load_gifs( settings_ui.update_gifs_amount );

      callback = $(this).attr('callback');
      if(callback){ 
        eval( callback+'();' );
      }

    });   

  },

  // makes the folder input field as wide as the content
  update_gif_folder_readout: function(folder){
    $('#gif-folder-readout').val(folder).attr('size', folder.length + 2);
  },

  update_gifs_amount: function(){
    $('#gifs-amount').html( gifslap.all_gifs.length );

    if( gifslap.all_gifs.length == 0 ){
      $('#load-gifs-continue a').addClass('disabled');
    }else{
      $('#load-gifs-continue a').removeClass('disabled');
    }

  }
}