import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step15 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="clientBehManPlan"
        type="radio"
        label="Client - is there a Behaviour Management Plan in place?"
        vertical
        radioOptions={[
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]}
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step15;