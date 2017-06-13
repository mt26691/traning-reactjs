/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class UserList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="well">
        <h3>User List</h3>
      </div>
    );
  }
}