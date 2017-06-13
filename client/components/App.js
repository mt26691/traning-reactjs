/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import VideoList from './VideoList';
import AddForm from './AddForm';

function getAppState() {
  return {
    videos: appStore.getVideos()
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
              <h1>Youtube Gallery</h1>
            </div>
          </div>
          <div className="col-md-12">
            <AddForm />
            {
              this.state.videos.length > 0 && <VideoList videos={this.state.videos} />
            }
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