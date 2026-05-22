import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step3 extends Component {
  state = {
    previouslyWorked: '',
    currentlyWorking: '',
    currentClientFirstName: '',
  }
  render() {
    const props = this.props;
    const st = this.state;
    return (
      <React.Fragment>
        <h2 className="form_heading">Support Worker Role</h2>
        <hr className="form_hr" />
        <AntInput
          name="previouslyWorked"
          type="radio"
          label="Are you currently working as, or have you previously worked as a Support Worker?"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ previouslyWorked: e })}
        />
        {st.previouslyWorked === 'yes' &&
          <React.Fragment>
            <AntInput type="textarea" label="Please tell us a little more about your experience as a Support Worker" name="aboutExperience" formProps={props.formProps} noRequired />
            <AntInput
              name="currentlyWorking"
              type="radio"
              label="Are you currently working for, or connected to a Authentic Life Care Client?"
              vertical
              radioOptions={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]}
              formProps={props.formProps}
              onChange={(e) => this.setState({ currentlyWorking: e })}
              noRequired
            />
            {st.currentlyWorking === 'yes' &&
              <Row gutter={20}>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <AntInput type="text" label="Client's Name" help="First" name="currentClientFirstName" formProps={props.formProps} onChange={(e) => this.setState({ currentClientFirstName: e })} noRequired />
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <AntInput type="text" help="Last" className="field_no_label" name="currentClientLastName" formProps={props.formProps} noRequired />
                </Col>
              </Row>
            }
          </React.Fragment>
        }
        {st.previouslyWorked === 'no' &&
          <AntInput type="textarea" label="Tell us a little bit about why you are interested in being a Support Worker" name="whyInterested" formProps={props.formProps} noRequired />
        }

        {st.currentClientFirstName &&
          <AntInput
            name="haveYouReceiveEmail"
            type="radio"
            label="Have you received an email from Authentic Life Care with instructions on how to register as a Casual Support Worker?"
            vertical
            radioOptions={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            formProps={props.formProps}
            noRequired
          />
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      let previouslyWorked = this.props.formProps.getFieldValue('previouslyWorked');
      if (previouslyWorked === 'yes') {
        console.log(fd);
        this.setState({ previouslyWorked: previouslyWorked }, () => {
          this.props.formProps.setFieldsValue({ aboutExperience: fd.aboutExperience, currentlyWorking: fd.currentlyWorking })
          if (fd.currentlyWorking === 'yes') {
            this.setState({ currentlyWorking: fd.currentlyWorking }, () => {
              this.props.formProps.setFieldsValue({ currentClientFirstName: fd.currentClientFirstName, currentClientLastName: fd.currentClientLastName })
              if (fd.currentClientFirstName) {
                this.setState({ currentClientFirstName: fd.currentClientFirstName }, () => {
                  this.props.formProps.setFieldsValue({ haveYouReceiveEmail: fd.haveYouReceiveEmail })
                })
              }//End if condition
            })
          }//End if condition
        });
      }//End if condition

      if (previouslyWorked === 'no') {
        this.setState({ previouslyWorked: fd.previouslyWorked }, () => {
          this.props.formProps.setFieldsValue({ whyInterested: fd.whyInterested })
        })
      }//End if condition

    }, 5)
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step3);