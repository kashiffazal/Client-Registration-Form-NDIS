import React, { Component } from "react";
import { AntDynamicField } from "../../../externalComponents/antd-fields";
class Step32 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dynamicFieldsObject: {
        initial: {
          rows: 1,
          className: "dynamic_class2",
          //style: { border: "5px solid red" }
        },
        action_config: {
          col_set: {
            gutter: 20,
            0: { lg: 22, md: 24, sm: 24, xs: 24 },
            1: { lg: 2, md: 24, sm: 24, xs: 24 }
          },
          btn: true
        },
        col_set: {
          gutter: 20,
          0: { lg: 8, md: 24, sm: 12, xs: 24 },
          1: { lg: 8, md: 12, sm: 12, xs: 24 },
          2: { lg: 8, md: 12, sm: 12, xs: 24 }
        },
        fields: [
          {
            field: "select",
            name: "dayOfTheWeek",
            label: "Day of the week",
            options: [
              { value: "Monday", label: "Monday" },
              { value: "Tuesday", label: "Tuesday" },
              { value: "Wednesday", label: "Wednesday" },
              { value: "Thursday", label: "Thursday" },
              { value: "Friday", label: "Friday" },
              { value: "Saturday", label: "Saturday" },
              { value: "Sunday", label: "Sunday" }
            ]
          },
          {
            field: "select",
            name: "betweenThisTime",
            label: "Between This Time",
            options: [
              { value: "7am", label: "7am" },
              { value: "8am", label: "8am" },
              { value: "9am", label: "9am" },
              { value: "10am", label: "10am" },
              { value: "11am", label: "11am" },
              { value: "12am", label: "12am" },
              { value: "1pm", label: "1pm" },
              { value: "2pm", label: "2pm" },
              { value: "3pm", label: "3pm" },
              { value: "4pm", label: "4pm" },
              { value: "5pm", label: "5pm" },
              { value: "6pm", label: "6pm" },
              { value: "7pm", label: "7pm" },
              { value: "8pm", label: "8pm" },
            ]
          },
          {
            field: "select",
            name: "andThisTime",
            label: "And This Time",
            options: [
              { value: "7am", label: "7am" },
              { value: "8am", label: "8am" },
              { value: "9am", label: "9am" },
              { value: "10am", label: "10am" },
              { value: "11am", label: "11am" },
              { value: "12am", label: "12am" },
              { value: "1pm", label: "1pm" },
              { value: "2pm", label: "2pm" },
              { value: "3pm", label: "3pm" },
              { value: "4pm", label: "4pm" },
              { value: "5pm", label: "5pm" },
              { value: "6pm", label: "6pm" },
              { value: "7pm", label: "7pm" },
              { value: "8pm", label: "8pm" },
            ]
          }
        ],
      }
    }//End state
  }//End constructor



  render() {
    const fp = this.props.formProps;
    return (
      <React.Fragment>
        <AntDynamicField
          name="dayTimeDynamic"
          label="What days and times are best to call?"
          formProps={fp}
          fieldRender={this.state.dynamicFieldsObject}
        />
        <p className="help">GREEN PLUS SIGN TO ADD MORE DAYS AND TIMES AND THE RED MINUS SIGN TO REMOVE DAYS AND TIMES</p>
      </React.Fragment>
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
    }//End if condition
  }//componentWillReceiveProps




} //End class

export default Step32;
