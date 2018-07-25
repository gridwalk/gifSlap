<?

//Get the name of the creation
$name = $_POST['name'];
if( !$name ){ return; }

// Dest is where the folder is
$dest = '../saves/'.$name;

// Create destination folder

if( is_dir($dest) ){
  echo "File exists";
  die;
}

if( mkdir($dest) ){
  echo "folder $name created";
}

//This is the composition structure
$visuals_container =  $_POST['visuals_container'];

// copy image assets to the folder
$images = explode(",",$_POST['images']);
foreach($images as $image){

  $basename = basename($image);

  if( strpos($image,"://") ){
    //absolute
    copy( $image, $dest."/".$basename);
  }else{
    //relative
    copy( '../'.$image, $dest."/".$basename);
  }

  //Replace file names within container to the newly copied gif path
  $visuals_container = str_replace($image,$basename,$visuals_container);
}

// Write the index file
$index_file = $dest."/index.html";
$index_handle = fopen($index_file, 'w') or die("can't open file");

$index_data = 
"<html>
<head>
  <title>.gifSlap</title>
  <link rel=\"stylesheet\" href=\"../../core/assets/style.css\" />
</head>
<body>
<div id='container'>";
$index_data .= $visuals_container;
$index_data .= 
"
</div>
</body>
</html>
";

fwrite($index_handle, $index_data);
fclose($index_handle);

?>