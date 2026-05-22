import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { Lists } from '../../lists';

class Step1 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">Contact Information</h2>
        <hr className="form_hr" />
        <h2 className="form_heading">About You</h2>
        <Row gutter={20} className="row-small">
          <Col lg={12} md={12} sm={24} xs={24}>
            <AntInput label="First Name" type="text" name="first_name" formProps={props.formProps} />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <AntInput label="Last Name" type="text" name="last_name" formProps={props.formProps} />
          </Col>
        </Row>
        <Row gutter={20} className="row-small">
          <Col lg={16} md={12} sm={24} xs={24}>
            <AntInput label="Address" help="Street Address" type="text" name="street_address" formProps={props.formProps} />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <AntInput help="City / Town" className="field_no_label" type="text" name="city" formProps={props.formProps} />
          </Col>
        </Row>
        <Row gutter={20} className="row-small">
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="State" type="select" name="state" formProps={props.formProps}
              filter
              options={Lists('states')}
            />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Post Code" type="text" name="postCode" formProps={props.formProps} />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Country" type="select" name="country" formProps={props.formProps}
              value="Australia"
              filter
              options={Lists('countries')}
            />
          </Col>
        </Row>
        <Row gutter={20} className="row-small">
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Phone" type="text" name="phone" formProps={props.formProps} />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Email" type="text" name="email" formProps={props.formProps} />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Date of Birth (dd-mm-yyyy)" format="DD-MM-YYYY" type="datepicker" name="dateOfBirth" formProps={props.formProps} />
          </Col>
        </Row>
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step1;