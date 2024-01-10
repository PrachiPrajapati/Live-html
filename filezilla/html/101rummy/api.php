<?php

$type = $_GET['api'];
$json = file_get_contents('php://input');

$url = "https://stage.skylivecasino.com/api/auth/";
// Curl variable
$returnTransfer = true;
$encoding = '';
$maxredirs = 10;
$timeout = 0;
$followlocation = true;
$httpversion = CURL_HTTP_VERSION_1_1;

if ($type == 'registration') {
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => $url . "register",
    CURLOPT_RETURNTRANSFER => $returnTransfer,
    CURLOPT_ENCODING => $encoding,
    CURLOPT_MAXREDIRS => $maxredirs,
    CURLOPT_TIMEOUT => $timeout,
    CURLOPT_FOLLOWLOCATION => $followlocation,
    CURLOPT_HTTP_VERSION => $httpversion,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $json,
  ));

  $response = curl_exec($curl);
  curl_close($curl);
  echo $response;
}
if ($type == 'login') {
  $curl = curl_init();
  curl_setopt_array($curl, array(
    CURLOPT_URL => $url . "login",
    CURLOPT_RETURNTRANSFER => $returnTransfer,
    CURLOPT_ENCODING => $encoding,
    CURLOPT_MAXREDIRS => $maxredirs,
    CURLOPT_TIMEOUT => $timeout,
    CURLOPT_FOLLOWLOCATION => $followlocation,
    CURLOPT_HTTP_VERSION => $httpversion,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $json,
  ));

  $response = curl_exec($curl);
  curl_close($curl);
  echo $response;
}
