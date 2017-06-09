/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class AddNoteForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    var note = {
      text: this.refs.text.value.trim()
    }
    AppAcion.addNote(note);
  }

  render() {
    return (
      <div>
        <h5>Add A Note</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="large-12 columns">
              <label>Note Text
								<input type="text" ref="text" placeholder="Enter Text..." />
              </label>
              <button className="button">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}