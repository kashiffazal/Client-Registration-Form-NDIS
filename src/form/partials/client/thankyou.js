import React, { Component } from 'react';
import { Icon } from 'antd';
class Step1 extends Component {
  render() {
    const email = this.props.email;
    return (
      <div className="thank_you_container">
        <Icon className="icon" type="check-circle" style={{ fontSize: '20px' }} />
        <br /><br />
        <p><strong>Thank you</strong> for submitting Client Registration.</p>
        <p>
          The <strong>Authentic Life Care</strong> Team will review your registration and will be in <strong>touch with you or your nominated representative very soon</strong>. However, If you have any queries about your registration please contact us at
          <br />
          <a href={`mailto:!{email}`}><u>{email}</u></a>
        </p>
      </div>
    );//End return
  }//End render
}//End class

export default Step1;