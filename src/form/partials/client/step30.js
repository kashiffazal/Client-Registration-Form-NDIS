import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step30 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="whoToCall"
        type="radio"
        vertical
        radioOptions={[
          { value: 'Client', label: 'Client' },
          { value: 'Client Representative', label: 'Client Representative' }
        ]}
        label="Authentic Life Care will call to discuss your registration. Who would you like us to call?"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step30;
