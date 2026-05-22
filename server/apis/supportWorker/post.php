<?php
  $app_post_data = true;
  include "../../others/config.php";
  require_once '../../plugins/mpdf-8.0.0/vendor/autoload.php';
  require_once '../../plugins/PHPMailer_v5.1/class.phpmailer.php'; //library added in download source  

  //print_r($_FILES);
  //print_r($_POST);exit();

  $res = dbQuery("post",$_POST,$support_worker_form,'keyword,key');
  $res['email'] = 'support@authenticlifecare.com.au';
  $res['save_link_path'] = $domainPath."?save=";

  //Capital first and last name
  $_POST['first_name'] = ucfirst($_POST['first_name']);
  $_POST['last_name'] = ucfirst($_POST['last_name']);

  $res['name'] = $_POST['first_name']." ".$_POST['last_name'];
  //echo json_encode($res);
  //exit();

  //Upload Files
  if($res['status']){
    //print_r($_FILES);
    $uploadPath = "../../documents/supportWorker/";
    $passport = array();
    $uploadCV = array();
    $certificates = array();
    foreach($_FILES as $key => $file){
      if(strpos($key, 'uploadCV') !== false){
        $fileUpRes = fileUpload($file,$uploadPath."cv/",$res['id']."-");
        $uploadCV[] = $fileUpRes['fileName'];
      }//End if condition
      if(strpos($key, 'uploadCertificates') !== false){
        $fileUpRes = fileUpload($file,$uploadPath."certificates/",$res['id']."-");
        $certificates[] = $fileUpRes['fileName'];
      }//End if condition
      if(strpos($key, 'uploadCopyOfPassport') !== false){
        $fileUpRes = fileUpload($file,$uploadPath."passport/",$res['id']."-");
        $passport[] = $fileUpRes['fileName'];
      }//End if condition

    }//End foreach
    $id = $res['id'];
    $passport = implode(",",$passport);
    $uploadCV = implode(",",$uploadCV);
    $certificates = implode(",",$certificates);
    $res['fileUpload'] = runQuery("UPDATE $support_worker_form SET uploadCV = '$uploadCV', uploadCertificates = '$certificates', uploadCopyOfPassport = '$passport' WHERE id = '$id'", $id);
    //print_r($res);
  }//End if condition

  


  if($res['status'] AND @trim($_POST['keyword']) === 'completed'){
    //Create PDF
    include "./pdf_html.php";//Set $html;
    $path = "../../documents/supportWorker/form";
    $fileName = $res['id']."-".$server_date;
    $file_ref = createPDF($path,$fileName,$html,$header,$footer);

    if($file_ref['status']){
      $res['file_ref'] = $file_ref;

      $attachedFile = array(array('path' => $path."/".$file_ref['fileName'], 'name' => $file_ref['fileName']));
      
      include "./admin_email_set.php";//$adminReceiverArr,$bccReceiver,$adminEmailContent
      $res['email_admin_res'] = emailPHPMailer($emailSenderArr,$adminReceiverArr,$adminEmailContent,$SMTPCred,$attachedFile,$bccReceiver);
      
      include "./support_worker_email_set.php";//$clientReceiverArr,$bccReceiver,$clientEmailContent
      $res['email_client_res'] = emailPHPMailer($emailSenderArr,$clientReceiverArr,$clientEmailContent,$SMTPCred,$attachedFile);

    }//End if condition
    
  }//End if condition


  echo json_encode($res);

?>