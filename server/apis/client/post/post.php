<?php
  $app_post_data = true;
  include "../../../others/config.php";
  require_once '../../../plugins/mpdf-8.0.0/vendor/autoload.php';
  require_once '../../../plugins/PHPMailer_v5.1/class.phpmailer.php'; //library added in download source  

  
  //print_r($_POST);

  $res = dbQuery("post",$_POST,$registration_form_table,'keyword,key');
  $res['email'] = 'support@authenticlifecare.com.au';
  $res['save_link_path'] = $domainPath."/registration-form.php?page=client&save=";


  if($res['status'] AND @trim($_POST['keyword']) === 'completed'){
    //Create PDF
    include "./pdf_html.php";//Set $html;
    $path = "../../../documents/clients/form";
    $fileName = $res['id']."-".$server_date;
    $file_ref = createPDF($path,$fileName,$html,$header,$footer);

    if($file_ref['status']){
      $res['file_ref'] = $file_ref;

      $attachedFile = array(array('path' => $path."/".$file_ref['fileName'], 'name' => $file_ref['fileName']));
      
      include "./admin_email_set.php";//$adminReceiverArr,$bccReceiver,$adminEmailContent
      $res['email_admin_res'] = emailPHPMailer($emailSenderArr,$adminReceiverArr,$adminEmailContent,$SMTPCred,$attachedFile,$bccReceiver);
      
      include "./client_email_set.php";//$clientReceiverArr,$bccReceiver,$clientEmailContent
      $res['email_client_res'] = emailPHPMailer($emailSenderArr,$clientReceiverArr,$clientEmailContent,$SMTPCred,$attachedFile);
    }//End if condition
    
  }//End if condition


  echo json_encode($res);

?>