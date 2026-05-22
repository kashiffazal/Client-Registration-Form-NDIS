import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step2 extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <h2 className="form_heading">Before You Begin</h2>
        <hr className="form_hr" />
        <AntInput label="Please let us know how you first heard about Authentic Life Care?" type="select" name="firstHeardAboutYouFirst" formProps={props.formProps}
          filter
          options={[
            { value: "Authentic Life Care Client", label: "Authentic Life Care Client" },
            { value: "Another Client", label: "Another Client" },
            { value: "Authentic Life Care Support Worker", label: "Authentic Life Care Support Worker" },
            { value: "Another Support Worker", label: "Another Support Worker" },
            { value: "Support Coordinator", label: "Support Coordinator" },
            { value: "Plan Manager", label: "Plan Manager" },
            { value: "Service / Healthcare Provider", label: "Service / Healthcare Provider" },
            { value: "Event or Expo", label: "Event or Expo" },
            { value: "Authentic Life Care Flyer / Pamphlet", label: "Authentic Life Care Flyer / Pamphlet" },
            { value: "Authentic Life Care Team Member", label: "Authentic Life Care Team Member" },
            { value: "Authentic Life Care Website", label: "Authentic Life Care Website" },
            { value: "Internet Search e.g., Google", label: "Internet Search e.g., Google" },
            { value: "TV / Radio / Newspaper / Magazine", label: "TV / Radio / Newspaper / Magazine" },
            { value: "Social Media (Facebook / Twitter / LinkedIn)", label: "Social Media (Facebook / Twitter / LinkedIn)" },
            { value: "Family / Friends", label: "Family / Friends" },
            { value: "Other", label: "Other" }
          ]}
        />
        <AntInput label="Please provide the name of the person, venue or publication/media" type="text" name="personPublicationMediaName" formProps={props.formProps} />
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step2;