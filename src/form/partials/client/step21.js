import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step21 extends Component {
  state = {
    conditionalValue: 'Prefer to self describe',
    value: ''
  }

  render() {
    const props = this.props;
    const st = this.state;
    return (
      <React.Fragment>
        <AntInput
          name="clientGender"
          type="radio"
          vertical
          radioOptions={[
            { value: 'Female', label: 'Female' },
            { value: 'Male', label: 'Male' },
            { value: st.conditionalValue, label: st.conditionalValue }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ value: e })}
          label="Client gender"
        />

        {st.value === st.conditionalValue &&
          <AntInput
            name="genderSelfDescribe"
            type="text"
            formProps={props.formProps}
            label="Please use the box below to self describe your gender"
          />
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let conditionalValue = 'Prefer to self describe';
      if (this.props.formProps.getFieldValue('clientGender') === conditionalValue) {
        this.setState({ value: conditionalValue }, () => {
          this.props.formProps.setFieldsValue({ genderSelfDescribe: this.props.store_values.form_data.genderSelfDescribe })
        });
      }//End if condition
    }, 5)
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step21);
