import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step28 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="completeFormYourself"
        type="radio"
        vertical
        radioOptions={[
          { value: 'Myself (Client)', label: 'Myself (Client)' },
          { value: 'Someone Else (Client Representative)', label: 'Someone Else (Client Representative)' }
        ]}
        label="Have you completed this form for yourself or for someone else? *"
        formProps={props.formProps}
      />
    );//End return
  }//End render
}//End class

export default Step28;
