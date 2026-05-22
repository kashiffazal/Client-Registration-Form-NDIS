import React, { Component } from 'react';
import { AntInput, AntFileUpload } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { Lists } from '../../lists';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step16 extends Component {
  state = {
    workExp: '',
    undertakenVolunteer: '',
    typeOfVolunteering: '',
    uploadCV: []
  }
  render() {
    const props = this.props;
    const stw = this.state.workExp;
    const stu = this.state.undertakenVolunteer;
    const stt = this.state.typeOfVolunteering;
    return (
      <React.Fragment>
        <h2 className="form_heading">Experience & Skills</h2>
        <hr className="form_hr" />

        <AntInput label="Please let us know about your current, or previous, work experience" type="select" name="workExp" formProps={props.formProps}
          options={[
            { value: 'I am currently working', label: 'I am currently working' },
            { value: 'I have worked before but am not currently working', label: 'I have worked before but am not currently working' },
            { value: 'I have not worked before', label: 'I have not worked before' }
          ]}
          onChange={(e) => this.setState({ workExp: e })}
        />

        {stw === 'I am currently working' &&
          <React.Fragment>
            <Row className="row-small">
              <Col lg={24}>
                <AntInput label="What is the name of your current employer?" name="nameOfEmployer" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={16} md={12} sm={24} xs={24}>
                <AntInput label="What is the address of your current employer?" help="Street Address" name="exp_street_address" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={12} sm={24} xs={24}>
                <AntInput help="City / Town" className="field_no_label" type="text" name="exp_city" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="State" type="select" name="exp_state" formProps={props.formProps}
                  filter noRequired
                  options={Lists('states')}
                />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Post Code" type="text" name="exp_postCode" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Country" type="select" name="exp_country" formProps={props.formProps}
                  value="Australia"
                  filter
                  options={Lists('countries')}
                  noRequired
                />
              </Col>
            </Row>
            <Row className="row-small">
              <Col lg={24}>
                <AntInput label="What is your current role?" name="currentWorkRole" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={24}>
                <AntInput label="What are the main skills you have gained in your current role?" name="currentWorkSkills" formProps={props.formProps} noRequired />
              </Col>
            </Row>
          </React.Fragment>
        }

        {stw === 'I have worked before but am not currently working' &&
          <React.Fragment>
            <Row gutter={20} className="row-small">
              <Col lg={16} md={12} sm={24} xs={24}>
                <AntInput label="What is the address of your last employer?" help="Street Address" name="exp_last_street_address" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={12} sm={24} xs={24}>
                <AntInput help="City / Town" className="field_no_label" type="text" name="exp_last_city" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="State" type="select" name="exp_last_state" formProps={props.formProps}
                  filter noRequired
                  options={Lists('states')}
                />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Post Code" type="text" name="exp_last_postCode" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Country" type="select" name="exp_last_country" formProps={props.formProps}
                  value="Australia"
                  filter
                  options={Lists('countries')}
                  noRequired
                />
              </Col>
            </Row>
            <Row gutter={20}>
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="What was the name of your last employer?" name="nameOfLastEmp" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="What year did you stop working for your last employer?" name="yearOfStopWorking" formProps={props.formProps} type="select"
                  options={Lists('years_current')}
                  noRequired
                />
              </Col>
              <Col lg={24}>
                <AntInput label="What was your previous role?" name="previousRole" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={24}>
                <AntInput label="What are the main skills you gained in your previous role?" name="previousSkills" type="textarea" formProps={props.formProps} noRequired />
              </Col>
            </Row>
          </React.Fragment>
        }

        {stw === 'I have not worked before' &&
          <React.Fragment>
            <AntInput
              name="undertakenVolunteer"
              type="radio"
              label="Have you undertaken any relevant volunteer work?"
              vertical
              radioOptions={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]}
              formProps={props.formProps}
              onChange={(e) => this.setState({ undertakenVolunteer: e })}
              noRequired
            />
            {stu === 'yes' &&
              <React.Fragment>
                <Row className="row-small">
                  <Col lg={24}>
                    <AntInput
                      label="Please let us know what type of volunteering you have undertaken"
                      name="typeOfVolunteering" type="select" formProps={props.formProps}
                      options={[
                        { label: 'Providing informal support to family / friend / neighbour' },
                        { label: 'Work placement through study' },
                        { label: 'Volunteering for a school / organisation / charity / not for profit' },
                        { label: 'Other' }
                      ]}
                      onChange={(e) => this.setState({ typeOfVolunteering: e })}
                      noRequired
                    />
                  </Col>
                </Row>
                {stt === 'Other' &&
                  <Row className="row-small">
                    <Col lg={24}>
                      <AntInput label="If you have selected Other, please let us know a little more about the type of volunteering you have undertaken" name="otherVolunteering" type="textarea" formProps={props.formProps} noRequired />
                    </Col>
                  </Row>
                }
                <Row className="row-small">
                  <Col lg={24}>
                    <AntInput label="What are the main skills you have developed while volunteering?" name="skillsOnVolunteering" type="textarea" formProps={props.formProps} noRequired />
                  </Col>
                </Row>
              </React.Fragment>
            }
          </React.Fragment>
        }



        {stw !== '' &&
          <Row className="row-small">
            <Col lg={24}>
              <AntFileUpload label="If you have a CV, please upload below" formProps={props.formProps} name="uploadCV" value={this.state.uploadCV} noRequired />
            </Col>
          </Row>
        }





      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if (fd && fd.workExp) {

        if (fd.uploadCV && fd.uploadCV.length > 0) {
          this.setState({ uploadCV: fd.uploadCV })
        }//End if condition

        this.props.formProps.setFieldsValue({
          workExp: fd.workExp,
          exp_street_address: fd.exp_street_address,
          exp_city: fd.exp_city,
          exp_state: fd.exp_state,
          exp_postCode: fd.exp_postCode,
          exp_country: fd.exp_country
        });
        this.setState({ workExp: fd.workExp }, () => {

          if (fd.workExp === 'I am currently working') {
            this.props.formProps.setFieldsValue({
              nameOfEmployer: fd.nameOfEmployer,
              currentWorkRole: fd.currentWorkRole,
              currentWorkSkills: fd.currentWorkSkills
            });
          }//End if condition  

          if (fd.workExp === 'I have worked before but am not currently working') {
            this.props.formProps.setFieldsValue({
              nameOfLastEmp: fd.nameOfLastEmp,
              yearOfStopWorking: fd.yearOfStopWorking,
              previousRole: fd.previousRole,
              previousSkills: fd.previousSkills
            });
          }//End if condition

          if (fd.workExp === 'I have not worked before') {
            this.props.formProps.setFieldsValue({ undertakenVolunteer: fd.undertakenVolunteer });
            this.setState({ undertakenVolunteer: fd.undertakenVolunteer }, () => {
              if (fd.undertakenVolunteer === 'yes') {
                this.props.formProps.setFieldsValue({
                  typeOfVolunteering: fd.typeOfVolunteering,
                  skillsOnVolunteering: fd.skillsOnVolunteering
                });
                if (fd.typeOfVolunteering === 'Other') {
                  this.setState({ typeOfVolunteering: fd.typeOfVolunteering }, () => {
                    this.props.formProps.setFieldsValue({ otherVolunteering: fd.otherVolunteering });
                  });
                }//End if condition
              }//End if condition
            })
          }//End if condition
        });

      }//End if condition
    }, 5);
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step16);