var gui = require('nw.gui');

var deck = {
  current_view: 'controls',
  win: gui.Window.get()
}

replace_svgs(); // called from helpers.js
chain_clicks(); // called from helpers.js

// handle menu item clicks
$('[menu-target]').click(function(){
  target = $(this).attr('menu-target');
  $('.panel').hide();
  $('#'+target).show();

  // set the current view. Used to make sure we don't render nonvisible data
  deck.current_view = target;
});

// open external browser 
$('a.external-link').click(function(){
  href = $(this).attr('data-href');
  gui.Shell.openExternal(href);
});

// resize this window to half the screen
window_height = window.screen.availHeight;
window_width = window.screen.availWidth;

menu_bar_height = 0;
if( localStorage.operating_system == 'mac' ){ menu_bar_height = 22; }

deck.win.resizeTo( window_width/2, window_height+5 );
deck.win.moveTo( 0, menu_bar_height );

// close all windows when this window closes
deck.win.on('close', main.window_ui.close_all_windows);

// run the check for updates
main.updater.check_for_updates();