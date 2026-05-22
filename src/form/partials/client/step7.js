import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step7 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="anotherSourceOfFunding"
        type="radio"
        label="Will another source of funding be used (either instead of or in addtion to NDIS funding)?"
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

export default Step7;