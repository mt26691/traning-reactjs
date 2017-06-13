/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    var name = this.refs.name.value.trim()
    this.props.setUser({ name: name });
    
    this.props.emit("userJoined", {
      name: name
    });

    this.refs.name.value = "";
  }

  render() {
    return (
      <div className="well">
        <h3>Chat Login</h3>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="form-control" ref="name" placeholder="Choose  a username" />
        </form>
      </div>
    );
  }
}