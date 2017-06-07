/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import AddForm from './contact/AddForm';

function getAppState() {
  return {
    contacts: appStore.getContacts()
  }
}
class App extends React.Component {

  getInitalState() {
    return getAppState();
  }
  constructor(props) {
    super(props);
    this.state = {

    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    appStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  }

  render() {
    
    return (
      <div>
        <AddForm />
      </div>);
  }
  _onChange() {
    this.setState(getAppState);
  }
}


export default App;