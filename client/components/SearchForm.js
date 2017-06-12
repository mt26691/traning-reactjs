/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    var data = {
      keyword: this.refs.text.value.trim()
    }
    AppAcion.search(data);
  }

  render() {
    return (
      <div>
        <h5>Search Form</h5>
        <form onSubmit={this.onSubmit} className="well">
          <div className="form-group">
            <label>Search for something
            </label>
            <input type="text" className="form-control" ref="text" placeholder="Enter Text..." />
          </div>
        </form>
      </div>
    );
  }
}