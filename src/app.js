import React, { Component } from 'react';
import ClientRegForm from './form/clientRegForm';
import SupportWorkerRegForm from './form/supportWorkerRegForm';

class App extends Component {
  state = {
    page: ''
  }//End state
  render() {
    const st = this.state;
    return (
      <div>
        {st.page === 'client' && <ClientRegForm />}
        {st.page === 'supportWorker' && <SupportWorkerRegForm />}
      </div>
    );//End return
  }//End render
  componentDidMount() {
    if (window.location.search) {

      const searchParams = new URLSearchParams(window.location.search);
      //console.log(searchParams.get('page'))
      this.setState({ page: searchParams.get('page') });

    }//End if condition
  }//End componentDidMount
}//End class

export default App;