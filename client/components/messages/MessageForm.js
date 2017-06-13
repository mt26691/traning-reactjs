/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();

    this.props.emit("MessageAdded", {
      timeStamp: Date.now(),
      text: this.refs.text.value.trim(),
      user:this.props.user.name
    });
    
    this.refs.text.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="text" placeholder="Please type a message..." />
          </div>
        </form>
      </div>
    );
  }
}