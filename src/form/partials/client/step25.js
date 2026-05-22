import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step25 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <p className="help">If you do not wish to answer this question please select prefer not to say</p>
        <AntInput
          name="mainEnglishLanguage"
          type="radio"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'Prefer not to say', label: 'Prefer not to say' }
          ]}
          label="Is English the main language you speak at home?"
          formProps={props.formProps}
        />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step25;
