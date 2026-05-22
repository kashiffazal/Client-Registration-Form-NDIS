import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step14 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="moreAboutBehaviour"
        type="textarea"
        label="Please tell us a little more about the behaviour"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step14;