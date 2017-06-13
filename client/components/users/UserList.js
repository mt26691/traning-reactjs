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
      <div>
        <h3>Users ({this.props.users.length})</h3>
        <ul className="list-group">
          {
            this.props.users.map((user, index) => {
              return <li className="list-group-item"  key={index}>
                {user.name}
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}