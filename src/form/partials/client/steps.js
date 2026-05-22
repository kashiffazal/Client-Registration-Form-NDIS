import React, { Component } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

class FormSteps extends Component {
  render() {
    const pt = this.props.steps;
    return (
      <Steps className="small_dot_steps" size="small" progressDot current={pt - 1}>
        <Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step />
        <Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step />
        <Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step /><Step />
        <Step /><Step /><Step /><Step />
      </Steps>
    );
  }
}

export default FormSteps;