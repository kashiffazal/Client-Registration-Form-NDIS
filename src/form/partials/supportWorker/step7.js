import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { Row, Col } from 'antd';
import { Lists } from '../../lists';

class Step7 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">About You</h2>
        <hr className="form_hr" />
        <Row gutter={20} className="row-small">
          <Col lg={16} md={26} sm={24} xs={24}>
            <AntInput label="Your Address" help="Street Address" name="your_addr" formProps={props.formProps} />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="City" name="your_city" className="field_no_label" formProps={props.formProps} />
          </Col>
        </Row>
        <Row gutter={20} className="row-small">
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="State" type="select" name="your_state" formProps={props.formProps}
              filter
              options={Lists('states')}
            />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Post Code" name="your_post_code" formProps={props.formProps} />
          </Col>
          <Col lg={8} md={8} sm={24} xs={24}>
            <AntInput help="Country" name="your_country" type="select" options={Lists('countries')} formProps={props.formProps} />
          </Col>
        </Row>
        <Row gutter={20} className="row-small">
          <Col lg={12} md={12} sm={24} xs={24}>
            <AntInput
              label="Your Email"
              help="By providing Authentic Life Care with your email address, you authorise Authentic Life Care to use this email address to send you electronic communication from time to time including timesheets, payslip notifications, newsletters, marketing and invitations"
              name="your_email"
              formProps={props.formProps}
            />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <AntInput
              label="Your Phone"
              help="By providing Authentic Life Care with your mobile number you authorise Authentic Life Care to use this mobile to send you elecronic communication and SMS Texts from time to time including alerts, marketing and invitations"
              name="your_phone"
              formProps={props.formProps}
            />
          </Col>
        </Row>
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step7;