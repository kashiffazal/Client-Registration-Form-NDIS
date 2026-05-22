/*eslint-disable no-useless-escape*/
/*eslint-disable no-unreachable*/

//import React from 'react';
//import { Link } from 'react-router-dom';

import axios from 'axios';
import { notification, message } from 'antd';

const Services = {
  http: (method, url, data, raffData, hideErrorMsg = false) => {
    url = window.domainPath + '/apis/' + url;
    if (data) {
      const postObj = new FormData();
      let fileArr = [];//After saparating files delete files object from main object
      Object.keys(data).forEach(function (key) {
        //If it's found uploadable file object then set file upload array
        if (typeof (data[key]) === 'object') {
          Object.keys(data[key]).map(item => {
            if (data[key][item]['uid']) {
              fileArr.push(key);
              var colName = (data[key].length > 1) ? key + '_' + item : key;
              postObj.append(colName, data[key][item].originFileObj, data[key][item]['name']);
            }//End if condition
          });
        }//End if condition
        //Delete file object from main content object              
        fileArr.filter((x, i, a) => a.indexOf(x) === i); //Make array unique
        fileArr.forEach(item => { delete data[item]; })
        //If it's get undefined type then set value as empty string
        if (typeof (data[key]) === 'undefined') { data[key] = ''; }
        postObj.append(key, data[key]);
      });//Appending data in postObj
      data = postObj;
    }//End if condition for post with files if available

    return axios({
      method, url, data,
      //Send browser cookies created by php session (withCredentials: true)
      //If you remove this then php session will not be pass to another php page
      withCredentials: true,
    }).then(res => {
      //console.log(res.data);
      res = res.data;
      if (raffData) { console.log(res); }//Show raff data in console
      if (res.consoleLog) {
        console.log(url);
        console.log(res);
      }//End if condition
      if (res.status) {
        return Services.handelRequest(res, 200, url);
      } else {
        return hideErrorMsg ? false : Services.handelRequest(res, 400, url);
      }//End if condition
    }).catch(error => {
      return hideErrorMsg ? false : Services.handelRequest(error, 404, url);
    });
  },//End function
  handelRequest: (res, statusCode, url = '') => {
    //console.log(url);
    //console.log(res);
    if (statusCode === 200) {
      /** If it's allow to show message/notification */
      if (res.successNotify) {
        if (res.successNotifyType === 'notify') {
          notification['success']({ message: res.successTitle || 'Success', description: res.successMsg || 'Request has been completed.', duration: res.successDuration || 5 });
        } else {
          message.success(res.successMsg || 'Request has been completed.', res.successDuration || 5);
        }//End if condition
      }//End if condition
      return res;
    }//End if condition for statusCode 200

    if (statusCode === 400) {
      //console.log(url);
      console.log(res);
      /** If it has database error then redirect to Error page*/
      if (res.errorType === 'db-error') {
        window.location.href = "#/error";
        /** If it has session error then popup login screen*/
      } else if (res.errorType === 'session-error') {
        window.sessionExpire = true;
        return false;
      } else {

        /** Define the notify type as message/notification */
        if (res.errorNotifyType && res.errorNotifyType === 'message') {
          message.error(res.errorMsg || 'There are some error.', res.errorDuration || 10);
        } else {
          notification['error']({ message: res.errorTitle || 'Error', description: res.errorMsg || 'There are some error', duration: res.errorDuration || 10 });
        }//End if condition
        return false;
      }//End if condition
    }//End if condition for statusCode 400

    if (statusCode === 404) {
      //console.log(res);
      //console.log(url);
      notification['error']({
        message: 'Error: Could not connect to Host',
        description: 'Please check your internet connection and try again',
        duration: 10,
        style: { width: 450, marginLeft: 335 - 400 },
      });
      return false;
    }//End if condition for statusCode 404
  },//End function

}//End Services

export default Services;
