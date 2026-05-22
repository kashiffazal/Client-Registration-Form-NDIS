import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step34 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        type="email"
        name="email"
        label="What is the best email address if we need to email?"
        help="By providing Authentic Life Care with your email address, you authorise Authentic Life Care to use this email address to send you electronic communication from time to time including timesheet approvals, invoices, newsletters, marketing and invitations"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step34;