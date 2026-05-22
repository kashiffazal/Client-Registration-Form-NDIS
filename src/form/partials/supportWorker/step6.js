import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { Lists } from '../../lists';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step6 extends Component {
  state = {
    secondaryEmploymentDeclaration: ''
  }
  render() {
    const props = this.props;
    const stse = this.state.secondaryEmploymentDeclaration;
    return (
      <React.Fragment>
        <h2 className="form_heading">Support Worker Role</h2>
        <hr className="form_hr" />
        <p>Authentic Life Care does not require you work only for us. However, later on in the registration process you will be asked to sign a <strong>DWES Consent & Acknowledgement form.</strong> One of the conditions on this form is that you tell us the <strong>name and address</strong> of any other disability service providers that you work for, or you intend to work for.</p>
        <b>Please select the appropriate statement from the list below.</b>
        <AntInput
          containerStyle={{ marginBottom: '5px' }}
          name="secondaryEmploymentDeclaration"
          type="radio"
          label="Secondary employment declaration"
          vertical
          radioOptions={[
            { label: 'Yes I currently work for one or more other disability services providers' },
            { label: 'Yes I intend to work for one or more other disability service providers' },
            { label: 'No I do not currently work for, nor do I intend to work for, any other disability service providers' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ secondaryEmploymentDeclaration: e })}
          noRequired
        />
        <p className="help">If you know the name and address of the organisation, or organisations you will be working for, please provide the information below or, once known, email the name and address of the organisation or organisations to <strong><a href='mailto:support@authenticlifecare.com.au"'>support@authenticlifecare.com.au</a></strong></p>

        {
          (stse === 'Yes I currently work for one or more other disability services providers' ||
            stse === 'Yes I intend to work for one or more other disability service providers') &&
          <React.Fragment>
            {/* First Organization */}
            <Row className="row-small">
              <Col>
                <AntInput label="First Organisation Name" name="first_org_name" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={16} md={26} sm={24} xs={24}>
                <AntInput label="First Organisation Address" help="Street Address" name="first_org_addr" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="City" name="first_org_city" className="field_no_label" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="State" type="select" name="first_org_state" formProps={props.formProps}
                  filter noRequired
                  options={Lists('states')}
                />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Post Code" name="first_org_post_code" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Country" name="first_org_country" type="select" filter options={Lists('countries')} formProps={props.formProps} noRequired />
              </Col>
            </Row>
            {/* Second Organization */}
            <hr className="form_hr" />
            <Row className="row-small">
              <Col>
                <AntInput label="Second Organisation Name" name="second_org_name" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={16} md={26} sm={24} xs={24}>
                <AntInput label="Second Organisation Address" help="Street Address" name="second_org_addr" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="City" name="second_org_city" className="field_no_label" formProps={props.formProps} noRequired />
              </Col>
            </Row>
            <Row gutter={20} className="row-small">
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="State" name="second_org_state" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Post Code" name="second_org_post_code" formProps={props.formProps} noRequired />
              </Col>
              <Col lg={8} md={8} sm={24} xs={24}>
                <AntInput help="Country" name="second_org_country" type="select" filter options={Lists('countries')} formProps={props.formProps} noRequired />
              </Col>
            </Row>
          </React.Fragment>
        }

      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if (
        fd &&
        (
          fd.secondaryEmploymentDeclaration === 'Yes I currently work for one or more other disability services providers' ||
          fd.secondaryEmploymentDeclaration === 'Yes I intend to work for one or more other disability service providers'
        )
      ) {
        this.setState({ secondaryEmploymentDeclaration: fd.secondaryEmploymentDeclaration }, () => {
          this.props.formProps.setFieldsValue({
            first_org_name: fd.first_org_name,
            first_org_addr: fd.first_org_addr,
            first_org_city: fd.first_org_city,
            first_org_state: fd.first_org_state,
            first_org_post_code: fd.first_org_post_code,
            first_org_country: fd.first_org_country,
            second_org_name: fd.second_org_name,
            second_org_addr: fd.second_org_addr,
            second_org_city: fd.second_org_city,
            second_org_state: fd.second_org_state,
            second_org_post_code: fd.second_org_post_code,
            second_org_country: fd.second_org_country
          });
        });
      }//End if condition
    }, 5);
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step6);