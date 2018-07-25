<?
$scene_setter = "<script>

// set all the variables in play
".$_POST['scene_variables']."

// Set HTML of the modules
chain.container.html('" . $_POST['chain_container'] . "');
$('#circle').html('" . $_POST['circle_container'] . "');
$('#hallway').html('" . $_POST['hallway_container'] . "');
$('#mirror-left').html('" . $_POST['mirror_left'] . "');
$('#mirror-right').html('" . $_POST['mirror_right'] . "');
$('#rainbow_bars').html('" . $_POST['rainbow_bars'] . "');

// set the active image, background, inner background.

// randomize is on
if(images.randomize_order){

  // move the current image, and next one to the end of the set
  images.active_set.push( images.active_set[images.cursor], images.active_set[images.cursor+1] );

  // overwrite the current and next images with our saved images  
  images.active_set[images.cursor] = '".$_POST['active_image']."';
  images.active_set[images.cursor+1] = '".$_POST['next_active_image']."';

  // set the background and inner background
  bg_mod.box.attr('style','".$_POST['bg_style']."');
  midground.box.attr('style','".$_POST['midground_style']."');


}else{

  // If randomize is off, jump to the active_image's slot in the array

  // search the array for active_image

}
</script>";

// Get the name of the creation
$name = $_POST['name'];

// Get the name of the set
$set_name = $_POST['set_name'];

// Destination folder is the "scenes" folder within the set
$dest = '../../sets/'.$set_name.'/scenes';

// Make the scenes folder if it's not already there
if( !is_dir($dest) ){
  mkdir($dest);
}

// Write scene HTML to file
$scene_html_file = $dest . "/" . $name .".html";
$scene_html_handle = fopen($scene_html_file, 'w') or die("can't open file");
fwrite($scene_html_handle, $scene_setter);
fclose($scene_html_handle);

?>