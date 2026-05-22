import React, { Component } from "react";
import { AntDynamicField } from "../../../externalComponents/antd-fields";
class Step20 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dynamicFieldsObject: {
        initial: {
          rows: 1,
          className: "dynamic_class",
          //style: { border: "5px solid red" }
        },
        col_set: {
          gutter: 20,
          0: { lg: 6, md: 12, sm: 12, xs: 24 },
          1: { lg: 6, md: 12, sm: 12, xs: 24 },
          2: { lg: 6, md: 12, sm: 12, xs: 24 },
          3: { lg: 6, md: 12, sm: 12, xs: 24 }
        },
        fields: [
          { text: "Support Worker # %i%" },
          {
            field: "text",
            name: "supportWorkerFirstName",
            label: "First Name"
          },
          {
            field: "text",
            name: "supportWorkerLastName",
            label: "Last Name",
          },
          {
            field: "email",
            name: "supportWorkerEmail",
            label: "Email Address"
          }
        ],
      }
    }//End state
  }//End constructor



  render() {
    const fp = this.props.formProps;
    return (
      <AntDynamicField
        name="supportWorkerDynamic"
        formProps={fp}
        fieldRender={this.state.dynamicFieldsObject}
      />
    ); //End return
  } //End render
  componentWillReceiveProps(nextProps) {
    if ((this.props.rowOpen !== nextProps.rowOpen) && nextProps.rowOpen !== false) {
      let dynamicFieldsObject = this.state.dynamicFieldsObject;
      dynamicFieldsObject.initial.rows = nextProps.rowOpen.rows;
      if (dynamicFieldsObject.nested_config) {
        dynamicFieldsObject.nested_config.initial.rows = nextProps.rowOpen.nested_rows;
      }//End if condition

      this.setState({ dynamicFieldsObject: dynamicFieldsObject })
      //Append Rows after set value according to selected number of row in step 19
      if (this.props.stateValue) {
        dynamicFieldsObject.initial.rows = this.props.stateValue;
        this.setState({ dynamicFieldsObject: dynamicFieldsObject });
      }//End if condition
    }//End if condition
  }//componentWillReceiveProps

  componentDidMount() {
    if (this.props.stateValue) {
      let dynamicFieldsObject = this.state.dynamicFieldsObject;
      dynamicFieldsObject.initial.rows = this.props.stateValue;
      this.setState({ dynamicFieldsObject: dynamicFieldsObject });
    }//End if condition
  }


} //End class

export default Step20;
