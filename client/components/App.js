/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

function getAppState() {
  return {
    keyword: appStore.getSearchText(),
    results: appStore.getResults()
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
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h1>Info Finder</h1>
            </div>
          </div>
          <div className="col-md-12">
            <SearchForm />
            <SearchResults searchText={this.state.keyword} results={this.state.results} />
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