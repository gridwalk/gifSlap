module.exports = {
  bundle: {
    main: {
      scripts: [
        './js/vendor/jquery-1.9.1.min.js',
        './js/init/helpers.js',
        './js/init/initialize_gifSlap.js',
        './js/window/window-menu.js',
        './js/init/settings-ui.js',
        './js/core/gifslap.js',
        './js/init/onboard.js',

        // further scripts are only loaded after onboard has been completed

        './js/init/updater.js',

        // further scripts are only loaded after an update has finished installing
        
        './js/window/window-ui.js',        
        './js/core/controls/control_registry.js',
        './js/core/images/images.js',
        './js/core/framerate.js',
        './js/modes/*.js',
        './js/addons/*.js',
        './js/core/switch_state/mode_changer.js',
        './js/core/controls/autopilot.js',
        './js/core/controls/gamepad.js',
        './js/core/controls/bpm_sync.js',
        './js/video_input/webcam.js',
        './js/core/loop.js'
      ],
      options:{
        uglify: false,
        // uglify: true,
        result:{
          type:{
            scripts:function xJavascript(path){
              return "<script src='js/"+path+"' type='text/javascript'></script>";
            }
          }
        }
      }
    },
    deck: {
      scripts: [
        './js/vendor/jquery-1.9.1.min.js',
        './js/core/state/state.js',
        './js/assets/svgs.js',
        './js/init/helpers.js',
        // './js/init/initialize_gifSlap.js', // makes the MIDI mapper window work
        './js/deck/midi.js',
        './js/deck/deck-global.js',
        './js/deck/framerate.js',
        './js/deck/automator.js',
        './js/deck/deck-controls.js',
        './js/deck/midi-mapper.js',
        './js/deck/preview_screen.js',
        './js/init/settings-ui.js',
        './js/deck/deck-presets.js',
        './js/deck/deck-settings.js',
        './js/deck/keyboard.js',
        './js/video_input/webcam.js'
      ],
      options:{
        uglify: false,
        // uglify: true,
        result:{
          type:{
            scripts:function xJavascript(path){
              return "<script src='js/"+path+"' type='text/javascript'></script>";
            }
          }
        }
      }
    }
  }
};