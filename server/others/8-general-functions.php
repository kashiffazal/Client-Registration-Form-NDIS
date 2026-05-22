<?php

  function executePDO($query){
    global $pdo;
    $result = $pdo->prepare($query);
    $result->execute([]);
    $error = $result->errorInfo();
    $error = $error[2];
    if($error){
      $res = array('errorTitle' => 'Database Error', 'errorMsg' => $error, 'errorNotifyType' => 'notify', 'errorDuration' => ERROR_DURATION, 'data' => array(), 'errorType' => 'db-error');
    }else{
      $res = array('errorTitle' => '', 'errorMsg' => false, 'errorNotifyType' => '', 'errorDuration' => '','data' => $result, 'errorType' => '');
    }//End if condition
    return $res;
  }//End function

  function fileUpload($fileVar,$pathToUpload,$prefix = '',$maxFileSizeInKb = false){
    if($fileVar['name']){
      //if no errors...
      if(!$fileVar['error']){
        $new_file_name = strtolower($fileVar['tmp_name']); //rename file
        //file size must be in kb
        if($maxFileSizeInKb AND $fileVar['size'] > ($maxFileSizeInKb)){
          $valid_file = false;
          $res = array('status' => false, 'errorTitle' => 'Can\'t upload file', 'errorMsg' => 'Oops!  Your file\'s size is to large then '.$maxFileSizeInKb.'.', 'errorType' => '', 'errorNotifyType' => 'notify', 'errorDuration' => ERROR_DURATION);
        }else{
          $valid_file = true;
        }//End if condition
        if($valid_file){
          $fileName = str_replace(' ', '_', $prefix.$fileVar['name']);
          //$fileName = $fileVar['name'];
          move_uploaded_file($fileVar['tmp_name'], $pathToUpload.$fileName);
          $res = array('status' => true, 'successTitle' => 'Uploaded Successfully', 'successMsg' => 'Congratulations! Your file was accepted.', 'successNotify' => false, 'successNotifyType' => '', 'successDuration' => SUCCESS_DURATION, 'fileName' => $fileName);
        }//End if condition
      }else{$res = array('status' => false, 'errorTitle' => 'Can\'t upload file', 'errorMsg' => 'Ooops!  Your upload triggered the following error:  '.$fileVar['errorMsg'], 'errorType' => '','errorNotifyType' => 'notify', 'errorDuration' => ERROR_DURATION);}//End if condition
    }else{
      $res = array('status' => false, 'errorTitle' => 'File not available', 'errorMsg' => 'Please provide file to upload', 'errorType' => '', 'errorNotifyType' => 'notify', 'errorDuration' => ERROR_DURATION);
    }//End if condition
    return $res;
  }//End function

  //$dateFormat = array('inserted_date,purchase_date','d-m-Y');
  function fetchDataFromDB($SQL_query,$reverse = false,$dateFormat = false,$noRecordMsg = false){
    $pdo_res = executePDO($SQL_query);
    $arr = array();
    if(!$pdo_res['errorMsg']){
      $i = 1;
      while($row = $pdo_res['data']->fetch()){
        #Change date formate if available        
        if($dateFormat){
          $colNames = explode(",",$dateFormat[0]);
          foreach($colNames as $dateColVal){
            if(@$row[$dateColVal] && @$row[$dateColVal] != ""){//If this column is available then update it
              $row[$dateColVal] = date($dateFormat[1], strtotime($row[$dateColVal]));
            }//End if condition
          }//End foreach
        }//End if condition

        $row['key'] = $i;
        $arr[] = $row;
        $i++;
      }//End while loop
      if(sizeof($arr) >= 1){
        if($reverse){$arr = array_reverse($arr);}
        $res = array('status' => true, 'data' => $arr, 'successNotify' => false, 'successTitle' => '', 'successMsg' => '', 'successNotify' => false, 'successNotifyType' => '', 'successDuration' => SUCCESS_DURATION);
      }else{
        if($noRecordMsg){
          $res = array('status' => false, 'data' => array(), 'errorTitle' => 'Data not available', 'errorMsg' => 'No record found', 'errorType' => '', 'errorNotifyType' => 'notify', 'errorDuration' => ERROR_DURATION);
        }else{
          $res = array('status' => true, 'data' => array(), 'successTitle' => '', 'successMsg' => '', 'successNotify' => false, 'successNotifyType' => '', 'successDuration' => SUCCESS_DURATION);
        }//End if condition
      }//End if condition
    }else{
      $res = array('status' => false, 'errorTitle' => $pdo_res['errorTitle'], 'errorMsg' => $pdo_res['errorMsg'], 'errorType' => $pdo_res['errorType'], 'errorNotifyType' => $pdo_res['errorNotifyType'], 'errorDuration' => $pdo_res['errorDuration']);
    }//End if condition
    return $res;
  }//End function

  function create_SQL_query_by_array($array,$tableName,$action,$skipArray,$whereCondition,$runQuery = false,$id = false){
    //Modifying skipArray for create index as value ---------------------------//
    $skipArrayMod = array();
    if(isset($skipArray)){foreach($skipArray as $value){$skipArrayMod[$value] = $value;}}
    //--------------------------------------------------------------------------//
    $colsString = "";
    $valuesString = "";
    $updateString = "";
    $valuesStringMod = "";
    //Creating Columns ---------------------------------------------------------------------------------------//
    foreach($array as $key => $value){
      if($value == 'undefined'){$value = "";}
      if($key == array_search($key,$skipArrayMod)){continue;}//if it's found any skiped value then skip this route
      if(gettype($value) == 'array'){

        //Merge All array into one array ----------------------------------//
        $newArray = array();$a = 0;
        foreach($value as $partialArray){
          foreach ($partialArray as $partialKey => $partialValue) {
            if($a == 0){ $newArray[$partialKey] = $partialValue;
            }else{ $newArray[$partialKey] = $newArray[$partialKey]."=>".$partialValue;}
          }//End inner foreach loop
          $a++;
        }//End outer foreach loop
        //print_r($newArray);
        //-------------------------------------------------------------------//
        foreach($newArray as $keyInner => $valueInner){
          if($keyInner == array_search($keyInner,$skipArrayMod)){continue;}//if it's found any skiped value then skip this route
          $colsString .= $keyInner .",";
          $valuesString .= "'".addslashes($valueInner) ."',";
          $updateString .= $keyInner." = '".addslashes($valueInner)."',";
        }//End 1st inner foreach

      }else{
        $colsString .= $key .",";
        $valuesString .= "'".addslashes($value) ."',";
        $updateString .= $key." = '".addslashes($value)."',";
      }//End dif condition
    }//End foreach
    $colsString = rtrim($colsString,",");
    $valuesString = rtrim($valuesString,",");
    $updateString = rtrim($updateString,",");

    if($action == "insert"){
      $query = "INSERT INTO $tableName(".$colsString.")VALUES(".$valuesString.")";
    }else if($action == "update"){
      $query = "UPDATE $tableName SET ".$updateString." WHERE ".$whereCondition;
    }else{
      $query = "Please provide action, e.g. 'insert' or 'update'";
    }//End if condition
    //--------------------------------------------------------------------------------------------------------//

    if($runQuery){
      return runQuery($query,$id);
    }else{
      return $query;
    }//End if condition

  }//End function

  #Run SQL query like insert, update etc.
  function runQuery($query,$id = false){
    global $pdo;
    $pdo_res = executePDO($query);
    $res = array();
    if($pdo_res['errorMsg']){
      $res['status'] = false;
      $res['errorTitle'] = $pdo_res['errorTitle'];
      $res['errorMsg'] = $pdo_res['errorMsg'];
      $res['errorType'] = $pdo_res['errorType'];
      $res['errorNotifyType'] = $pdo_res['errorNotifyType'];
      $res['errorDuration'] = $pdo_res['errorDuration'];
    }else{
      $res['status'] = true;
      if($id){$res['id'] = $id;}else{$res['id'] = $pdo->lastInsertId();}
    }//End if condition
    return $res;
  }//End function


  #Email (PHP Mailer)
  function emailPHPMailer($senderArr,$receiverArr,$content,$SMTPArray = false,$attachment = false, $bccReceiver = false){
    $res = array();
    if(!@$receiverArr[0]['email']){
      $res['status'] = false;
      $res['errorTitle'] = "Invalid Email";
      $res['errorMsg'] = "Email is not available";
      $res['errorType'] = "";
      $res['errorNotifyType'] = "notify";
      $res['errorDuration'] = ERROR_DURATION;
    }//End if condition
    
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->IsHTML(true);
    if($SMTPArray){
      $mail->IsSMTP();                                      // set mailer to use SMTP
      $mail->Host = $SMTPArray['host'];  // specify main and backup server
      $mail->SMTPAuth = true;     // turn on SMTP authentication
      $mail->Username = $SMTPArray['username'];  // SMTP username
      $mail->Password = $SMTPArray['password']; // SMTP password
      //If SMTP requires TLS encryption then set it
      if(@$SMTPArray['SMTPSecure']){$mail->SMTPSecure = $SMTPArray['SMTPSecure'];}//End if condition
      //Set TCP port to connect to 
      if(@$SMTPArray['port']){$mail->Port = $SMTPArray['port'];}//End if condition
    }//End if condition

    $mail->setFrom($senderArr['email'],$senderArr['name'],false);

    foreach($receiverArr as $value){
      if($value['name']){
        $mail->addAddress($value['email'], $value['name']);
      }else{
        $mail->addAddress($value['email']);
      }//End if condition
    }//End foreach


    if(gettype($bccReceiver) == 'array'){
      foreach($bccReceiver as $value){
        $mail->addBCC($value['email'], $value['name']);
      }//End foreach
    }//End if condition



    //Provide file path and name of the attachments
    if($attachment){
      foreach($attachment as $value){
        if($value['name']){
          $mail->addAttachment($value['path'], $value['name']);
        }else{
          $mail->addAttachment($value['path']);
        }//End if condition
      }//End foreach
    }//End foreach

    $mail->Subject = $content['subject'];
    //$mail->Body = $content['body'];
    $mail->MsgHTML($content['body']);
    if($content['plaintext']){$mail->AltBody = $content['plaintext'];}
    
    try{
      $mail->send();
      $res['status'] = true;
      $res['successTitle'] = 'Sent';
      $res['successMsg'] = 'Message has been sent successfully';
      $res['successNotify'] = false;
      $res['successNotifyType'] = '';
      $res['successDuration'] = SUCCESS_DURATION;
    }catch(Exception  $e){
      $res['status'] = false;
      $res['errorTitle'] = 'Email Sending Error';
      $res['errorMsg'] = $mail->ErrorInfo;
      $res['errorType'] = "";
      $res['errorNotifyType'] = "notify";
      $res['errorDuration'] = ERROR_DURATION;
    }//End if condition
    $mail->ClearAllRecipients();
    
    return $res;
  }//End function

  function dbQuery($sql_query,$handles = array(),$tableName = '',$skipCols = '',$whereCondition = ''){
    $res = array();
    $sql_query = trim($sql_query);
    //Get SELECT keyword
    $typeSelect = substr($sql_query,0,6);
    if($typeSelect == 'SELECT' || $typeSelect == 'select'){

      if(in_array("reverse", $handles)){$reverse = @$handles['reverse'];}else{$reverse = false;}//End if condition
      if(in_array("dateFormat", $handles)){$dateFormat = @$handles['dateFormat'];}else{$dateFormat = false;}//End if condition
      if(in_array("noRecordMsg", $handles)){$noRecordMsg = @$handles['noRecordMsg'];}else{$noRecordMsg = false;}//End if condition
      $res = fetchDataFromDB($sql_query,$reverse,$dateFormat,$noRecordMsg);

    }elseif($sql_query == 'post'){

      //Set local Date time for insert or updated date
      date_default_timezone_set("Asia/Karachi");
      $server_date = date('Y-m-d');
      $server_time = date('h:i:s A');
      $insert_update_by = @$_SESSION['user_id'];
      #------------------------------------------------#

      if(@$handles['id'] && @$handles['id'] != 'null'){
        $action = 'update';
        $id = $handles['id'];
        if(!$whereCondition){$whereCondition = "id = '$id'";}//End if condition
        $handles['updated_date'] = $server_date;
        $handles['updated_time'] = $server_time;
        //$handles['updated_by'] = $insert_update_by;
      }else{
        $action = 'insert';
        $id = false;
        $whereCondition = '';
        $handles['inserted_date'] = $server_date;
        $handles['inserted_time'] = $server_time;
        //$handles['inserted_by'] = $insert_update_by;
      }//End if condition
      
      if($skipCols){
        $skipArray = explode(",",$skipCols);
      }else{
        $skipArray = array();
      }//End if condition

      $res = create_SQL_query_by_array($handles,$tableName,$action,$skipArray,$whereCondition,true,$id);
    
    }else{
      if($handles){$id = $handles;}else{$id = false;}//End if condition
      $res = runQuery($sql_query,$id);
    }//End if condition
    return $res;
  }//End function

  function createPDF($pathToFolder,$fileName,$html,$header = false,$footer = false){
    $fileName = strtolower(str_replace(" ","-",$fileName.".pdf"));
    //Directory does not exist, so lets create it.
    if(!is_dir($pathToFolder)){mkdir($pathToFolder, 0755);}//End if condition
    $file = $pathToFolder."/".$fileName;
    $mpdf = new \Mpdf\Mpdf([
        'mode' => 'utf-8',
        'format' => 'A4',
        'setAutoTopMargin' => 'stretch',
        //'setAutoBottomMargin' => 'false',

        'margin_left' => '10',
        'margin_right' => '10',
        'margin_top' => '10',
        'margin_bottom' => '15'

    ]);
    $mpdf->SetDisplayMode('fullpage');
    if($header){$mpdf->SetHTMLHeader($header);}
    if(!$footer){$footer = "<p></p>";}
    $mpdf->SetHTMLFooter($footer);
    $mpdf->WriteHTML($html);
    $mpdf->Output($file);
    
    return array('status' => true, 'fileName' => $fileName);

  }//End function

  function dynamicFieldsToArray($dynamicArr){
    $dynamicArr = json_decode($dynamicArr,true);
    $resArr = array();
    foreach($dynamicArr as $key => $value){
      $k = 0;
      foreach($value as $kayInner => $valueInner){
        $resArr[$kayInner][$key] = $valueInner;
      }//End function
    }//End foreach
    return $resArr;
  }//end function

?>