import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step10 extends Component {
  state = {
    gender : ''
  }
  render() {
    const props = this.props;
    const stg = this.state.gender;
    return (
      <React.Fragment>
        <h2 className="form_heading">Diversity & Inclusion</h2>
        <hr className="form_hr" />
        <p className="help">Authentic Life Care is committed to creating and sustaining an inclusive environment for everybody. The following information is requested by Authentic Life Care for statistical purposes only and to facilitate our compliance with our employee D&I programs.</p>
        <AntInput
            name="gender"
            type="radio"
            label="Gender"
            vertical
            radioOptions={[
              { value: 'Female', label: 'Female' },
              { value: 'Male', label: 'Male' },
              { value: 'Prefer not to say', label: 'Prefer not to say' },
              { value: 'Prefer to self describe', label: 'Prefer to self describe' }
            ]}
            formProps={props.formProps}
            onChange={(e) => this.setState({ gender: e })}
          />
          {stg === 'Prefer to self describe' && 
            <AntInput label="Please self describe your gender below" name="genderSelfDesc" formProps={props.formProps} noRequired/>
          }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount(){
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if(fd && fd.gender === 'Prefer to self describe'){
        this.setState({gender : fd.gender},() => {
          this.props.formProps.setFieldsValue({
            genderSelfDesc : fd.genderSelfDesc
          });
        });
      }//End if condition
    },5);  
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step10);