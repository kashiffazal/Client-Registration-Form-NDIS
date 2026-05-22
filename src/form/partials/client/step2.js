import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';

class Step2 extends Component {
  render() {
    const props = this.props;
    const s1_bf = this.props.stateValue;
    return (
      <React.Fragment>
        {(
          s1_bf === 'Support Worker' ||
          s1_bf === 'Support Coordinator' ||
          s1_bf === 'Plan Manager' ||
          s1_bf === 'Service / Healthcare Provider' ||
          s1_bf === 'Authentic Life Care Team Member' ||
          s1_bf === 'Family or Friends'
        ) &&
          <AntInput name="theirName" label="Please provide their name" formProps={props.formProps} />
        }
        {(
          s1_bf === 'Authentic Life Care Flyer / Pamphlet' ||
          s1_bf === 'Event or Expo'
        ) &&
          <AntInput name="nameOfTheVenue" label="Please provide the name of the venue or place" formProps={props.formProps} />
        }
        {(
          s1_bf === 'Authentic Life Care Website' ||
          s1_bf === 'Internet Search e.g. Google' ||
          s1_bf === 'TV / Radio / Newspaper / Magazine' ||
          s1_bf === 'Social Media (Facebook / Twitter / LinkedIn)'
        ) &&
          <AntInput name="nameOfTheMedia" label="Please provide the name of the media or social media" formProps={props.formProps} />
        }
        {s1_bf === 'Other' &&
          <AntInput name="howYouHeardFirst" label="Please tell us how you heard about us" formProps={props.formProps} />
        }
      </React.Fragment>
    );//End return
  }//End render
}//End class

export default Step2;