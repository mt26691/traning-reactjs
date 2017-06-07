/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    var movie = {
      title: this.refs.title.value.trim()
    }

    AppAcion.searchMovies(movie);
  }

  render() {
    return (
      <div className="search-form">
        <h1 className="text-center">Search for a movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" ref="title" placeholder="Enter movie title" />
          </div>
          <button className="btn btn-primary btn-block">Search Movie</button>
        </form>
      </div>
    );
  }
}