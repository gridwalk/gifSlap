
_presetsContainer = document.getElementById('presets-container')

// presets folder created in initialize_gifSlap.js

var presets = {

  getAll:function(){
    
    var allPresets = Array()
    var presets_folder_contents = fs.readdirSync(localStorage.presets_folder)
    presets_folder_contents.forEach(function( file ){
      if( file.toLowerCase().indexOf('.txt') !== -1 ){    
        presetPath = localStorage.presets_folder + "/" + file;
        allPresets.push( presetPath )
      }    
    })
    return allPresets    
  },

  render:function(){

    _presetsContainer.innerHTML = ''

    presetFilePaths = presets.getAll()
    for (var i = presetFilePaths.length - 1; i >= 0; i--) {

      fileName = path.basename(presetFilePaths[i])

      imageFilePath = presetFilePaths[i].replace('.txt','.jpeg')

      _thumbnail = document.createElement('div')
      _thumbnail.style.backgroundImage = 'url("'+imageFilePath+'")'
      _thumbnail.setAttribute('class','preset-thumbnail')

      _presetTile = document.createElement('div')
      _presetTile.setAttribute('class','preset-tile w25')
      _presetTile.setAttribute('onclick','presets.clickPresetTile(this)')
      _presetTile.setAttribute('filename',fileName)
      _presetTile.appendChild(_thumbnail)
      _presetsContainer.appendChild(_presetTile)

    }

    // turn off delete button if no presets are rendered
    if( presetFilePaths.length == 0 ){
      presets.deleteButtonActive = false
    }
  },

  save:function(){

    // generate name of preset

    var presetName = Date.now()

    var presetStateFilePath = localStorage.presets_folder + '/' + presetName + '.txt'
    var presetImageFilePath = localStorage.presets_folder + '/' + presetName + '.jpeg'

    // get state text file
    var stateText = JSON.stringify(state)

    // write state to file
    fs.writeFile(presetStateFilePath, stateText, function(err) {
      if(err) return console.log(err)
      
      // take the screenshot
      main.gifslap.take_screenshot(presetImageFilePath,function(imageFilePath){
        presets.render()
      })
      
    })
  },
  
  deleteButtonActive:false,
  deleteFlashInterval:null,
  clickDeletePreset: function(){
    
    // return if no presets
    if( _presetsContainer.innerHTML == '' ) return

    presets.deleteButtonActive = !presets.deleteButtonActive
    clearInterval(presets.deleteFlashInterval)

    presets.deleteFlashInterval = setInterval(function(){

      window.delete_preset.classList.toggle('warn')

      if( presets.deleteButtonActive == false ){
        clearInterval(presets.deleteFlashInterval)
        window.delete_preset.classList.remove('warn')
        return
      }

    },100)

  },

  clickPresetTile: function(presetElement){

    fileName = presetElement.getAttribute('filename')
    filePath = localStorage.presets_folder+'/'+fileName

    if( presets.deleteButtonActive ){
      presets.delete(filePath)
      return
    }

    presets.load(filePath)
  },

  load:function(filePath){
    fs.readFile(filePath, 'utf8', function (err,data) {
      if(err) return console.log(err)
      data = JSON.parse(data)
      loadState(data)
    })
  },
  delete:function(filePath){

    var presetStateFile = filePath
    var presetImageFile = filePath.replace('.txt','.jpeg')

    fs.unlink(presetStateFile, function(err){
      if (err) return console.log(err) 
      fs.unlink(presetImageFile, function(err){
        if (err) return console.log(err)
          presets.render()
      })
    })
  },
}

presets.render()