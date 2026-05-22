<?php

	if ($_SERVER['HTTP_HOST'] == 'localhost') {
			#Local Host
			$live_server = false;
			$host = "localhost";
			$user = "root";
			$password = "";
			$dbname = "authenticlifecare";
			$domainPath = "http://localhost:3000";
			$documentPath = "http://localhost/myProjects/react/Ainan/client-registration-form/server/documents";
	} else {
			#http://advanceeducationsearch.com
			$live_server = true;
			$host = "localhost";
			$user = "authgzup_app_user";
			$password = "r2vd.GJr&VEP";
			$dbname = "authgzup_app";
			$domainPath = "https://authenticlifecare.com.au";
			$documentPath = "https://authenticlifecare.com.au/server/documents";
	} //End if condition
	//Set DSN and PDO instance
	$dsn = "mysql:host=".$host.";dbname=".$dbname;
	$pdo = new PDO($dsn,$user,$password);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
	
	//Tables name
	$registration_form_table = "registration_form";
	$support_worker_form = "support_worker_form"
	

?>