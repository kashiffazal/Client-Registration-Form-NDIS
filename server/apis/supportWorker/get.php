<?php
  include "../../others/config.php";

  $id = $_GET['id'];
  //print_r($_POST);

  $res = dbQuery("SELECT * FROM $support_worker_form WHERE id = '$id'");


  echo json_encode($res);

?>