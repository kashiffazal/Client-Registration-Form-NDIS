import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step11 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">Diversity & Inclusion</h2>
        <hr className="form_hr" />
        <AntInput
            name="identify"
            type="radio"
            label="Do you identify as Aboriginal and / or Torres Strait Islander?"
            vertical
            radioOptions={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'Prefer not to say', label: 'Prefer not to say' }
            ]}
            formProps={props.formProps}
          />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step11;