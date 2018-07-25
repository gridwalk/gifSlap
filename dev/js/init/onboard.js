// onboarding flow.

// 1 -> GIF files
// 2 -> Registration

// for testing the onboarding flow:

// localStorage.gif_folder = 'null';

onboard = {
  steps:[],
  step_cursor:0,
  step_functions:{
    'load-gifs':function(){
      settings_ui.init_gif_folder_ui();
      chain_clicks(); // called from helpers.js
      onboard.show_modal_content('load-gifs');
      onboard.enter_function = function(){
        $('#gif-folder').click();
      }
    }
  },
  next_step:function(){

    // if there are still steps in the queue, show them
    if( onboard.step_cursor < onboard.steps.length ){
      onboard.step_functions[ onboard.steps[ onboard.step_cursor ] ]();
      onboard.step_cursor++;
    }else{
      location.reload();
    }
  },
  show_modal_content:function(id,callback){
    
    // hide all the modal contents
    $('.modal-content').hide();

    // show the specific one
    $('#onboard #'+id).fadeIn(200,callback);

  },
  load_gifs_continue:function(){ // called by callback html attribute on file picker element
    
    $('#gifs-amount-message').fadeIn(200);
    $('#load-gifs-continue').fadeIn(200);
    
    // allow enter button to press the continue button
    onboard.enter_function = function(){
      $('#onboard .continue-button').click();
    }

    $('#onboard .continue-button').not('.disabled').click(function(){
      onboard.next_step();
      onboard.enter_function = null;
    });
  },
  enter_function:null,
  enter_handler:function(e){

    if( e.which !== 13 ){ return; }
    if( onboard.enter_function == null ){ return; }
    onboard.enter_function();
  }
}

// set up enter key handler
$('body').on('keyup',onboard.enter_handler)

// push step ids to the array of steps
if( localStorage.gif_folder == 'null' ){ onboard.steps.push('load-gifs'); }

// show the modal if any of the onboarding items need to be done
if( onboard.steps.length ){

  // show the modal
  $('#onboard-modal').show(200,function(){

    // show the step based on step ID
    onboard.next_step();

  });
  
  throw new Error('Onboarding');
}

// they made it past onboarding!

$('#onboard').remove();

// remove key handlers set in onboarding
$('body').off()