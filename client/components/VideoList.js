/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';
import Video from './Video';

export default class VideoList extends React.Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div>
        <h1>You have {this.props.videos.length} video</h1>
      </div>
    );
  }
}