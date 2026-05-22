import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step12 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="wayToCommunicate"
        type="textarea"
        label="Please tell us the best way for us to communicate"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step12;