
var bpm_sync = {

  timeoutWaitSeconds: 4,
  count: 0,
  msecsFirst: 0,
  msecsPrevious: 0,
  averageBPM: null,
  averageMS: 461.53,
  refreshInterval: '',

  run_on_beat:function(){

    // this function is defined in run.php

  },

  show_bpm_indicator:function(){
    
    $bpm_indicator = $('<div></div>').css({
      width:'10px',
      height:'10px',
      background:'#fff',
      position:'absolute',
      right:'0px',
      bottom:'0px'
    });

    $('#container').append($bpm_indicator);
    setTimeout(function(){
      $bpm_indicator.remove();
    },500);

  },

  ResetCount: function(){
    bpm_sync.count = 0;
    bpm_sync.averageBPM = null;
  },

  tap_for_bpm: function(e){

    window.clearInterval(bpm_sync.refreshInterval);
    timeSeconds = new Date;
    msecs = timeSeconds.getTime();
    if ((msecs - bpm_sync.msecsPrevious) > 1000 * bpm_sync.timeoutWaitSeconds)
    {
      bpm_sync.count = 0;
    }

    if (bpm_sync.count == 0)
    {
      bpm_sync.averageBPM = null;
      bpm_sync.msecsFirst = msecs;
      bpm_sync.count = 1;
    }
    else
    {
      bpmAvg = 60000 * bpm_sync.count / (msecs - bpm_sync.msecsFirst);
      bpm_sync.averageMS = 60000 / bpmAvg;
      bpm_sync.averageBPM = Math.round(bpmAvg * 100) / 100;
      bpm_sync.count++;
      bpm_sync.refreshInterval = setInterval( "bpm_sync.run_on_beat()" , bpm_sync.averageMS);
    }
    bpm_sync.msecsPrevious = msecs;
    return true;
  }

}






