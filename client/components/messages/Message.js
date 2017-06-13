/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class AddForm extends React.Component {

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
        <h3>Add contact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="name" placeholder="Name..." />
          </div>
           <div className="form-group">
            <input type="text" className="form-control" ref="phone" placeholder="Phone..." />
          </div>
           <div className="form-group">
            <input type="text" className="form-control" ref="email" placeholder="Email..." />
          </div>
          <button className="btn btn-primary btn-block" type="submit">Add</button>
        </form>
      </div>
    );
  }
}