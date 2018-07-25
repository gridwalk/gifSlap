
//OLD CODE, NEEDS MAJOR REWITING


var frames = new Array(); //FOR HOLDING RECORDED FRAMES

//EXPORT RECORDING
var export_recording = function(){
	var creation_name=null;
	while (creation_name==null || creation_name==""){
		var creation_name=prompt("Name this creation");
	}
	creation_name = creation_name.replace(/\W|_/gi,"_");
	var frame_package = "[";
	for (var i = 0; i < frames.length; i++) {
		frame_package = frame_package.concat("["+frames[i]+"], ");
	}
	frame_package = frame_package.concat("]");
	mp3_url = $('#music1').find('source').attr('src');
	$.ajax( {
		type: "POST",
		url:'../controller.php',  
		data: "action=write_frames&frames="+frame_package+"&creation_name="+creation_name+"&mp3_url="+mp3_url,
		success: function(data) {
			alert('saved');
		}
		
	});
}