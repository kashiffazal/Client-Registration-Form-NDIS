import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step22 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <p className="help">If you do not wish to answer this question please select prefer not to say</p>
        <AntInput
          name="identifyAs"
          type="radio"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'Prefer not to say', label: 'Prefer not to say' }
          ]}
          formProps={props.formProps}
          label="Do you identify as Aboriginal and / or Torres Stait Islander?"
        />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step22;
