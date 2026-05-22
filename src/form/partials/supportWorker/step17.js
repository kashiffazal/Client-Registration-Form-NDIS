import React, { Component } from 'react';
import { AntInput, AntFileUpload } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { Lists } from '../../lists';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step17 extends Component {
  state = {
    relevantQualifications : '',
    anotherQulification : '',
    typeOfQualification : '',
    anotherTypeOfQualification : '',
    uploadCertificates : []
  }
  render() {
    const props = this.props;
    const str = this.state.relevantQualifications;
    const sta = this.state.anotherQulification;
    const stte = this.state.typeOfQualification;
    const state = this.state.anotherTypeOfQualification;
    return (
      <React.Fragment>
        <h2 className="form_heading">Qualifications</h2>
        <hr className="form_hr" />
        <AntInput
          name="relevantQualifications"
          type="radio"
          label="Do you have any relevant qualifications you would like to tell us about?"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ relevantQualifications: e })}
        />
        {str === 'yes' && 
          <React.Fragment>
            <Row gutter={20} className="row-small">
              <Col lg={24}>
                <AntInput label="Type of qualification" type="select" name="typeOfQualification" formProps={props.formProps}
                  options={[
                    {label : 'Secondary School Certificate'},
                    {label : 'Trade or Vocational'},
                    {label : 'Certificate'},
                    {label : 'Diploma'},
                    {label : 'Degree'},
                    {label : 'Post Graduate Certificate'},
                    {label : 'Post Graduate Diploma'},
                    {label : 'Masters'},
                    {label : 'Other'}
                  ]}
                  onChange={(e) => this.setState({typeOfQualification : e})}
                  noRequired
                />
              </Col>
            </Row>
            {stte === 'Other' && 
              <Row gutter={20} className="row-small">
                <Col lg={24}>
                  <AntInput label="If you have selected Other, please tell us what type of qualification your hold" name="otherQulification" formProps={props.formProps} noRequired/>
                </Col>
              </Row>
            }
            <Row gutter={20} className="row-small">
              <Col lg={12} md={24} sm={24} xs={24}>
                <AntInput label="Qualification certificate name" name="qualCertificateName" formProps={props.formProps} noRequired/>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <AntInput label="Qualification completed or expected completion year" type="select" name="qualCompleteYear" formProps={props.formProps} options={Lists('years')} noRequired/>
              </Col>
              <Col lg={24}>
                <AntInput label="Qualification issuing body name e.g., school, university, TAFE name)?" name="qualSchoolUniName" formProps={props.formProps} noRequired/>
              </Col>
            </Row>

            <AntInput
              name="anotherQulification"
              type="radio"
              label="Would you like to add another qualification?"
              vertical
              radioOptions={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
              ]}
              formProps={props.formProps}
              onChange={(e) => this.setState({ anotherQulification: e })}
              noRequired
            />

            {sta === 'yes' && 
              <React.Fragment>
                <Row gutter={20} className="row-small">
                  <Col lg={24}>
                    <AntInput label="Type of qualification" type="select" name="anotherTypeOfQualification" formProps={props.formProps}
                      options={[
                        {label : 'Secondary School Certificate'},
                        {label : 'Trade or Vocational'},
                        {label : 'Certificate'},
                        {label : 'Diploma'},
                        {label : 'Degree'},
                        {label : 'Post Graduate Certificate'},
                        {label : 'Post Graduate Diploma'},
                        {label : 'Masters'},
                        {label : 'Other'}
                      ]}
                      onChange={(e) => this.setState({anotherTypeOfQualification : e})}
                      noRequired
                    />
                  </Col>
                </Row>
                {state === 'Other' && 
                  <Row gutter={20} className="row-small">
                    <Col lg={24}>
                      <AntInput label="If you have selected Other, please tell us what type of qualification your hold" name="anotherOtherQulification" formProps={props.formProps} noRequired/>
                    </Col>
                  </Row>
                }
                <Row gutter={20} className="row-small">
                  <Col lg={12} md={24} sm={24} xs={24}>
                    <AntInput label="Qualification certificate name" name="anotherQualCertificateName" formProps={props.formProps} noRequired/>
                  </Col>
                  <Col lg={12} md={24} sm={24} xs={24}>
                    <AntInput label="Qualification completed or expected completion year" type="select" name="anotherQualCompleteYear" formProps={props.formProps} options={Lists('years_old')} noRequired/>
                  </Col>
                  <Col lg={24}>
                    <AntInput label="Qualification issuing body name e.g., school, university, TAFE name)?" name="anotherQualSchoolUniName" formProps={props.formProps} noRequired/>
                  </Col>
                </Row>

              </React.Fragment>
            }
            {/*Uploader*/}
            <AntFileUpload label="Please upload copies of any qualification certificates below" formProps={props.formProps} name="uploadCertificates" value={this.state.uploadCertificates} noRequired/>
          </React.Fragment>
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      //console.log(fd);
      if(fd && fd.relevantQualifications){
        this.setState({relevantQualifications : fd.relevantQualifications},() => {


          if(fd.uploadCertificates && fd.uploadCertificates.length > 0){
            this.setState({uploadCertificates : fd.uploadCertificates})
          }//End if condition

          this.props.formProps.setFieldsValue({
            typeOfQualification: fd.typeOfQualification,
            qualCertificateName : fd.qualCertificateName,
            qualCompleteYear : fd.qualCompleteYear,
            qualSchoolUniName : fd.qualSchoolUniName,
            anotherQulification : fd.anotherQulification
          });
          if(fd.typeOfQualification === 'Other'){
            this.setState({typeOfQualification : fd.typeOfQualification}, () => {
              this.props.formProps.setFieldsValue({otherQulification : fd.otherQulification});
            })
          }//End if condition

          if(fd.anotherQulification){
            this.setState({anotherQulification : fd.anotherQulification}, () => {
              this.props.formProps.setFieldsValue({
                anotherTypeOfQualification: fd.anotherTypeOfQualification,
                anotherQualCertificateName : fd.anotherQualCertificateName,
                anotherQualCompleteYear : fd.anotherQualCompleteYear,
                anotherQualSchoolUniName : fd.anotherQualSchoolUniName,
              }); 
            })
          }//End if condition
          if(fd.anotherTypeOfQualification === 'Other'){
            this.setState({anotherTypeOfQualification : fd.anotherTypeOfQualification}, () => {
              this.props.formProps.setFieldsValue({anotherOtherQulification : fd.anotherOtherQulification});
            })
          }//End if condition

        })
      }//End if condition
    }, 5);
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step17);