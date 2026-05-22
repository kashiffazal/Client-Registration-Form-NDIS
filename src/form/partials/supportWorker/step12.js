import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step12 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">Diversity & Inclusion</h2>
        <hr className="form_hr" />
        <AntInput
            name="culturally"
            type="radio"
            label="Are you of a Culturally and / or Linguistically Diverse (CALD) background?"
            vertical
            radioOptions={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'Prefer not to say', label: 'Prefer not to say' }
            ]}
            help="You may be considered CALD if you were born in a country other than Australia or your first language or the main language you speak at home is not English or your family still has a strong affiliation with another country or culture"
            formProps={props.formProps}
          />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step12;