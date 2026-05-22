<?php

	if ($_SERVER['HTTP_HOST'] == 'localhost') {
			#Local Host
			$host = "localhost";
			$user = "root";
			$password = "";
			$dbname = "webomailer360";
	} else {
			#http://advanceeducationsearch.com
			$host = "localhost";
			$user = "advancee_360user";
			$password = "s_}?2ezDVg_N";
			$dbname = "advancee_360db";
	} //End if condition
	
	//Set DSN and PDO instance
	$dsn = "mysql:host=".$host.";dbname=".$dbname;
	$pdo = new PDO($dsn,$user,$password);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
	
	//Tables name
	$registration_form_table = "registration_form";
  
  
#Access Cross Ogirin --------------------------------------------------------//
// array holding allowed Origin domains
$allowedOrigins = array(
  //'(http(s)://)?(www\.)?my\-domain\.com',
  'http://localhost:3000',
  'https://authenticlifecare.com.au'
);

if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] != '') {
  foreach ($allowedOrigins as $allowedOrigin) {
      if (preg_match('#' . $allowedOrigin . '#', $_SERVER['HTTP_ORIGIN'])) {
          header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
          header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
          header('Access-Control-Max-Age: 1000');
          header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
          header('Access-Control-Allow-Credentials: true'); //For browser cookies setup by php session
          break;
      } //End if condition
  } //End foreach
} //End if condition
//----------------------------------------------------------------------//





?>