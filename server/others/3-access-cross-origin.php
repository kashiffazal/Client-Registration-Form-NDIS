<?php
#Access Cross Ogirin --------------------------------------------------------//
// array holding allowed Origin domains
$allowedOrigins = array(
    //'(http(s)://)?(www\.)?my\-domain\.com',
    'http://localhost:3000',
    'http://authenticlifecare.com.au',
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

