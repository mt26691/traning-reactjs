/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import AddForm from './contact/AddForm';
import ContactList from './contact/ContactList';
import AppApi from '../../utils/AppApi';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(appStore.getContacts());
    this.state = {
      contacts: appStore.getContacts()
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
        {this.state.contacts && <ContactList contacts={this.state.contacts} />}
      </div>);
  }

  _onChange() {
    this.setState({
      contacts: appStore.getContacts()
    });
  }
}


export default App;