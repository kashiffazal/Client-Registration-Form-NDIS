import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step11 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="clientCommNeed"
        type="radio"
        label="Client communication needs - are there any communication needs (including the need for an interpreter)?"
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

export default Step11;