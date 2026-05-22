import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step17 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="anyConcerns"
        type="textarea"
        label="Please tell us any concerns or restrictions for coordinating the Support Team"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step17;