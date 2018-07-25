updater = {
  // debug:true,
  debug:false,
  check_for_updates:function(){

    running_version  = gui.App.manifest.version;
    platform         = localStorage.operating_system;

    return http.get({
      host: 'gifslap.com',
      path: '/api/check_for_updates.php',
      headers: {
        'platform'       : platform,
        'gifslap_version': running_version,
        'nwjs_version'   : process.versions['node-webkit'],
        'debug'          : updater.debug
      }
    },function(response){

      // Continuously update stream with data
      var body = '';
      response.on('data', function(d) {
          body += d;
      });
      response.on('end', function() {

        // try to parse the message as json
        try{
          var data = JSON.parse(body);          
        }catch (err){
          // can't parse server response. This should not happen
          console.log(err);
        }

        // fail silently. again this should not happen
        if( data == undefined ){return;}
        
        $update_bar = deck.window.$('#update-bar');

        // gifslap update is available
        if( data.valid == true && data.update == true && data.update_url !== null){

          // mac - initiate normal update
          if( localStorage.operating_system == 'mac' ){
            
            $update_bar
            .addClass('active')
            .text("Update to version "+data.newest_version)
            .click(function(){
              localStorage.update_url = data.update_url;
              window_ui.restart();
            });

          }

          // windows: initiate download of setup file
          else{

            $update_bar
            .addClass('active')
            .text("Update to version "+data.newest_version)
            .click(function(){
              gui.Shell.openExternal('http://gifslap.com/api/latest_release.php?platform=win')
            });

          }

        }

        // new release (with new version of nwjs) is available (Mac only)
        if( data.valid == true && data.update == true && data.release_url !== null){

          $update_bar
          .addClass('active')
          .text("Update to version "+data.newest_version)
          .click(function(){
            gui.Shell.openExternal(data.release_url);
          });

        }

        // no update available
        else if( data.valid == true && data.update == false ){
          // do nothing
          console.log('no update available')
          return;
        }

      });
    }).on('error', function(err) {
        
      // handle errors with the request itself
      // do nothing
      console.log('could not check for updates without network connectivity')

    });
  },
  run: function(){

    update_url = localStorage.update_url;

    // show the modal
    $('#updater-modal').show(200,function(){
      $('#updater .modal-content').fadeIn(200);
    });

    // FIRST DOWNLOAD

    updater.download( update_url )
    .then(function(zip_path){

      $('[step=download]').hide();
      $('[step=extract]').show();

      // THEN UNZIP

      updater.unzip(zip_path);

    }).then(function(){

      $('[step=extract],#progress-bar-container').hide();

      // THEN RELOAD
      updater.reload();

    }).catch(function(err){
      console.log('error:'+err)
    });
    
  },
  download:function(update_url){
    return new Promise(function(resolve, reject){

      zip_path = updater.get_zip_path();
      if( !zip_path ){ reject('No zip path given') }

      zip_file = fs.createWriteStream( zip_path );
      if( !zip_file ){ reject('Zip file cannot be created') }

      bytes_downloaded = 0;
      zip_size = 75697400; // default value around 7 mb

      $progress_bar = $('#progress-bar');

      request
        .get(update_url)
        .on('error', function(err) {

          reject("Request error: "+err)

        }).on('data', function(chunk) {
          
          bytes_downloaded += chunk.length;
          percent_downloaded = ((bytes_downloaded / zip_size) * 100).toFixed() + "%";
          $progress_bar.css('width',percent_downloaded).text(percent_downloaded);

        }).on('response',function(data){

          zip_size = data.headers['content-length']
          zip_size_mb = ( zip_size / 1048576).toFixed(2);
          $('#download-size b').text(zip_size_mb);          

        }).on('end',function(){

          resolve(zip_path);

        }).pipe(zip_file);      

    });
  },

  get_zip_path:function(){

    if( localStorage.operating_system == 'mac' ){

      zip_path = "../gifSlap_update.zip";

    }else if( localStorage.operating_system == 'win' ){

      execPath = path.dirname( process.execPath );
      zip_path = execPath + '/gifSlap_update.zip';

    }

    return zip_path;

  },
  unzip:function(){
    return new Promise(function(resolve, reject){
      
      var unzipper = new DecompressZip(zip_path);
      var unzipped_path = updater.get_unzipped_path();
      $progress_bar = $('#progress-bar');

      $progress_bar.css('width','0%').text("0%");

      unzipper.extract({
        
        path: unzipped_path,
        filter: function (file) {
          return file.type !== "SymbolicLink";
        }

      }).on('error', function (err) {
        
        reject(err);

      }).on('extract', function (log) {

        resolve();

      }).on('progress', function (fileIndex, fileCount) {
        
        percent_unzipped = (((fileIndex+1) / fileCount) * 100).toFixed(1) + "%";
        $progress_bar.css('width',percent_unzipped).text(percent_unzipped);

      });
      
    });
  },
  get_unzipped_path:function(){

    if( localStorage.operating_system == 'mac' ){

      unzipped_path = "../";

    }else if( localStorage.operating_system == 'win' ){

      unzipped_path = path.dirname( process.execPath );

    }

    return unzipped_path;
  },
  reload:function(){
    
    if( localStorage.operating_system == 'mac' ){

      // reload the Mac way

      $('[step=reload-mac]').show();

      $('#close').click(function(){
        win.close();
      });

      localStorage.gifSlap_updated = "true";
      localStorage.update_url = "null";
      

    }else if( localStorage.operating_system == 'win' ){

      // reload the PC way

      $('[step=reload-win]').show();

      execPath = path.dirname( process.execPath );
      
      new_gifslap_exec_path = '"'+execPath+'/gifSlap_update.exe"';
      new_gifslap_exec_path = new_gifslap_exec_path.replace(/\//g,'\\'); // replace slashes for windows

      localStorage.update_url = "null";
      localStorage.gifSlap_updated = "true";

      // open new gifslap via command line
      // new gifSlap will close the old one based on localStorage.gifSlap_updated
      setTimeout(function(){
        exec(new_gifslap_exec_path,function(err){
          if(err){ console.log(err); }
        });  
      },1500);      

    }    
  },
  cleanup:function(){

    // mac & win

    // delete the zip file
    zip_path = updater.get_zip_path();
    fs.unlink(zip_path,function(err){
      if(err){
        // stop here if the update zip does not exist
        console.log(err);
        localStorage.gifSlap_updated = 'false';
        win.reloadDev();
        return;
      }
      console.log(zip_path);
    });

    // Mac Only
    if( localStorage.operating_system == 'mac' ){
      localStorage.gifSlap_updated = 'false';
      setTimeout(function(){
        win.reloadDev();
      },500);
    }

    // PC only
    if( localStorage.operating_system == 'win'){

      // close the old version of gifSlap and leave this one running

      exe_name = process.execPath.split('\\').reverse()[0];
      execPath = path.dirname( process.execPath );

      if( exe_name !== 'gifSlap_update.exe'){
        localStorage.gifSlap_updated = 'false';
        win.reloadDev();
        return;
      }

      // kill the old running exe
      exec('taskkill /im gifSlap.exe /f',function(err){
        if(err){
          console.log(err);
          localStorage.gifSlap_updated = 'false';
          localStorage.win_update_error = 'true';
          win.reloadDev();
          return;
        }

        // delete the old exe
        exec('del '+execPath+'\\gifSlap.exe',function(err){
          if(err){
            console.log(err);
            localStorage.gifSlap_updated = 'false';
            localStorage.win_update_error = 'true';
            win.reloadDev();
            return;
          }
          
          // copy gifSlap_update.exe to gifSlap.exe
          exec('copy '+execPath+'\\gifSlap_update.exe '+execPath+'\\gifSlap.exe',function(err){
            if(err){
              console.log(err);
              localStorage.gifSlap_updated = 'false';
              localStorage.win_update_error = 'true';
              win.reloadDev();
              return;
            }

            localStorage.gifSlap_updated = 'false';

            // run the fresh copy of gifSlap.exe
            exec(execPath+'\\gifSlap.exe',function(err){
              if(err){
                console.log(err);
                updater.kill_update_exes();
                return;
              }

            });
          });
        });
      });
    }
  },
  kill_update_exes:function(){
    if( localStorage.operating_system !== 'win'){ return }
    exec('taskkill /f /im gifSlap_update.exe',function(err){
      if(err){ 
        return; // no exes to kill 
      }else{ 
        console.log('Killed exes like a boss.') 
      }
    });
  },
  delete_update_exe:function(){
    if( localStorage.operating_system !== 'win'){ return }
    execPath = path.dirname( process.execPath );
    exec('del '+execPath+'\\gifSlap_update.exe',function(err){
      if(err){ 
        return; // no exes to kill
      }else{ 
        console.log('Deleted an update exe like a boss.') 
      }
    });
  },
  show_win_error:function(){
    
    // open external browser 
    $('.external-link').click(function(){
      href = $(this).attr('data-href');
      gui.Shell.openExternal(href);
    });

    // show the modal

    $('[step=download]').hide();
    $('#progress-bar-container').hide();
    $('[step=win-error]').show();

    $('#updater-modal').show(200,function(){
      $('#updater .modal-content').fadeIn(200);
      localStorage.win_update_error = "false";
      localStorage.gifSlap_updated = "false";
      localStorage.update_url = "null";
    });
  }
}

// if we need to update, initialize that
if( localStorage.operating_system == 'mac' && localStorage.update_url !== "null" && localStorage.update_url !== undefined ){

  win.show();
  updater.run();
  updater.kill_update_exes();
  throw new Error('Updating');

}

// if gifSlap was updated, run some cleanup tasks
if( localStorage.operating_system == 'mac' && localStorage.gifSlap_updated == "true" ){

  updater.cleanup();
  throw new Error('Cleaning Up Update');

}

// some post cleanup cleanup

// updater.delete_update_exe();
// updater.kill_update_exes();  