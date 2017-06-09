/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class Note extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="column">
        <div className="note">
          <p>
            {this.props.note.text}
          </p>
        </div>
      </div>
    );
  }
}