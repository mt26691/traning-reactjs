/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class Note extends React.Component {

  constructor(props) {
    super(props);
    this.removeNote = this.removeNote.bind(this);
  }
  removeNote() {
    AppAcion.removeNote(this.props.note._id.$oid);
  }

  render() {
    return (
      <div className="column">
        <div className="note" onDoubleClick={this.removeNote} >
          <p>
            {this.props.note.text}
          </p>
        </div>
      </div>
    );
  }
}