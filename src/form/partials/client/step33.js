import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step33 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="phoneNumber"
        label="What is the best phone number to call on?"
        help="By providing Authentic Life Care with your mobile number you authorise Authentic Life Care to use this mobile to send you elecronic communication and SMS Texts from time to time including alerts, marketing and invitations"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step33;