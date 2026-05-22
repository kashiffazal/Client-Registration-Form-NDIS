import React from 'react';
import ReactDOM from 'react-dom';

//import Redux methods
import { Provider } from 'react-redux';
import Store from './store';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import './styles.css';

//Set domain path into browser variable
if (process.env.NODE_ENV !== 'production') {
  window.domainPath = process.env.REACT_APP_DOMAIN_DEV;
} else {
  window.domainPath = process.env.REACT_APP_DOMAIN_PRO;
}//End if condition

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
