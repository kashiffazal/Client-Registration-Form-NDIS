import React, { Component } from 'react';
import { AntInput, AntFileUpload } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step9 extends Component {
  state = {
    australianCitizen: '',
    haveVisa: '',
    uploadCopyOfPassport : [],
  }
  render() {
    const props = this.props;
    const sta = this.state.australianCitizen;
    const stv = this.state.haveVisa;
    return (
      <React.Fragment>
        <h2 className="form_heading">Right to Work in Australia</h2>
        <hr className="form_hr" />
        <AntInput
          name="australianCitizen"
          type="radio"
          label="Are you an Australian Citizen or Permanent Resident?"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ australianCitizen: e })}
        />

        {sta === 'no' &&
          <AntInput
            name="haveVisa"
            type="radio"
            label="Do you have a visa that provides you with the Right to Work in Australia?"
            vertical
            radioOptions={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
            ]}
            formProps={props.formProps}
            onChange={(e) => this.setState({ haveVisa: e })}
            noRequired
          />
        }

        {stv === 'no' && <AntInput type="textarea" label="Please provide information below" name="dontHaveVisaDesc" formProps={props.formProps} noRequired/>}
        {stv === 'yes' &&
          <React.Fragment>
            <Row gutter={20} className="row-small">
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="Class and subclass of your current visa?" name="visaClassSubClass" formProps={props.formProps} noRequired/>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="Visa grant number" name="visaGrantNumber" formProps={props.formProps} noRequired/>
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="Visa expiry date" type="datepicker" help="dd-mm-yyy" format="DD-MM-YYYY" name="visaExpDate" formProps={props.formProps} noRequired/>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="Passport number" name="passportNumber" formProps={props.formProps} noRequired/>
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={24}>
                <AntInput label="Passport country of issue" name="countryOfIssue" formProps={props.formProps} noRequired/>
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={24}>
                <AntInput label="Are there any restrictions on your visa, or any other information about your visa that you think we should know?" type="textarea" name="restrictionsOnVisa" formProps={props.formProps} noRequired/>
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="Passport date of issue" type="datepicker" help="dd-mm-yyy" format="DD-MM-YYYY" name="passportIssueDate" formProps={props.formProps} noRequired/>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <AntInput label="Passport date of expiry" type="datepicker" help="dd-mm-yyy" format="DD-MM-YYYY" name="passportExpDate" formProps={props.formProps} noRequired/>
              </Col>
            </Row>

            {/*Uploader*/}
            <AntFileUpload label="Certified Copy of Your Passport" formProps={props.formProps} name="uploadCopyOfPassport" value={this.state.uploadCopyOfPassport} noRequired/>

            <b>Right to Work in Australia</b>
            <p className="msg_box">If you are <strong>not an Australian Citizen or Permanent Resident and you do not hold a visa</strong> which gives you the <strong>Right to Work in Australia without restriction,</strong> then we suggest you <strong>call us</strong> on <strong>0490 815 555</strong> or <strong>email us</strong> at <strong><a href="mailto:support@authenticlifecare.com.au">support@authenticlifecare.com.au</a> before you continue filling out this form.</strong> </p>
          </React.Fragment>
        }

      </React.Fragment>
    );//End return
  }//End render
  componentDidMount(){
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if(fd && fd.australianCitizen){
        if(fd.australianCitizen === 'no'){
          this.setState({australianCitizen : fd.australianCitizen, haveVisa : fd.haveVisa}, () => {
            if(fd.haveVisa === 'yes'){
              this.props.formProps.setFieldsValue({
                haveVisa : fd.haveVisa,
                visaClassSubClass : fd.visaClassSubClass,
                visaGrantNumber : fd.visaGrantNumber,
                visaExpDate : fd.visaExpDate,
                passportNumber : fd.passportNumber,
                countryOfIssue : fd.countryOfIssue,
                restrictionsOnVisa : fd.restrictionsOnVisa,
                passportIssueDate : fd.passportIssueDate,
                passportExpDate : fd.passportExpDate
              });

              if(fd.uploadCopyOfPassport && fd.uploadCopyOfPassport.length > 0){
                this.setState({uploadCopyOfPassport : fd.uploadCopyOfPassport})
              }//End if condition


            }else if(fd.haveVisa === 'no'){
              this.props.formProps.setFieldsValue({haveVisa : fd.haveVisa,dontHaveVisaDesc : fd.dontHaveVisaDesc});
            }//End if condition
          });
        }//End if condition
      }//End if condition
    },5);  
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step9);