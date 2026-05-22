import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step29 extends Component {
  render() {
    const props = this.props;
    return (
      <Row gutter={30}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <AntInput name="clientRepresentativeFirstName" label="Your name" help="First" formProps={props.formProps} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <AntInput name="clientRepresentativeLastName" className="field_no_label" help="Last" formProps={props.formProps} />
        </Col>
      </Row>
    );//End return
  }//End render
}//End class

export default Step29;