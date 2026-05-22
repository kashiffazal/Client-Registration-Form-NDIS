import React, { Component } from 'react';
import { Icon } from 'antd';
class Step1 extends Component {
  render() {
    const email = this.props.email;
    const name = this.props.name;
    return (
      <div className="thank_you_container">
        <Icon className="icon" type="check-circle" style={{ fontSize: '20px' }} />
        <br /><br />
        <p><strong>Thank you {name}</strong> for applying as a Support Worker with Authentic Life Care.</p>
        <hr />
        <h2>What happens next?</h2>
        <h3>If your application is successful, we will invite you to complete a registration form with some further information about you, the work you are looking to do with Authentic Life Care Clients as well as asking you to upload your identification, security and verification documents (see the list below).</h3>
        <h3>If you have any questions about your application, please us at <a href={`mailto:${email}`}><u>{email}</u></a> or find out more information about Authentic Life Care on our website <a href='https://authenticlifecare.com.au' target="_blank"><u>https://authenticlifecare.com.au</u></a></h3>
        <hr />

        <ul className="thank_you_list">
          <li>List of information and documents:</li>
          <li>Your Emergency Contact Information</li>
          <li>Photo ID (e.g., your driving licence)</li>
          <li>Medicare Card</li>
          <li>National Police Check - some applicants also require International Police Checks</li>
          <li>Working with Children's Check (click <a href="https://www.workingwithchildren.vic.gov.au/individuals/applicants/how-to-apply#Complete_online_application" target="_blank">HERE</a> to apply)</li>
          <li>CPR and / or First Aid Certificate</li>
          <li>Names and Contact details of 2 Referees</li>
          <li>Tax File Number (TFN) form (click <a href="https://www.ato.gov.au/uploadedFiles/Content/IND/Downloads/TFN_declaration_form_N3092.pdf" target="_blank">HERE</a> to download a TFN form)</li>
          <li>Superannuation Standard Choice (Super) form (click <a href="https://www.ato.gov.au/assets/0/104/2244/2335/35c234b5-6918-4dd0-a3db-95edfd76adc0.pdf" target="_blank">HERE</a> to download a Super form)</li>
          <li>If you have any questions about Authentic Life Care, or your application, please email us at <a href={`mailto:${email}`}><u>{email}</u></a></li>
        </ul>
      </div>
    );//End return
  }//End render
}//End class

export default Step1;