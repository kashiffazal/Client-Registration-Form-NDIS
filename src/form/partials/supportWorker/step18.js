import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step18 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">Confirmation</h2>
        <hr className="form_hr" />
        <AntInput
          type="checkbox"
          name="confirmation"
          formProps={props.formProps}
          text="Please tick the box to confirm that the information you have provided in this application is honest and true, to the best of your knowledge, and confirm you understand and agree that you are applying for the role of a Casual Support Worker."
          containerClassName="long_checkbox_label"
          reqMsg="Please tick the box"
        />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step18;