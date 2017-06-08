/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import AddForm from './contact/AddForm';
import EditForm from './contact/EditForm';
import ContactList from './contact/ContactList';
import AppApi from '../../utils/AppApi';

function getAppState() {
  return {
    contacts: appStore.getContacts(),
    contactToEdit: appStore.getContactForEdit()
  };
}
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(appStore.getContacts());
    this.state = getAppState();

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
        {this.state.contactToEdit == null && <AddForm />}
        {this.state.contactToEdit != null && <EditForm contactToEdit={this.state.contactToEdit} />}
        {this.state.contacts && <ContactList contacts={this.state.contacts} />}
      </div>);
  }

  _onChange() {
    this.setState(getAppState());
  }
}


export default App;