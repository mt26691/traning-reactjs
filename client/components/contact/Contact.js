/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAction from '../../../actions/AppAction';


export default class Movie extends React.Component {

  constructor(props) {
    super(props);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(i) {
    AppAction.editContact(i);
  }

  handleDelete(i, j) {
    AppAction.remove(i);
  }
  render() {


    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.phone}</td>
        <td>
          <a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact.id)}>Edit</a>
          <a href="#" className="btn btn-danger" onClick={this.handleDelete.bind(this, this.props.contact.id)}>Delete</a>
        </td>
      </tr>
    );
  }
}