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
    this.emit = this.emit.bind(this);

    this.state = {
      status: "disconnected",
      messages: [{
        timeStamp: Date.now(),
        text: "Welcome to sockchat"
      }],
      users: [],
      user: ''
    }
  }
  setUser(user) {
    this.setState({ user: user });
  }
  componentWillMount() {
    this.socket = io('http://localhost:3000/');
    this.socket.on("connect", this.connect.bind(this));
     this.socket.on("disconnect", this.disconnect.bind(this));
    this.socket.on("MessageAdded", this.onMessageAdded.bind(this));
    this.socket.on("userJoined", this.onUserJoined.bind(this));

  }
  onUserJoined(data) {
    this.setState({ users: data });
  }
  componentDidMount() {
    appStore.addChangeListener(this._onChange);
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

  disconnect(users) {
    this.setState({
      users: users,
      status: "disconnected"
    });
  }
  onMessageAdded(message) {
    this.setState({ messages: this.state.messages.concat(message) });
  }

  emit(event, payload) {
    this.socket.emit(event, payload);
  }
  render() {
    if (this.state.user == "") {
      return <UserForm emit={this.emit} setUser={this.setUser.bind(this)} />
    }
    else {
      return (
        <div className="row">
          <div className="col-md-4">
            <UserList {...this.state} />
          </div>
          <div className="col-md-8">
            <MessageList {...this.state} />
            <MessageForm {...this.state} emit={this.emit} />
          </div>
        </div>);
    }
  }

  _onChange() {
    this.setState(getAppState());
  }
}


export default App;