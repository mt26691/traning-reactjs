/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList';
import AppApi from '../../utils/AppApi';

function getAppState() {
  return {
    notes: appStore.getNotes()
  };
}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = getAppState();

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    appStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  }

  render() {
    console.log(this.state.notes);
    return (
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
              <div className="row column">
                <br />
                <AddNoteForm />
              </div>
            </div>
            <div className="off-canvas-content" data-off-canvas-content>
              {this.state.notes && <NoteList notes={this.state.notes} />}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange() {
    this.setState(getAppState());
  }
}


export default App;