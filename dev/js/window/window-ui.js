// declare deck variable
var deck = null;

var window_ui = {
  init:function(){

    // show window
    win.show();

    //win.showDevTools()


    // show loading screen if not refreshing
    if( localStorage.refreshing !== 'true' ){
      $('#loading').show();

      // resize this window to half the screen
      window_height = window.screen.availHeight;
      window_width = window.screen.availWidth;

      menu_bar_height = 0;
      if( localStorage.operating_system == 'mac' ){ menu_bar_height = 22; }

      win.resizeTo( window_width/2, window_height+5 );
      win.moveTo( window_width/2, menu_bar_height );

    }    

    // Listen to main window's close event
    win.on('close', window_ui.close_all_windows);

    // prevent default behavior from changing page on dropped file
    window.ondragover = function(e) { e.preventDefault(); return false };
    window.ondrop = function(e) { e.preventDefault(); return false };

  },
  
  closing:false,
  close_all_windows:function(){

    if( window_ui.closing == true ){ return; }
    window_ui.closing = true;

    main_win = win;
    deck_win = deck.window;
    midi_win = deck.midi_mapper.window;

    deck.midi_mapper.save(function(){

      // success, or save not needed
      if( midi_win ){ midi_win.close(true); }
      deck_win.close(true);
      main_win.close(true);

      // close the hell out of it
      if(localStorage.operating_system == 'win'){
        exec('taskkill /f /im gifSlap.exe');
      }

    },function(err){

      // save failed
      console.log('Window not closing. Save failed: '+err);
      window_ui.closing = false;

    });    

  },

  deck:null,
  launch_deck: function(){
    if( localStorage.refreshing == 'true' ){

      // refreshing means deck is already open. Don't open the deck
      localStorage.refreshing = 'false';

    }else{

      // Deck is not open yet so open it
      window_ui.deck = gui.Window.open('./deck.html',{
        title:'gifSlap Control Deck',
        // toolbar:false,
        frame:true,
        width:1000,
        min_width:600,
        height:500,
        // show: false // shown in loop.js once the deck has loaded
      });

      // set the global "deck" variable for access to decks variables and functions
      window_ui.deck.on('document-start',function(){
        deck = window_ui.deck.window;
      })

      // deck blur handler
      window_ui.deck.on('blur',function(){
        deck.keyboard.reset_modifiers()
      })

    }
  },
  restart:function(){

    var child;
    var child_process = require("child_process");
    
    if (process.platform == "darwin")  {
      child = child_process.spawn("open", ["-n", "-a", process.execPath.match(/^([^\0]+?\.app)\//)[1]], {detached:true});
    }else{
      child = child_process.spawn(process.execPath, [], {detached: true});
    }

    setTimeout(function(){
      child.unref();
      window_ui.close_all_windows();
    },500);    

  }
}

window_ui.init();
window_ui.launch_deck();