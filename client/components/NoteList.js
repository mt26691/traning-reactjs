/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';
import Note from './Note';
export default class NoteList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        {this.props.notes.map((note, index) => {
          return <Note key={index} note={note} />
        })}
      </div>
    );
  }
}