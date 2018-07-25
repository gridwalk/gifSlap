// MIDI input detection
document.write('<object id="Jazz" type="audio/x-jazz" class="hidden"></object>');
var Jazz = document.getElementById("Jazz");
// open Jazz input output
Jazz.MidiInOpen(0);

// start polling for MIDI
$midi_box = $('#midi-box');
var t = null;
setInterval(function(){
  while(a=Jazz.QueryMidiIn()){
    console.log('midi')
    $midi_box.attr('style','background-color:rgba(255,255,255,.2); transition: background-color 0s ease;');
    clearTimeout(t);
    t = setTimeout(function(){
      $midi_box.attr('style','background-color:transparent; transition: background-color .2s ease;');
    },100);
  }
},0);