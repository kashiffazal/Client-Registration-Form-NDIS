import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step26 extends Component {
  state = {
    conditionalValue: 'Other',
    value: ''
  }
  render() {
    const props = this.props;
    const st = this.state;
    return (
      <React.Fragment>
        <p className="help">If you do not wish to answer this question please select prefer not to say</p>
        <AntInput
          label="Please let us know the main language you speak at home"
          type="select"
          options={[
            { value: "Aboriginal", label: "Aboriginal" },
            { value: "Arabic", label: "Arabic" },
            { value: "Bengali", label: "Bengali" },
            { value: "Burmese", label: "Burmese" },
            { value: "Cantonese", label: "Cantonese" },
            { value: "French", label: "French" },
            { value: "Greek", label: "Greek" },
            { value: "Hindi", label: "Hindi" },
            { value: "Indonesian", label: "Indonesian" },
            { value: "Italian", label: "Italian" },
            { value: "Lao", label: "Lao" },
            { value: "Lebanese Arabic", label: "Lebanese Arabic" },
            { value: "Macedonian", label: "Macedonian" },
            { value: "Malay", label: "Malay" },
            { value: "Mandarin", label: "Mandarin" },
            { value: "Oromo", label: "Oromo" },
            { value: "Punjabi", label: "Punjabi" },
            { value: "Sinhalese", label: "Sinhalese" },
            { value: "Spanish", label: "Spanish" },
            { value: "Swahili", label: "Swahili" },
            { value: "Tagalog", label: "Tagalog" },
            { value: "Tamil", label: "Tamil" },
            { value: "Thai", label: "Thai" },
            { value: "Vietnamese", label: "Vietnamese" },
            { value: "Other", label: "Other" }
          ]}
          name="mainLanguage"
          formProps={props.formProps}
          onChange={(e) => this.setState({ value: e })}
        />
        {st.value === st.conditionalValue &&
          <AntInput
            name="otherMainLanguage"
            type="text"
            formProps={props.formProps}
            label="If you selected other, please let us know the main language you speak at home"
          />
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let conditionalValue = 'Other';
      if (this.props.formProps.getFieldValue('mainLanguage') === conditionalValue) {
        this.setState({ value: conditionalValue }, () => {
          this.props.formProps.setFieldsValue({ otherMainLanguage: this.props.store_values.form_data.otherMainLanguage })
        });
      }//End if condition
    }, 5)
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step26);