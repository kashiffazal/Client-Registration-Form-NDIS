import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step13 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="clientBehaviours"
        type="radio"
        label="Client behaviours - are there any behaviours that require formal intervention"
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

export default Step13;