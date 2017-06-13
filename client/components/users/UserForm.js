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
    var contact = {
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim(),
    }

    AppAcion.saveContact(contact);
  }

  render() {
    return (
      <div className="well">
        <h3>User Form</h3>

      </div>
    );
  }
}