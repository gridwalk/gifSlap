<?

//this file moves a list of images to sets/-delete

$images = explode(",",$_POST['images']);
foreach($images as $image){

  $basename = basename($image);
  
  //this shuold be revised. use regex to remove the first part, since the name of the folder is not the same for all users.
  $image = str_replace("http://localhost/gifslap_v7/", "", $image);

  // echo $image;

  rename("../../".$image,"../../sets/-delete/".$basename);

}
?>