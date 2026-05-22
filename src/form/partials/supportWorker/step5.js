import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step5 extends Component {
  state = {
    supportServices: ''
  }
  render() {
    const props = this.props;
    const sts = this.state.supportServices;
    return (
      <React.Fragment>
        <h2 className="form_heading">Support Worker Role</h2>
        <hr className="form_hr" />
        <p>Thinking about the role of a <strong>Authentic Life Care Support Worker,</strong> please select the areas of <strong>Support Services</strong> you are <strong>interested in delivering,</strong> or that you have had <strong>experience delivering</strong></p>
        <p>While some Authentic Life Care Clients require Support Workers to have previous experience, <strong>many of our Clients, or Client's Representatives,</strong> will <strong>provide training and support</strong></p>
        <AntInput
          type="checkbox"
          name="supportServices"
          formProps={props.formProps}
          label="Support Services"
          vertical
          onChange={(e) => this.setState({ supportServices: e })}
          group={[
            { label: 'All Support Services' },
            { label: 'Personal Care' },
            { label: 'Help In The Community' },
            { label: 'Help At Home' },
            { label: 'Education / Training / Employment Support' },
            { label: 'Therapy Support' },
            { label: 'Transport Assistance' },
            { label: 'Specialised Support Services' },
          ]}
          reqMsg="Choose your option(s)"
          value={this.props.store_values.support_worker_data.supportServices}
        />

        {(sts.includes('All Support Services') || sts.includes('Specialised Support Services')) &&
          <React.Fragment>
            <h2 className="form_heading">Specialised Support Services</h2>
            <hr className="form_hr" />
            <AntInput
              type="checkbox"
              name="specialisedSupportServices"
              formProps={props.formProps}
              label="Specialised Support Services"
              vertical
              group={[
                { label: 'All Specialised Support Services' },
                { label: 'Allergies' },
                { label: 'Anaphylaxis' },
                { label: 'Behaviour Management' },
                { label: 'Bowel Care' },
                { label: 'Catheter or Condom Drainage' },
                { label: 'Diabetes Assistance' },
                { label: 'Epilepsy or Seizure' },
                { label: 'Manual Handling (Lifting / Hoisting / Transfers)' },
                { label: 'Mealtime Assistance & Feeding' },
                { label: 'Medication Administration' },
                { label: 'PEG (Percutaneous Endoscopic Gastronomy)' },
                { label: 'Shallow Suctioning' },
                { label: 'Ventilator Care' },
                { label: 'Wound / Pressure Care' },
              ]}
              reqMsg="Choose your option(s)"
              value={this.props.store_values.support_worker_data.specialisedSupportServices}
              noRequired
            />
          </React.Fragment>
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount(){
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data.supportServices;
      if(fd && fd.includes('All Support Services')){this.setState({supportServices : fd})}//End if condition
    }, 5);
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step5);