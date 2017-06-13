/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import AppApi from '../../utils/AppApi';
import MessageList from './messages/MessageList';
import MessageForm from './messages/MessageForm';
import UserList from './users/UserList';
import UserForm from './users/UserForm';
import io from 'socket.io-client';

function getAppState() {
  return {

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
    this.socket = io('http://localhost:3000/');
    this.socket.on("connect", this.connect.bind(this));
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  }

  connect() {
    this.setState({
      status: "connected"
    });
    console.log("connected " + this.socket.id);
  }
  render() {

    return (
      <div className="row">
        <div className="col-md-4">
          <UserList />
        </div>
        <div className="col-md-8">
          <MessageList />
          <MessageForm />
        </div>
      </div>);
  }

  _onChange() {
    this.setState(getAppState());
  }
}


export default App;