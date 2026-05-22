import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step10 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="clientGoals"
        type="textarea"
        label="Client goals and aspirations - please tell us a little about the goals and aspirations"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step10;