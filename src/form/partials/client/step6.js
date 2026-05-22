import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step6 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput name="clientNDISnumber" label="Client NDIS number (if applicable)" formProps={props.formProps} />
    );//End return
  }//End render
}//End class

export default Step6;