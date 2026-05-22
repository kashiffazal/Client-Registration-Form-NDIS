import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step16 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        name="supportTeam"
        type="radio"
        label="Support Team Management - willing and able to coordinate the Support Worker Team"
        help="All users of Authentic Life Care Services must be willing and able to coordinate their Support Team or have an approved representative that can do so on their behalf"
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

export default Step16;