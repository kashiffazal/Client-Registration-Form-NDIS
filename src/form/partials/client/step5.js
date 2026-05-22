import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step5 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput label="Client date of birth" type="datepicker" name="clientDateOfBirth" style={{ width: '180px' }} help="dd/mm/yyyy" formProps={props.formProps} />
    );//End return
  }//End render
}//End class

export default Step5;