<?php

  $data = $_POST;

    #Header ---------------------------------//
    $header = "
        <div style='margin:0px 0px;'>
            <table border='0' style='width:100%;padding:0;border-collapse: collapse;'>
                <tr>
                  <td width='50%' style='font-size:20px;color:#424242'><b>Client Registration Form</b></td>
                  <td width='50%' style='text-align:right;'><img align='right' src='../logo.png' width='150px'></td>
                </tr>
            </table>
            <!--hr style='margin:5px 0px;border: 0.5pt solid #ccc'/-->
        </div>
    ";
    //---------------------------------------//  
		$footer = '
			<!--hr style="margin:5px 0px;border: 1px solid #e96b28"/-->
			<table width="100%" border="0" style="font-size:12px">
					<tr>
							<td width="50%" ></td>
							<td width="50%" style="text-align: right;"><i>'.date("d-M-Y", strtotime($server_date)).', '.$server_time.'</i> | Page {PAGENO} of {nbpg}</td>
					</tr>
			</table>
		';



  $html = '<html>
  <head>
      <title>Client Registration Form</title>
      <style>
      .container{
        border:1px solid #e96b28;
        padding:10px;
        height:100%;
        /*background:#eeeeee;*/
      }
      .table{
        width:100%;
        border-collapse: collapse;
      }
      .table tr td{font-size:12px;border:1px solid #999;padding: 10px;border-bottom:none;}
      .tbb{border-bottom:1px solid #999}
      .section{
        background:#e96b28;
        font-size:16px;
        color:#fff;
        font-weight:bold;
        padding:10px;
        margin:-10px;
        margin-bottom:10px;
        margin-top:10px;
      }
      .label{
        font-weight:bold;
        background:#f7f7f7
      }
      </style>
  </head>
  <body style="font-family: \'Roboto\', sans-serif;">
  ';
  $html .= '
  <div class="container">
    <div class="section" style="margin-top:-10px">How did you hear about Authentic Life Care</div>
    
    
    <table class="table">
      <tr><td class="label">Before we find out more about you we would love to know how you heard about Authentic Life Care</td></tr>
      <tr><td class="value">'.$data['beforeWeFind'].'</td></tr>
    </table>';
    

      if(
        $data['beforeWeFind'] === 'Support Worker' OR 
        $data['beforeWeFind'] === 'Support Coordinator' OR
        $data['beforeWeFind'] === 'Plan Manager' OR
        $data['beforeWeFind'] === 'Service / Healthcare Provider' OR
        $data['beforeWeFind'] === 'Authentic Life Care Team Member' OR
        $data['beforeWeFind'] === 'Family or Friends'
      ){
        $html .='
          <table class="table tbb">
            <tr><td class="label">Please provide their name</td></tr>
            <tr><td class="value">'.$data['theirName'].'</td></tr>
          </table>
        ';
      }//End if condition

      if(
        $data['beforeWeFind'] === 'Authentic Life Care Flyer / Pamphlet' OR 
        $data['beforeWeFind'] === 'Event or Expo'
      ){
        $html .='
          <table class="table tbb">
            <tr><td class="label">Please provide the name of the venue or place</td></tr>
            <tr><td class="value">'.$data['nameOfTheVenue'].'</td></tr>
          </table>
        ';
      }//End if condition  
      
      if(
        $data['beforeWeFind'] === 'Authentic Life Care Website' OR 
        $data['beforeWeFind'] === 'Internet Search e.g. Google' OR 
        $data['beforeWeFind'] === 'TV / Radio / Newspaper / Magazine' OR 
        $data['beforeWeFind'] === 'Social Media (Facebook / Twitter / LinkedIn)'
      ){
        $html .='
          <table class="table tbb">
            <tr><td class="label">Please provide the name of the media or social media</td></tr>
            <tr><td class="value">'.$data['nameOfTheMedia'].'</td></tr>
          </table>
        ';
      }//End if condition 
      
      if($data['beforeWeFind'] === 'Other'){
        $html .='
          <table class="table tbb">
            <tr><td class="label">Please tell us how you heard about us</td></tr>
            <tr><td class="value">'.$data['howYouHeardFirst'].'</td></tr>
          </table>
        ';
      }//End if condition       





  $html .='  

    <div class="section">Client Information</div>
    <table class="table">
      <tr>
        <td class="label" colspan="2">First Name</td>
        <td class="label" colspan="2">Last Name</td>
      </tr>
      <tr>
        <td class="value" colspan="2">'.$data['clientFirstName'].'</td>
        <td class="value" colspan="2">'.$data['clientLastName'].'</td>
      </tr>
      <tr>
        <td class="label" colspan="2">Home Address</td>
        <td class="label">City</td>
        <td class="label">State</td>
      </tr>
      <tr>
        <td class="value" colspan="2">'.$data['clientHomeAddress'].'</td>
        <td class="value">'.$data['clientCity'].'</td>
        <td class="value">'.$data['clientState'].'</td>
      </tr>
      <tr>
        <td class="label" width="25%">Post Code</td>
        <td class="label" width="25%">Country</td>
        <td class="label" width="25%">Date of Birth</td>
        <td class="label" width="25%">NDIS Number</td>
      </tr>
      <tr>
        <td class="value">'.$data['clientPostCode'].'</td>
        <td class="value">'.$data['clientCountry'].'</td>
        <td class="value">'.date('d/m/Y',strtotime($data['clientDateOfBirth'])).'</td>
        <td class="value">'.$data['clientNDISnumber'].'</td>
      </tr>
    </table>
    
    <table class="table tbb">
      <tr>
        <td class="label" width="50%">Will another source of funding be used (either instead of or in addtion to NDIS funding)?</td>
        <td class="label" width="50%">Please tell us the name of the other source of funding</td>  
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['anotherSourceOfFunding']).'</td>
        <td class="value">'.$data['nameOfOtherSource'].'</td>
      </tr>
    </table>
  
    <div class="section">Client Details</div>
    <table class="table">
      <tr><td class="label">Client disability - please tell us a little bit about the disability and support needs</td></tr>
      <tr><td class="value">'.$data['clientDisability'].'</td></tr>
    </table>
    <table class="table">
      <tr><td class="label">Client goals and aspirations - please tell us a little about the goals and aspirations</td></tr>
      <tr><td class="value">'.$data['clientGoals'].'</td></tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">Client communication needs - are there any communication needs (including the need for an interpreter)?</td>
        <td class="label" width="50%">Please tell us the best way for us to communicate</td>  
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['clientCommNeed']).'</td>
        <td class="value">'.$data['wayToCommunicate'].'</td>
      </tr>
    </table> 
    <table class="table tbb">
      <tr>
        <td class="label" width="50%">Client behaviours - are there any behaviours that require formal intervention</td>
        <td class="label" width="50%">Please tell us a little more about the behaviour</td>  
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['clientBehaviours']).'</td>
        <td class="value">'.$data['moreAboutBehaviour'].' </td>
      </tr>
      <tr>
        <td class="label">Client - is there a Behaviour Management Plan in place?</td>
        <td class="value">'.ucfirst($data['clientBehManPlan']).'</td>
      </tr>
    </table>   

    <div class="section">Support Team</div>
    <table class="table">
      <tr>
        <td class="label" width="50%">Support Team Management - willing and able to coordinate the Support Worker Team</td>
        <td class="label" width="50%">Please tell us any concerns or restrictions for coordinating the Support Team</td>  
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['supportTeam']).'</td>
        <td class="value">'.$data['anyConcerns'].'</td>
      </tr>
    </table> 
    <table class="table">
      <tr>
        <td class="label" width="50%">Are there any Support Workers you already know that you would like to nominate to register with Authentic Life Care?</td>
        <td class="label" width="50%">How many Support Workers would you like to nominate?</td>  
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['supportWorkersAlready']).'</td>
        <td class="value">'.$data['supportWorkers'].'</td>
      </tr>
    </table>  
  ';


    if($data['supportWorkersAlready'] === 'yes'){
      $supportWorkers = dynamicFieldsToArray($data['supportWorkerDynamic']);
      //print_r($k);
      foreach($supportWorkers as $key => $value){
        $html .= '
          <table class="table '.((sizeof($supportWorkers) == $key+1 ? 'tbb' : '')).'">
            <tr>
              <td class="label" width="25%" rowspan="2">Support Worker # '.($key+1).'</td>
              <td class="label" width="25%">First Name</td>  
              <td class="label" width="25%">Last Name</td>  
              <td class="label" width="25%">Email Address</td>  
            </tr>
            <tr>
              <td class="value">'.$value['supportWorkerFirstName'].'</td>
              <td class="value">'.$value['supportWorkerLastName'].'</td>
              <td class="value">'.$value['supportWorkerEmail'].'</td>
            </tr>
          </table>      
        ';
      }//End foreach
    }//End if condition

    
  $html .=' 
    
    <div class="section">Diversity & Inclusion</div>
    <table class="table">
      <tr>
        <td class="label" width="50%">Client gender</td>
        <td class="label" width="50%">Self describe your gender</td>  
      </tr>
      <tr>
        <td class="value">'.$data['clientGender'].'</td>
        <td class="value">'.$data['genderSelfDescribe'].'</td>
      </tr>
    </table> 
    <table class="table">
      <tr>
        <td class="label" width="50%">Do you identify as Aboriginal and / or Torres Stait Islander?</td>
        <td class="label" width="50%">Are you of a Culturally and / or Linguistically Diverse (CALD) background?</td>  
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['identifyAs']).'</td>
        <td class="value">'.ucfirst($data['youCultural']).'</td>
      </tr>
      <tr>
        <td class="label">Your country of birth</td>
        <td class="value">'.$data['countryOfBirth'].'</td>
      </tr>
      <tr>
        <td class="label">Country of birth (Other)</td>
        <td class="value">'.$data['otherCountryOfBirth'].'</td>
      </tr>      
    </table> 
    <table class="table">
      <tr>
        <td class="label" width="33.3%">Is English the main language you speak at home?</td>
        <td class="label" width="33.3%">Please let us know the main language you speak at home</td>  
        <td class="label" width="33.3%">Other</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst($data['mainEnglishLanguage']).'</td>
        <td class="value">'.$data['mainLanguage'].'</td>
        <td class="value">'.$data['otherMainLanguage'].'</td>
      </tr>
    </table>  
    <table class="table tbb">
      <tr>
        <td class="label" width="66.6%">Do you identify as Lesbian, Gay, Bi-Sexual, Transgender, Intersex and / or Queer?</td>
        <td class="value" width="33.3%">'.ucfirst($data['gayLesbian']).'</td>
      </tr>
    </table>

    <div class="section">Next Step</div>
    <table class="table">
      <tr><td class="label">Have you completed this form for yourself or for someone else?</td></tr>
      <tr><td class="value">'.$data['completeFormYourself'].'</td></tr>
    </table>
    <table class="table">
      <tr>
        <td class="label">First Name (Client Representative)</td>
        <td class="label">Last Name (Client Representative)</td>
      </tr>
      <tr>
        <td class="value">'.$data['clientRepresentativeFirstName'].'</td>
        <td class="value">'.$data['clientRepresentativeLastName'].'</td>
      </tr>
    </table>  
    <table class="table">
      <tr><td class="label">Authentic Life Care will call to discuss your registration. Who would you like us to call?</td></tr>
      <tr><td class="value">'.$data['whoToCall'].'</td></tr>
    </table> 
    
    <table class="table">
      <tr><td class="label">What days and times are best to call?</td></tr>
    </table>';

    $dayTimeDynamic = dynamicFieldsToArray($data['dayTimeDynamic']);
    //print_r($k);
    foreach($dayTimeDynamic as $key => $value){
      $html .= '
        <table class="table">
          <tr>
          <td class="label" width="33.3%">Day of the week</td>
          <td class="label" width="33.3%">Between This Time</td>
          <td class="label" width="33.3%">And This Time</td>
          </tr>
          <tr>
            <td class="value">'.$value['dayOfTheWeek'].'</td>
            <td class="value">'.$value['betweenThisTime'].'</td>
            <td class="value">'.$value['andThisTime'].'</td>
          </tr>
        </table>      
      ';
    }//End foreach

    $html .='
      <table class="table tbb">
        <tr>
          <td class="label" width="50%">What is the best phone number to call on?</td>
          <td class="label" width="50%">What is the best email address if we need to email?</td>  
        </tr>
        <tr>
          <td class="value">'.$data['phoneNumber'].'</td>
          <td class="value">'.$data['email'].'</td>
        </tr>
      </table> 
  ';

  $html .= '</div></body></html>';


  

?>