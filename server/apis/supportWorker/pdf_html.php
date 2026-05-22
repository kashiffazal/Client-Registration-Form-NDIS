<?php

  $data = $_POST;

    #Header ---------------------------------//
    $header = "
        <div style='margin:0px 0px;'>
            <table border='0' style='width:100%;padding:0;border-collapse: collapse;'>
                <tr>
                  <td width='50%' style='font-size:20px;color:#424242'><b>Support Worker Registration Form</b></td>
                  <td width='50%' style='text-align:right;'><img align='right' src='../../logo.png' width='150px'></td>
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
      <title>Support Worker Registration Form</title>
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
    <div class="section" style="margin-top:-10px">Contact Information</div>
    
    <table class="table tbb">
      <tr>
        <td class="label" colspan="2">First Name</td>
        <td class="label" colspan="2">Last Name</td>
      </tr>
      <tr>
        <td class="value" colspan="2">'.@$data['first_name'].'</td>
        <td class="value" colspan="2">'.@$data['last_name'].'</td>
      </tr>
      <tr>
        <td class="label" width="25%">Address</td>
        <td class="label" width="25%">City</td>
        <td class="label" width="25%">State</td>
        <td class="label" width="25%">Post Code</td>
      </tr>
      <tr>
        <td class="value">'.@$data['street_address'].'</td>
        <td class="value">'.@$data['city'].'</td>
        <td class="value">'.@$data['state'].'</td>
        <td class="value">'.@$data['postCode'].'</td>
      </tr>
      <tr>
        <td class="label" width="25%">Country</td>
        <td class="label" width="25%">Phone</td>
        <td class="label" width="25%">Email</td>
        <td class="label" width="25%">Date of Birth</td>
      </tr>
      <tr>
        <td class="value">'.@$data['country'].'</td>
        <td class="value">'.@$data['phone'].'</td>
        <td class="value">'.@$data['email'].'</td>
        <td class="value">'.date('d-m-Y',strtotime($data['dateOfBirth'])).'</td>
      </tr>
    </table>
    
    <div class="section">Before You Begin</div>
    <table class="table tbb">
      <tr>
        <td class="label" width="50%">Please let us know how you first heard about Authentic Life Care?</td>
        <td class="label" width="50%">Please provide the name of the person, venue or publication/media</td>
      </tr>
      <tr>
        <td class="value">'.@$data['firstHeardAboutYouFirst'].'</td>
        <td class="value">'.@$data['personPublicationMediaName'].'</td>
      </tr>
    </table>
  
    <div class="section">Support Worker Role</div>
    <table class="table">
      <tr>
        <td class="label" width="33.3%">Are you currently working as, or have you previously worked as a Support Worker?</td>
        <td class="label" width="33.3%">Please tell us a little more about your experience as a Support Worker</td>
        <td class="label" width="33.3%">Tell us a little bit about why you are interested in being a Support Worker</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst(@$data['previouslyWorked']).'</td>
        <td class="value">'.@$data['aboutExperience'].'</td>
        <td class="value">'.@$data['whyInterested'].'</td>
      </tr>
      <tr>
        <td class="label">Are you currently working for, or connected to a Authentic Life Care Client?</td>
        <td class="label">Client\'s First Name</td>
        <td class="label">Client\'s Last Name</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst(@$data['currentlyWorking']).'</td>
        <td class="value">'.@$data['currentClientFirstName'].'</td>
        <td class="value">'.@$data['currentClientLastName'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="66.6%">Have you received an email from Authentic Life Care with instructions on how to register as a Casual Support Worker?</td>
        <td class="value" width="33.3%">'.ucfirst(@$data['haveYouReceiveEmail']).'</td>
      </tr>
    </table>
    <table class="table">
      <tr><td class="label">Support Services</td></tr>
      <tr><td class="value">'.@$data['supportServices'].'</td></tr>
      <tr><td class="label">Specialised Support Services</td></tr>
      <tr><td class="value">'.@$data['specialisedSupportServices'].'</td></tr>
    </table>

    <table class="table">
      <tr><td class="label">Secondary employment declaration</td></tr>
      <tr><td class="value">'.@$data['secondaryEmploymentDeclaration'].'</td></tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">First Organisation Name</td>
        <td class="label" width="50%">First Organisation Address</td>
      </tr>
      <tr>
        <td class="value">'.@$data['first_org_name'].'</td>
        <td class="value">'.@$data['first_org_addr'].'</td>
      </tr>
    </table>
    <table class="table tbb">
      <tr>
        <td class="label" width="25%">City</td>
        <td class="label" width="25%">State</td>
        <td class="label" width="25%">Post Code</td>
        <td class="label" width="25%">Country</td>
      </tr>
      <tr>
        <td class="value">'.@$data['first_org_city'].'</td>
        <td class="value">'.@$data['first_org_state'].'</td>
        <td class="value">'.@$data['first_org_post_code'].'</td>
        <td class="value">'.@$data['first_org_country'].'</td>
      </tr>
    </table>
    <hr/>
    <table class="table">
      <tr>
        <td class="label" width="50%">Second Organisation Name</td>
        <td class="label" width="50%">Second Organisation Address</td>
      </tr>
      <tr>
        <td class="value">'.@$data['second_org_name'].'</td>
        <td class="value">'.@$data['second_org_addr'].'</td>
      </tr>
    </table>
    <table class="table tbb">
      <tr>
        <td class="label" width="25%">City</td>
        <td class="label" width="25%">State</td>
        <td class="label" width="25%">Post Code</td>
        <td class="label" width="25%">Country</td>
      </tr>
      <tr>
        <td class="value">'.@$data['second_org_city'].'</td>
        <td class="value">'.@$data['second_org_state'].'</td>
        <td class="value">'.@$data['second_org_post_code'].'</td>
        <td class="value">'.@$data['second_org_country'].'</td>
      </tr>
    </table>
    
    <div class="section">About You</div>
    <table class="table">
      <tr><td class="label">Your Address</td></tr>
      <tr><td class="value">'.@$data['your_addr'].'</td></tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="33.3%">City</td>
        <td class="label" width="33.3%">State</td>
        <td class="label" width="33.3%">Post Code</td>
      </tr>
      <tr>
        <td class="value">'.@$data['your_city'].'</td>
        <td class="value">'.@$data['your_state'].'</td>
        <td class="value">'.@$data['your_post_code'].'</td>
      </tr>
      <tr>
        <td class="label">Country</td>
        <td class="label">Your Email</td>
        <td class="label">Your Phone</td>
      </tr>
      <tr>
        <td class="value">'.@$data['your_country'].'</td>
        <td class="value">'.@$data['your_email'].'</td>
        <td class="value">'.@$data['your_phone'].'</td>
      </tr>
    </table>
    <table class="table tbb">
      <tr><td class="label">Do you have, or have you ever had any disability or health conditions including, allergies, illnesses, injuries or diseases lasting for more than 6 months and that may adversely impact on your abilities to carry out the duties of your role?</td></tr>
      <tr><td class="value">'.ucfirst(@$data['hadAnyDisability']).'</td></tr>
      <tr><td class="label">Please provide information below:</td></tr>
      <tr><td class="value">'.@$data['hadAnyDisabilityDetails'].'</td></tr>
    </table>

    <div class="section">Right to Work in Australia</div>
    <table class="table">
      <tr>
        <td class="label" width="50%">Are you an Australian Citizen or Permanent Resident?</td>
        <td class="label" width="50%">Do you have a visa that provides you with the Right to Work in Australia?</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst(@$data['australianCitizen']).'</td>
        <td class="value">'.ucfirst(@$data['haveVisa']).'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="25%">Class and subclass of your current visa?</td>
        <td class="label" width="25%">Visa grant number</td>
        <td class="label" width="25%">Visa expiry date</td>
        <td class="label" width="25%">Passport number</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst(@$data['visaClassSubClass']).'</td>
        <td class="value">'.@$data['visaGrantNumber'].'</td>
        <td class="value">'.date('d-m-Y', strtotime($data['visaExpDate'])).'</td>
        <td class="value">'.@$data['passportNumber'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">Passport country of issue</td>
        <td class="label" width="50%">Are there any restrictions on your visa, or any other information about your visa that you think we should know?</td>
      </tr>
      <tr>
        <td class="value">'.@$data['countryOfIssue'].'</td>
        <td class="value">'.@$data['restrictionsOnVisa'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">Passport date of issue</td>
        <td class="label" width="50%">Passport date of expiry</td>
      </tr>
      <tr>
        <td class="value">'.date('d-m-Y', strtotime($data['passportIssueDate'])).'</td>
        <td class="value">'.date('d-m-Y', strtotime($data['passportExpDate'])).'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="80%">If you don\'t have visa</td>
        <td class"value">'.@$data['dontHaveVisaDesc'].'</td>
      </tr>
    </table>
    <table class="table tbb">
      <tr><td class="label">Certified Copy of Your Passport</td></tr>
      <tr><td class="value">';
        foreach(explode(",",$passport) as $value){
          $html .= '<a href="'.$documentPath.'/supportWorker/passport/'.$value.'">'.$value.'</a><br/>';
        }//End function
      $html .='</td></tr>
    </table>

    <div class="section">Diversity & Inclusion</div>
    <table class="table">
      <tr>
        <td class="label" width="50%">Gender</td>
        <td class="label" width="50%">Please self describe your gender below</td>
      </tr>
      <tr>
        <td class="value">'.@$data['gender'].'</td>
        <td class="value">'.@$data['genderSelfDesc'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="80%">Do you identify as Aboriginal and / or Torres Strait Islander?</td>
        <td class="value" width="20%">'.ucfirst(@$data['identify']).'</td>
      </tr>
      <tr>
        <td class="label">Are you of a Culturally and / or Linguistically Diverse (CALD) background?</td>
        <td class="value">'.ucfirst(@$data['culturally']).'</td>
      </tr>
      <tr>
        <td class="label">Were you born in Australia?</td>
        <td class="value">'.ucfirst(@$data['wherYouBorn']).'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
      <tr>
        <td class="label" width="50%">Please select your country of birth</td>
        <td class="label" width="50%">If you have selected Other, please let us know your country of birth</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst(@$data['bornCountry']).'</td>
        <td class="value">'.ucfirst(@$data['otherBornCountry']).'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="33.3%">Is English the main language you speak at home?</td>
        <td class="label" width="33.3%">Please let us know the main language you speak at home</td>
        <td class="label" width="33.3%">Other - Please let us know the main language spoken at home</td>
      </tr>
      <tr>
        <td class="value">'.ucfirst(@$data['isEnglishMain']).'</td>
        <td class="value">'.@$data['mainLanguage'].'</td>
        <td class="value">'.@$data['otherMainLanguage'].'</td>
      </tr>
    </table>
    <table class="table tbb">
      <tr>
        <td class="label" width="80%">Do you identify as Lesbian, Gay, Bi-Sexual, Transgender, Intersex and / or Queer?</td>
        <td class="value" width="20%">'.ucfirst(@$data['identifyAs']).'</td>
      </tr>
    </table>

    
    <div class="section">Experience & Skills</div>
    <table class="table">
      <tr>
        <td class="label" width="50%">Please let us know about your current, or previous, work experience</td>
        <td class="label" width="50%">What is the name of your current employer?</td>
      </tr>
      <tr>
        <td class="value">'.@$data['workExp'].'</td>
        <td class="value">'.@$data['nameOfEmployer'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="66.6%">What is the address of your current employer?</td>
        <td class="label" width="33.3%">City / Town</td>
      </tr>
      <tr>
        <td class="value">'.@$data['exp_street_address'].'</td>
        <td class="value">'.@$data['exp_city'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="33.3%">State</td>
        <td class="label" width="33.3%">Post Code</td>
        <td class="label" width="33.3%">Country</td>
      </tr>
      <tr>
        <td class="value">'.@$data['exp_state'].'</td>
        <td class="value">'.@$data['exp_postCode'].'</td>
        <td class="value">'.@$data['exp_country'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="66.6%">What is the address of your last employer?</td>
        <td class="label" width="33.3%">City / Town</td>
      </tr>
      <tr>
        <td class="value">'.@$data['exp_last_street_address'].'</td>
        <td class="value">'.@$data['exp_last_city'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="33.3%">State</td>
        <td class="label" width="33.3%">Post Code</td>
        <td class="label" width="33.3%">Country</td>
      </tr>
      <tr>
        <td class="value">'.@$data['exp_last_state'].'</td>
        <td class="value">'.@$data['exp_last_postCode'].'</td>
        <td class="value">'.@$data['exp_last_country'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">What is your current role?</td>
        <td class="label" width="50%">What are the main skills you have gained in your current role?</td>
      </tr>
      <tr>
        <td class="value">'.@$data['currentWorkRole'].'</td>
        <td class="value">'.@$data['currentWorkSkills'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr><td class="label">If you have a CV, please upload below</td></tr>
      <tr><td class="value">';
        foreach(explode(",",$uploadCV) as $value){
          $html .= '<a href="'.$documentPath.'/supportWorker/cv/'.$value.'">'.$value.'</a><br/>';
        }//End function
      $html .='</td></tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">What was the name of your last employer?</td>
        <td class="label" width="50%">What year did you stop working for your last employer?</td>
      </tr>
      <tr>
        <td class="value">'.@$data['nameOfLastEmp'].'</td>
        <td class="value">'.@$data['yearOfStopWorking'].'</td>
      </tr>
      <tr>
        <td class="label">What was your previous role?</td>
        <td class="label">What are the main skills you gained in your previous role?</td>
      </tr>
      <tr>
        <td class="value">'.@$data['previousRole'].'</td>
        <td class="value">'.@$data['previousSkills'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="80%">Have you undertaken any relevant volunteer work?</td>
        <td class="value" width="20%">'.ucfirst(@$data['undertakenVolunteer']).'</td>
      </tr>
    </table>
    <table class="table tbb">
      <tr>
        <td class="label" width="33.3%">Please let us know what type of volunteering you have undertaken</td>
        <td class="label" width="33.3%">If you have selected Other, please let us know a little more about the type of volunteering you have undertaken</td>
        <td class="label" width="33.3%">What are the main skills you have developed while volunteering?</td>
      </tr>
      <tr>
        <td class="value">'.@$data['typeOfVolunteering'].'</td>
        <td class="value">'.@$data['otherVolunteering'].'</td>
        <td class="value">'.@$data['skillsOnVolunteering'].'</td>
      </tr>
    </table>


    <div class="section">Qualifications</div>
    <table class="table">
      <tr>
        <td class="label" width="80%">Do you have any relevant qualifications you would like to tell us about?</td>
        <td class="value" width="20%">'.ucfirst(@$data['relevantQualifications']).'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">Type of qualification</td>
        <td class="label" width="50%">If you have selected Other, please tell us what type of qualification your hold</td>
      </tr>
      <tr>
        <td class="value">'.@$data['typeOfQualification'].'</td>
        <td class="value">'.@$data['otherQulification'].'</td>
      </tr>
      <tr>
        <td class="label">Qualification certificate name</td>
        <td class="label">Qualification completed or expected completion year</td>
      </tr>
      <tr>
        <td class="value">'.@$data['qualCertificateName'].'</td>
        <td class="value">'.@$data['qualCompleteYear'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr><td class="label">Qualification issuing body name e.g., school, university, TAFE name)?</td></tr>
      <tr><td class="value">'.@$data['qualSchoolUniName'].'</td></tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="80%">Would you like to add another qualification?</td>
        <td class="value" width="20%">'.ucfirst(@$data['anotherQulification']).'</td>
      </tr>
    </table>
    <table class="table">
      <tr>
        <td class="label" width="50%">Type of qualification</td>
        <td class="label" width="50%">If you have selected Other, please tell us what type of qualification your hold</td>
      </tr>
      <tr>
        <td class="value">'.@$data['anotherTypeOfQualification'].'</td>
        <td class="value">'.@$data['anotherOtherQulification'].'</td>
      </tr>
      <tr>
        <td class="label">Qualification certificate name</td>
        <td class="label">Qualification completed or expected completion year</td>
      </tr>
      <tr>
        <td class="value">'.@$data['anotherQualCertificateName'].'</td>
        <td class="value">'.@$data['anotherQualCompleteYear'].'</td>
      </tr>
    </table>
    <table class="table">
      <tr><td class="label">Qualification issuing body name e.g., school, university, TAFE name)?</td></tr>
      <tr><td class="value">'.@$data['anotherQualSchoolUniName'].'</td></tr>
    </table>
    <table class="table tbb">
      <tr><td class="label">Please upload copies of any qualification certificates below</td></tr>
      <tr><td class="value">';
        foreach(explode(",",$certificates) as $value){
          $html .= '<a href="'.$documentPath.'/supportWorker/certificates/'.$value.'">'.$value.'</a><br/>';
        }//End function
      $html .='</td></tr>
    </table>';

  $html .= '</div></body></html>';


?>