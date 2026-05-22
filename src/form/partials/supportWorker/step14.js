import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { Lists } from '../../lists';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step14 extends Component {
  state = {
    isEnglishMain : '',
    mainLanguage : ''
  }
  render() {
    const props = this.props;
    const ste = this.state.isEnglishMain;
    const stm = this.state.mainLanguage;
    return (
      <React.Fragment>
        <h2 className="form_heading">Diversity & Inclusion</h2>
        <hr className="form_hr" />
        <AntInput
          name="isEnglishMain"
          type="radio"
          label="Is English the main language you speak at home?"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'Prefer not to say', label: 'Prefer not to say' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({isEnglishMain : e})}
        />
        {ste === 'no' &&
          <React.Fragment>
            <AntInput label="Please let us know the main language you speak at home" type="select" name="mainLanguage" formProps={props.formProps}
              filter
              options={Lists('languages')}
              onChange={(e) => this.setState({mainLanguage : e})}
              noRequired
            />
            {stm === 'Other' && 
              <AntInput label="If you have selected Other, please let us know the main language spoken at home" name="otherMainLanguage" formProps={props.formProps} noRequired/>
            }
          </React.Fragment>
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if (fd && fd.isEnglishMain === 'no') {
        this.setState({ isEnglishMain: fd.isEnglishMain }, () => {
          this.props.formProps.setFieldsValue({mainLanguage: fd.mainLanguage});
          if(fd.mainLanguage === 'Other'){
            this.setState({ mainLanguage: fd.mainLanguage }, () => {
              this.props.formProps.setFieldsValue({otherMainLanguage: fd.otherMainLanguage});
            });
          }//End if condition
        });
      }//End if condition
    }, 5);
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step14);