import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step27 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <p className="help">If you do not wish to answer this question please select prefer not to say</p>
        <AntInput
          name="gayLesbian"
          type="radio"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'Prefer not to say', label: 'Prefer not to say' }
          ]}
          label="Do you identify as Lesbian, Gay, Bi-Sexual, Transgender, Intersex and / or Queer?"
          formProps={props.formProps}
        />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step27;
