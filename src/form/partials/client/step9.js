import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step9 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="clientDisability"
        type="textarea"
        label="Client disability - please tell us a little bit about the disability and support needs"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step9;