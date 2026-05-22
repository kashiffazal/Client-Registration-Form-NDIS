import React, { Component } from "react";
import { Row, Col, Form, Button, Modal } from "antd";
import FormSteps from "./partials/supportWorker/steps";
import { AntFieldsName } from "../externalComponents/antd-fields";
import SimpleCrypto from "simple-crypto-js";
import ScreenLoader from '../externalComponents/screen-loader';
import Services from '../services';
//import moment from 'moment';
import { connect } from "react-redux";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToState from "../store/action";
import Step1 from "./partials/supportWorker/step1";
import Step2 from "./partials/supportWorker/step2";
import Step3 from "./partials/supportWorker/step3";
//import Step4 from "./partials/supportWorker/step4";
import Step5 from "./partials/supportWorker/step5";
import Step6 from "./partials/supportWorker/step6";
import Step7 from "./partials/supportWorker/step7";
import Step8 from "./partials/supportWorker/step8";
import Step9 from "./partials/supportWorker/step9";
import Step10 from "./partials/supportWorker/step10";
import Step11 from "./partials/supportWorker/step11";
import Step12 from "./partials/supportWorker/step12";
import Step13 from "./partials/supportWorker/step13";
import Step14 from "./partials/supportWorker/step14";
import Step15 from "./partials/supportWorker/step15";
import Step16 from "./partials/supportWorker/step16";
import Step17 from "./partials/supportWorker/step17";
import Step18 from "./partials/supportWorker/step18";
import ThankYou from './partials/supportWorker/thankyou';

const simpleCrypto = new SimpleCrypto("user_id");

class SupportWorkerRegForm extends Component {
  state = {
    stepNumber: 1,
    lastStep: 19,
    contactEmail: '',
    first_name: '',
    skipSteps: [],
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
        //console.log(values);
        //Call next step
        setTimeout(() => {
          this.state.stepNumber === (this.state.lastStep - 1) ? this.submitOnServer('completed') : this.nextStep();
        }, 10);
        this.props.changeStateToReducer("support_worker_data", {
          ...this.props.store_values.support_worker_data,
          ...values
        });
      }
    });
  };

  submitOnServer = (keyword = false) => {
    //console.log(keyword)
    let data = this.props.store_values.support_worker_data;
    if (this.state.update_id) { data.id = this.state.update_id; }
    data.keyword = keyword;
    if (keyword === 'save') {
      this.setState({ save_loader: true });
    } else {
      this.setState({ final_loader: true });
    }//End if condition
    Services.http("POST", 'supportWorker/post.php', data).then(res => {
      this.setState({ save_loader: false, final_loader: false })
      //console.log(res);
      if (!res) { return false; }
      this.setState({
        contactEmail: res.email,
        update_id: res.id,
        first_name: res.name
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


  // getFormData = (id) => {
  //   this.setState({ get_loader: true });
  //   Services.http("GET", 'client/supportWorker/get.php?id=' + id).then(res => {
  //     this.setState({ get_loader: false })
  //     //console.log(res)
  //     if (!res) { return false; }
  //     res = res.data[0];
  //     if (!res) { return false; }
  //     //Set date in moment object
  //     if (res.clientDateOfBirth) { res.clientDateOfBirth = moment(res.clientDateOfBirth); }//End if condition


  //     this.props.changeStateToReducer("support_worker_data", res);
  //     setTimeout(() => { this.setFormFieldsValueNextPrevious(); }, 10)
  //     //console.log(res);
  //     this.setState({
  //       step_1_beforeWeFind: res.beforeWeFind,
  //       step_19_supportWorkers: res.supportWorkers
  //     })

  //   });
  // }//End function

  getStepNum = (stepNumber, type = 'next') => {

    let skip_step_arr_sw = this.props.store_values.skip_step_arr_sw;
    let support_worker_data = this.props.store_values.support_worker_data;
    let step_number = 0;
    if (type === 'next') {

      if (typeof skip_step_arr_sw[stepNumber] === 'object') {
        //Get object name
        var objName = Object.keys(skip_step_arr_sw[stepNumber])[0];
        //console.log(support_worker_data[objName] = 'Client Representative');
        var selectObj = skip_step_arr_sw[stepNumber][objName];
        step_number = selectObj[support_worker_data[objName]];
      } else {
        step_number = skip_step_arr_sw[stepNumber];
      }//End if condition

      //Set array for previous
      let obj = {};
      obj[step_number] = stepNumber;
      //console.log(stepNumber + " - " + step_number);
      this.props.changeStateToReducer("skip_step_pre_sw", {
        ...this.props.store_values.skip_step_pre_sw,
        ...obj
      });

    } else {
      step_number = this.props.store_values.skip_step_pre_sw[stepNumber];
    }//End if condition
    return step_number;
  }//End function


  nextStep = () => {
    this.setState({ stepNumber: this.getStepNum(this.state.stepNumber) }, () => {
      this.props.form.setFieldsValue(AntFieldsName(this.props.store_values.support_worker_data));
    });
  }; //End function

  previousStep = () => {
    this.setState({ stepNumber: this.getStepNum(this.state.stepNumber, 'previous') }, () => {
      this.props.form.setFieldsValue(AntFieldsName(this.props.store_values.support_worker_data));
    });
  }; //End function



  array_search = (arr, findValue) => {
    var found = arr.find(element => { return element === findValue; });
    return found ? true : false;
  }; //End function

  array_unique = arr => {
    return arr.filter((x, i, a) => a.indexOf(x) === i); //Make array unique
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
          {stp !== st.lastStep && <FormSteps steps={stp} />}
          <React.Fragment>
            {stp === 1 && <Step1 formProps={fp} />}
            {stp === 2 && <Step2 formProps={fp} />}
            {stp === 3 && <Step3 formProps={fp} />}
            {/* {stp === 4 && <Step4 formProps={fp} />} */}
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
            {stp === 19 && <ThankYou email={st.contactEmail} name={st.first_name} />}
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
                  {/* {st.stepNumber > 1 &&
                    <React.Fragment>
                      <Button onClick={() => this.submitOnServer('save')} loading={st.save_loader} size="large" style={btnStyles}> Save </Button>
                      &nbsp; | &nbsp;
                  </React.Fragment>
                  } */}
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
  // componentDidMount() {
  //   //this.encrypt_filter(2);
  //   if (window.location.search) {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     console.log(searchParams.get('save'))
  //     //console.log(simpleCrypto.decrypt(searchParams.get('save')));
  //     if (searchParams.get('save')) {
  //       this.setState({ update_id: simpleCrypto.decrypt(searchParams.get('save')) }, () => {
  //         //console.log(this.state.update_id);
  //         this.getFormData(this.state.update_id);
  //       })
  //     }//End if condition
  //   }//End if condition
  // }//End componentDidMount
} //End class
export default connect(
  mapStateToProps,
  mapDispatchToState
)(Form.create()(SupportWorkerRegForm));
