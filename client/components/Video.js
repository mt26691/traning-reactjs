/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class Video extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.video);
    var videoLink = `https://www.youtube.com/embed/${this.props.video.video_id}`;
    return (
      <div className="col-md-8 col-md-offset-2">
       <h4>{this.props.video.title}</h4>
       <iframe width="360" height="285" src={videoLink} frameBorder="0" allowFullScreen></iframe>
       <p>{this.props.video.description}</p>
      </div>
    );
  }
}