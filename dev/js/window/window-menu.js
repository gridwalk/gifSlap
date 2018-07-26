// load Window controls API
var win = gui.Window.get();
win.showDevTools()

// initialize menu bar
var menubar = new gui.Menu({type:"menubar"});

/* * * * * * * * * **
*                   *
*   MENU BAR MAC    *
*                   *
* * * * * * * * * * */

if( localStorage.operating_system == 'mac' ){
  menubar.createMacBuiltin("gifSlap");
  win.menu = menubar;

  // menubar.items[0] gifSlap =====================

  gifslap_submenu = menubar.items[0].submenu;

  // remove "About gifSlap" because it is wrong
  gifslap_submenu.remove(gifslap_submenu.items[0]);

  // insert to the gifSlap menu dropdown
  
  // nothing

  // menubar.items[1] Edit =====================

  // nothing yet

  // menubar.items[2] Window =====================

  window_submenu = menubar.items[2].submenu;

  // remove separator
  window_submenu.remove(window_submenu.items[2]);

  // remove "Bring All to Front"
  window_submenu.remove(window_submenu.items[2]);

  // insert to the Window menu dropdown
  window_submenu.insert( new gui.MenuItem({
    label:"Toggle Fullscreen",
    click: function(){
      win.isFullscreen = !win.isFullscreen;
    }
  }));

  // menubar.items[3] Help  =====================

  help = new gui.Menu();
  help.append( new gui.MenuItem({
    label:"Open Docs Webpage",
    click:function(){
      gui.Shell.openExternal('http://gifslap.com/docs');
    }
  }));
  // extra space after "Help" prevents a search bar from appearing in the dropdown.
  win.menu.append(new gui.MenuItem({ label: 'Help ', submenu: help}));

  // settings = new gui.Menu();
  // settings.append( new gui.MenuItem({
  //   label:"Change GIF Folder",
  //   click:function(){
      
  //   }
  // }));
  // win.menu.append(new gui.MenuItem({ label: 'Settings', submenu: settings}));
  

  // win.menu.insert(new gui.MenuItem({ label: 'File', submenu: file}), 1);

}

/* * * * * * * * * * *
*                    *
*  MENU BAR WINDOWS  *
*                    *
* * * * * * * * * * */

if( localStorage.operating_system == 'win' ){
  
  window_menu = new gui.Menu();
  window_menu.append( new gui.MenuItem({
    label:"Fullscreen",
    click:function(){
      win.isFullscreen = !win.isFullscreen;
      $('.leave-fullscreen').show();
    }
  }));
  menubar.append(new gui.MenuItem({ label: 'Window', submenu: window_menu}));  

  help = new gui.Menu();
  help.append( new gui.MenuItem({
    label:"Open Docs Webpage",
    click:function(){
      gui.Shell.openExternal('http://gifslap.com/docs');
    }
  }));
  menubar.append(new gui.MenuItem({ label: 'Help', submenu: help}));

  win.menu = menubar;

}