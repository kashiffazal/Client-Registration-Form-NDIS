import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step8 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="nameOfOtherSource"
        label="Please tell us the name of the other source of funding"
        help="For example, Funds in Court or Own Funding"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step8;