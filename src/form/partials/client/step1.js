import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step1 extends Component {
  render() {
    const props = this.props;
    return (
      <AntInput
        label="Before we find out more about you we would love to know how you heard about Authentic Life Care"
        type="select" options={[
          { value: "Support Worker", label: "Support Worker" },
          { value: "Support Coordinator", label: "Support Coordinator" },
          { value: "Plan Manager", label: "Plan Manager" },
          { value: "Service / Healthcare Provider", label: "Service / Healthcare Provider" },
          { value: "Event or Expo", label: "Event or Expo" },
          { value: "Authentic Life Care Flyer / Pamphlet", label: "Authentic Life Care Flyer / Pamphlet" },
          { value: "Authentic Life Care Team Member", label: "Authentic Life Care Team Member" },
          { value: "Authentic Life Care Website", label: "Authentic Life Care Website" },
          { value: "Internet Search e.g. Google", label: "Internet Search e.g. Google" },
          { value: "TV / Radio / Newspaper / Magazine", label: "TV / Radio / Newspaper / Magazine" },
          { value: "Social Media (Facebook / Twitter / LinkedIn)", label: "Social Media (Facebook / Twitter / LinkedIn)" },
          { value: "Family or Friends", label: "Family or Friends" },
          { value: "Other", label: "Other" }
        ]}
        name="beforeWeFind"
        formProps={props.formProps}
        onChange={(e) => props.selectedValue(e)}
      />
    );//End return
  }//End render
}//End class

export default Step1;