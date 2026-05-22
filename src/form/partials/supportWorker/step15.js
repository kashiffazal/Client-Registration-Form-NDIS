import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step15 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">Diversity & Inclusion</h2>
        <hr className="form_hr" />
        <AntInput
          name="identifyAs"
          type="radio"
          label="Do you identify as Lesbian, Gay, Bi-Sexual, Transgender, Intersex and / or Queer?"
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

export default Step15;