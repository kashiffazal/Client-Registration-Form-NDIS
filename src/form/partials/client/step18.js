import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step18 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="supportWorkersAlready"
        type="radio"
        label="Are there any Support Workers you already know that you would like to nominate to register with Authentic Life Care?"
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

export default Step18;