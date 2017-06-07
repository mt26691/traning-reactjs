/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import SearchFrom from './movie/SearchForm';

function getAppState() {
  return {
    movies: appStore.getMovieResults()
  }
}
class App extends React.Component {

  getInitalState() {
    return getAppState();
  }
  constructor(props) {
    super(props);
    this.state = {

    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    appStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange);
  }

  render() {
    console.log("search1");
    console.log(this.state.movies);
    console.log("search");
    return (
      <div>
        <SearchFrom />
      </div>);
  }
  _onChange() {
    this.setState(getAppState);
  }
}


export default App;