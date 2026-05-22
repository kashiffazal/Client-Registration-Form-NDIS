<?php


  //$data = array('email' => 'Kashif@gmail.com', 'clientFirstName' => 'Kashif', 'clientLastName' => 'Fazal');
  //$companyName = 'Authentic Life Care';



  $clientReceiverArr = array(array('email' => $data['email'], 'name' => $data['clientFirstName'].' '.$data['clientLastName']));

  $clientEmailContent = array(
    'subject' => $companyName.' - Your Support Worker Form has been Successfully Submitted',
    'body' => '
      <div style="border:1px solid #b3b3b3;border-radius:5px;">

  
        <div style="
          text-align:center;
          background-color: #ffdec6a6;
          background-position: 100% center;
          background-size: cover;
        
          
          background-image: url(https://authenticlifecare.com.au/assets/img/home-bg.png);
        ">
          <div style="background:#ffffffde;padding: 20px;">
            <img src="https://authenticlifecare.com.au/assets/img/logo.png" width="120px">
            <h3>Client Registration Form</h3>
            <!--hr style="border:1px dashed #e96b28;border-bottom:none"/-->
          </div>
        </div>

        <div style="padding:20px;">
          <p>Dear '.$data['clientFirstName'].',</p>
          <p>Thank you for submitting support worker form on Authentic Life Care.</p>
          <p>We have received your details and some one from our support team will contact you soon.</p>
        </div>
        
      </div>
    ',
    'plaintext' => 'Dear '.$data['clientFirstName'].',
      Thank you for submitting support worker form on Authentic Life Care.
      We have received your details and some one from our support team will contact you soon.'
  );




 // echo $clientEmailContent['body'];

?>