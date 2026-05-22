import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step23 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <p className="help">If you do not wish to answer this question please select prefer not to say</p>
        <AntInput
          name="youCultural"
          type="radio"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'Prefer not to say', label: 'Prefer not to say' }
          ]}
          label="Are you of a Culturally and / or Linguistically Diverse (CALD) background?"
          help="You may be considered CALD if you were born in a country other than Australia or your first language or the main language you speak at home is not English or your family still has a strong affiliation with another country or culture"
          formProps={props.formProps}
        />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step23;
