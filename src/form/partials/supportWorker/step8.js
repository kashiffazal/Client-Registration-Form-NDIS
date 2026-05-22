import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step8 extends Component {
  state = {
    hadAnyDisability: ''
  }
  render() {
    const props = this.props;
    const sta = this.state.hadAnyDisability;
    return (
      <React.Fragment>
        <h2 className="form_heading">About You</h2>
        <hr className="form_hr" />
        <AntInput
          name="hadAnyDisability"
          type="radio"
          containerClassName="long_label"
          label="Do you have, or have you ever had any disability or health conditions including, allergies, illnesses, injuries or diseases lasting for more than 6 months and that may adversely impact on your abilities to carry out the duties of your role?"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ hadAnyDisability: e })}
        />

        {sta === 'yes' &&
          <AntInput type="textarea" label="Please provide information below" name="hadAnyDisabilityDetails" formProps={props.formProps} />
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount(){
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if(fd && fd.hadAnyDisability === 'yes'){
        this.setState({hadAnyDisability : fd.hadAnyDisability}, () => {
          this.props.formProps.setFieldsValue({hadAnyDisabilityDetails : fd.hadAnyDisabilityDetails});
        });
      }//End if condition
    },5);  
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step8);