import React, { Component } from 'react';
import { AntInput } from '../../../externalComponents/antd-fields';
import { Lists } from '../../lists';
import { connect } from "react-redux";
import mapStateToProps from "../../../store/mapStateToProps";

class Step13 extends Component {
  state = {
    wherYouBorn: '',
    bornCountry: ''
  }
  render() {
    const props = this.props;
    const stb = this.state.wherYouBorn;
    const stbc = this.state.bornCountry;
    return (
      <React.Fragment>
        <h2 className="form_heading">Diversity & Inclusion</h2>
        <hr className="form_hr" />
        <AntInput
          name="wherYouBorn"
          type="radio"
          label="Were you born in Australia?"
          vertical
          radioOptions={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
            { value: 'Prefer not to say', label: 'Prefer not to say' }
          ]}
          formProps={props.formProps}
          onChange={(e) => this.setState({ wherYouBorn: e })}
        />
        {stb === 'no' &&
          <React.Fragment>
            <AntInput label="Please select your country of birth" type="select" name="bornCountry" formProps={props.formProps}
              filter
              options={Lists('countries')}
              onChange={(e) => this.setState({ bornCountry: e })}
              noRequired
            />
            {stbc === 'Other' &&
              <AntInput label="If you have selected Other, please let us know your country of birth" name="otherBornCountry" formProps={props.formProps} noRequired/>
            }
          </React.Fragment>
        }
      </React.Fragment>
    );//End return
  }//End render
  componentDidMount() {
    setTimeout(() => {
      let fd = this.props.store_values.support_worker_data;
      if (fd && fd.wherYouBorn === 'no') {
        this.setState({ wherYouBorn: fd.wherYouBorn }, () => {
          this.props.formProps.setFieldsValue({bornCountry: fd.bornCountry});
          if(fd.bornCountry === 'Other'){
            this.setState({ bornCountry: fd.bornCountry }, () => {
              this.props.formProps.setFieldsValue({otherBornCountry: fd.otherBornCountry});
            });
          }//End if condition
        });
      }//End if condition
    }, 5);
  }//End componentDidMount
}//End class

export default connect(mapStateToProps)(Step13);