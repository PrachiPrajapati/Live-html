<?php 
/* Redirect to install directory */
$files = scandir('install');
$directories = '';
foreach($files as $file){
   	if(($file != '.') && ($file != '..')){
      	if(is_dir('install/'.$file)){
         	$directories = $file;
      	}
   	}
}
if(file_exists("install/".$directories)){
	header("Location:install/".$directories);	
	exit;
}else{
	die("No files to install");
}
