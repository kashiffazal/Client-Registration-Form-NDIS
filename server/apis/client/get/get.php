<?php
  include "../../../others/config.php";

  $id = $_GET['id'];
  //print_r($_POST);

  $res = dbQuery("SELECT * FROM $registration_form_table WHERE id = '$id'");


  echo json_encode($res);

?>