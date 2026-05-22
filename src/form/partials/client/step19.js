import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step18 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="supportWorkers"
        type="radio"
        label="How many Support Workers would you like to nominate?"
        help="Authentic Life Care will email registration details to your Support Workers"
        radioOptions={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' }
        ]}
        formProps={props.formProps}
        onChange={(e) => props.selectedValue(e)}
      />
    );//End return
  }//End render
}//End class

export default Step18;