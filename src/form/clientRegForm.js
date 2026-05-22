import React, { Component } from "react";
import { Row, Col, Form, Button, Modal } from "antd";
import FormSteps from "./partials/client/steps";
import { AntFieldsName, AntDynamicFieldsSet, AntDynamicFieldsGet, AntDynamicFieldsOpen } from "../externalComponents/antd-fields";
import SimpleCrypto from "simple-crypto-js";
import ScreenLoader from '../externalComponents/screen-loader';
import Services from '../services';
import moment from 'moment';
import { connect } from "react-redux";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToState from "../store/action";
import Step1 from "./partials/client/step1";
import Step2 from "./partials/client/step2";
import Step3 from "./partials/client/step3";
import Step4 from "./partials/client/step4";
import Step5 from "./partials/client/step5";
import Step6 from "./partials/client/step6";
import Step7 from "./partials/client/step7";
import Step8 from "./partials/client/step8";
import Step9 from "./partials/client/step9";
import Step10 from "./partials/client/step10";
import Step11 from "./partials/client/step11";
import Step12 from "./partials/client/step12";
import Step13 from "./partials/client/step13";
import Step14 from "./partials/client/step14";
import Step15 from "./partials/client/step15";
import Step16 from "./partials/client/step16";
import Step17 from "./partials/client/step17";
import Step18 from "./partials/client/step18";
import Step19 from "./partials/client/step19";
import Step20 from "./partials/client/step20";
import Step21 from './partials/client/step21';
import Step22 from './partials/client/step22';
import Step23 from './partials/client/step23';
import Step24 from './partials/client/step24';
import Step25 from './partials/client/step25';
import Step26 from './partials/client/step26';
import Step27 from './partials/client/step27';
import Step28 from './partials/client/step28';
import Step29 from './partials/client/step29';
import Step30 from './partials/client/step30';
import Step31 from './partials/client/step31';
import Step32 from './partials/client/step32';
import Step33 from './partials/client/step33';
import Step34 from './partials/client/step34';
import ThankYou from './partials/client/thankyou';

const simpleCrypto = new SimpleCrypto("user_id");

class ClientRegForm extends Component {
  state = {
    stepNumber: 1,
    lastStep: 35,
    contactEmail: '',
    step_1_beforeWeFind: "",
    step_19_supportWorkers: 0,
    skipSteps: [],
    step_20_row_open: null,
    step_32_row_open: null,
    update_id: '',
    save_loader: false,
    final_loader: false,
    get_loader: false,
    modalVisible: false,
    resume_link: '',
  };

  //This function call on next but for submit on server
  handleSubmit = e => {
    e.preventDefault();
    //console.log(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values = AntDynamicFieldsSet(values, 'supportWorkerDynamic');
        values = AntDynamicFieldsSet(values, 'dayTimeDynamic');
        //console.log(values);
        //Call next step
        setTimeout(() => {
          this.state.stepNumber === (this.state.lastStep - 1) ? this.submitOnServer('completed') : this.nextStep();
        }, 10);
        this.props.changeStateToReducer("form_data", {
          ...this.props.store_values.form_data,
          ...values
        });
      }
    });
  };

  submitOnServer = (keyword = false) => {
    //console.log(keyword)
    let data = this.props.store_values.form_data;
    if (this.state.update_id) { data.id = this.state.update_id; }
    data.keyword = keyword;
    if (keyword === 'save') {
      this.setState({ save_loader: true });
    } else {
      this.setState({ final_loader: true });
    }//End if condition
    Services.http("POST", 'client/post/post.php', data).then(res => {
      this.setState({ save_loader: false, final_loader: false })
      //console.log(res);
      if (!res) { return false; }
      this.setState({
        contactEmail: res.email,
        update_id: res.id,
      });
      if (keyword === 'save') {
        this.setState({ modalVisible: true, resume_link: res.save_link_path + this.encrypt_filter(res.id) })
      } else {
        this.nextStep();
      }//End if condition

    });
  }//End function

  //If encrypt string found restricted letter like / or space the encrypt again
  encrypt_filter = (id) => {
    let enc = simpleCrypto.encrypt(id)
    enc = enc.toString();
    //console.log(enc);
    if (
      enc.includes(" ") ||
      enc.includes("/") ||
      enc.includes("+")
    ) {
      this.encrypt_filter(id);
    }//End if condition
    //console.log(enc);
    return enc;
  }//End function


  getFormData = (id) => {
    this.setState({ get_loader: true });
    Services.http("GET", 'client/get/get.php?id=' + id).then(res => {
      this.setState({ get_loader: false })
      //console.log(res)
      if (!res) { return false; }
      res = res.data[0];
      if (!res) { return false; }
      //Set date in moment object
      if (res.clientDateOfBirth) { res.clientDateOfBirth = moment(res.clientDateOfBirth); }//End if condition


      this.props.changeStateToReducer("form_data", res);
      setTimeout(() => { this.setFormFieldsValueNextPrevious(); }, 10)
      //console.log(res);
      this.setState({
        step_1_beforeWeFind: res.beforeWeFind,
        step_19_supportWorkers: res.supportWorkers
      })

    });
  }//End function

  getStepNum = (stepNumber, type = 'next') => {

    let skip_step_arr = this.props.store_values.skip_step_arr;
    let form_data = this.props.store_values.form_data;
    let step_number = 0;
    if (type === 'next') {

      if (typeof skip_step_arr[stepNumber] === 'object') {
        //Get object name
        var objName = Object.keys(skip_step_arr[stepNumber])[0];
        //console.log(form_data[objName] = 'Client Representative');
        var selectObj = skip_step_arr[stepNumber][objName];
        step_number = selectObj[form_data[objName]];
      } else {
        step_number = skip_step_arr[stepNumber];
      }//End if condition

      //Set array for previous
      let obj = {};
      obj[step_number] = stepNumber;
      //console.log(stepNumber + " - " + step_number);
      this.props.changeStateToReducer("skip_step_pre", {
        ...this.props.store_values.skip_step_pre,
        ...obj
      });

    } else {
      step_number = this.props.store_values.skip_step_pre[stepNumber];
    }//End if condition
    return step_number;
  }//End function


  nextStep = () => {
    this.setState({ stepNumber: this.getStepNum(this.state.stepNumber) }, () => {

      if (this.state.stepNumber === 20) {
        this.setState({ step_20_row_open: AntDynamicFieldsOpen(AntDynamicFieldsGet(this.props.store_values.form_data, 'supportWorkerDynamic')) }, () => {
          this.setFormFieldsValueNextPrevious('supportWorkerDynamic');
        })//Save state just for step 20 other will be ignore
      } else if (this.state.stepNumber === 32) {
        this.setState({ step_32_row_open: AntDynamicFieldsOpen(AntDynamicFieldsGet(this.props.store_values.form_data, 'dayTimeDynamic')) }, () => {
          this.setFormFieldsValueNextPrevious('dayTimeDynamic');
        })//Save state just for step 20 other will be ignore
      } else {
        this.setFormFieldsValueNextPrevious();
      }//End if condition

    });
  }; //End function

  previousStep = () => {
    this.setState({ stepNumber: this.getStepNum(this.state.stepNumber, 'previous') }, () => {

      if (this.state.stepNumber === 20) {
        this.setState({ step_20_row_open: AntDynamicFieldsOpen(AntDynamicFieldsGet(this.props.store_values.form_data, 'supportWorkerDynamic')) }, () => {
          this.setFormFieldsValueNextPrevious('supportWorkerDynamic');
        })//Save state just for step 20 other will be ignore
      } else if (this.state.stepNumber === 32) {
        this.setState({ step_32_row_open: AntDynamicFieldsOpen(AntDynamicFieldsGet(this.props.store_values.form_data, 'dayTimeDynamic')) }, () => {
          this.setFormFieldsValueNextPrevious('dayTimeDynamic');
        })//Save state just for step 20 other will be ignore
      } else {
        this.setFormFieldsValueNextPrevious();
      }//End if condition

    });
  }; //End function

  setFormFieldsValueNextPrevious = (dynamicFieldName = false) => {
    if (dynamicFieldName) {
      this.props.form.setFieldsValue(AntFieldsName(this.props.store_values.form_data, dynamicFieldName));
    } else {
      this.props.form.setFieldsValue(AntFieldsName(this.props.store_values.form_data));
    }//End function
  }//End function

  array_search = (arr, findValue) => {
    var found = arr.find(element => { return element === findValue; });
    return found ? true : false;
  }; //End function

  array_unique = arr => {
    return arr.filter((x, i, a) => a.indexOf(x) === i); //Make array unique
  }; //End function

  headingList = step => {
    let heading = [
      {
        label: "How did you hear about Authentic Life Care",
        steps: [1, 2]
      },
      {
        label: "Client Information",
        steps: [3, 4, 5, 6, 7, 8]
      },
      {
        label: "Client Details",
        steps: [9, 10, 11, 12, 13, 14, 15]
      },
      {
        label: "Support Team",
        steps: [16, 17, 18, 19, 20]
      },
      {
        label: "Diversity & Inclusion",
        steps: [21, 22, 23, 24, 25, 26, 27]
      },
      {
        label: "Next Steps",
        steps: [28, 29, 30, 31, 32, 33, 34, 35]
      }
    ];
    for (var i = 0; i <= heading.length; i++) {
      // console.log([i], step, heading[i]);
      if (heading[i].steps.find(el => step === el)) {
        return heading[i].label;
      } //End if condition
    } //End for loop
  }; //End function

  render() {

    const fp = this.props.form;
    const stp = this.state.stepNumber;
    const st = this.state;
    const btnStyles = { width: "100px" };
    const countLabel = { color: "#b9b9b9", marginTop: "13px", marginBottom: "-5px", textAlign: "right", fontSize: "12px" };
    return (
      <div className="container">
        <ScreenLoader active={st.get_loader}>Loading, Please wait...</ScreenLoader>
        <Form onSubmit={this.handleSubmit}>
          {stp !== st.lastStep &&
            <React.Fragment>
              <FormSteps steps={stp} />
              <h2 className="form_heading">{this.headingList(stp)}</h2>
              <hr className="form_hr" />
              <br />
            </React.Fragment>
          }
          {stp === 1 && (
            <Step1
              formProps={fp}
              selectedValue={e => this.setState({ step_1_beforeWeFind: e })}
            />
          )}
          <React.Fragment>
            {stp === 2 && <Step2 formProps={fp} stateValue={st.step_1_beforeWeFind} />}
            {stp === 3 && <Step3 formProps={fp} />}
            {stp === 4 && <Step4 formProps={fp} />}
            {stp === 5 && <Step5 formProps={fp} />}
            {stp === 6 && <Step6 formProps={fp} />}
            {stp === 7 && <Step7 formProps={fp} />}
            {stp === 8 && <Step8 formProps={fp} />}
            {stp === 9 && <Step9 formProps={fp} />}
            {stp === 10 && <Step10 formProps={fp} />}
            {stp === 11 && <Step11 formProps={fp} />}
            {stp === 12 && <Step12 formProps={fp} />}
            {stp === 13 && <Step13 formProps={fp} />}
            {stp === 14 && <Step14 formProps={fp} />}
            {stp === 15 && <Step15 formProps={fp} />}
            {stp === 16 && <Step16 formProps={fp} />}
            {stp === 17 && <Step17 formProps={fp} />}
            {stp === 18 && <Step18 formProps={fp} />}
            {stp === 19 && <Step19 formProps={fp} selectedValue={e => this.setState({ step_19_supportWorkers: e })} />}
            {stp === 20 && <Step20 formProps={fp} rowOpen={this.state.step_20_row_open} stateValue={st.step_19_supportWorkers} />}
            {stp === 21 && <Step21 formProps={fp} />}
            {stp === 22 && <Step22 formProps={fp} />}
            {stp === 23 && <Step23 formProps={fp} />}
            {stp === 24 && <Step24 formProps={fp} />}
            {stp === 25 && <Step25 formProps={fp} />}
            {stp === 26 && <Step26 formProps={fp} />}
            {stp === 27 && <Step27 formProps={fp} />}
            {stp === 28 && <Step28 formProps={fp} />}
            {stp === 29 && <Step29 formProps={fp} />}
            {stp === 30 && <Step30 formProps={fp} />}
            {stp === 31 && <Step31 formProps={fp} />}
            {stp === 32 && <Step32 formProps={fp} rowOpen={this.state.step_32_row_open} />}
            {stp === 33 && <Step33 formProps={fp} />}
            {stp === 34 && <Step34 formProps={fp} />}
            {stp === 35 && <ThankYou email={st.contactEmail} />}
          </React.Fragment>
          {stp !== st.lastStep &&
            <React.Fragment>
              <br />
              <Row>
                <Col lg={12} md={12} sm={12} xs={24}>
                  {st.stepNumber > 1 && (
                    <React.Fragment><Button type="primary" size="large" style={btnStyles} onClick={() => this.previousStep()} > Back </Button> <br /><br /></React.Fragment>
                  )}
                </Col>
                <Col lg={12} md={12} sm={12} xs={24} style={{ textAlign: "right" }}>
                  {st.stepNumber > 1 &&
                    <React.Fragment>
                      <Button onClick={() => this.submitOnServer('save')} loading={st.save_loader} size="large" style={btnStyles}> Save </Button>
                      &nbsp; | &nbsp;
                  </React.Fragment>
                  }
                  <Button type="primary" size="large" style={btnStyles} htmlType="submit" loading={st.final_loader}>
                    {st.stepNumber === (st.lastStep - 1) ? 'Submit' : 'Next'}
                  </Button>
                </Col>
              </Row>
              <div style={countLabel}>{stp}/{st.lastStep - 1}</div>
            </React.Fragment>
          }
        </Form>
        <Modal title="Save this link to resume later." onCancel={() => this.setState({ modalVisible: false })} visible={this.state.modalVisible} footer={null} >
          <div className="modalBody">{st.resume_link}</div>
        </Modal>
      </div>
    ); //end Return
  } //end render
  componentDidMount() {
    //this.encrypt_filter(2);
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      console.log(searchParams.get('save'))
      //console.log(simpleCrypto.decrypt(searchParams.get('save')));
      if (searchParams.get('save')) {
        this.setState({ update_id: simpleCrypto.decrypt(searchParams.get('save')) }, () => {
          //console.log(this.state.update_id);
          this.getFormData(this.state.update_id);
        })
      }//End if condition
    }//End if condition
  }//End componentDidMount
} //End class
export default connect(
  mapStateToProps,
  mapDispatchToState
)(Form.create()(ClientRegForm));
