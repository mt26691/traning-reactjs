/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class AddForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    var video = {
      title: this.refs.title.value.trim(),
      video_id: this.refs.video_id.value.trim(),
      description: this.refs.description.value.trim(),
    }
    
    AppAcion.saveVideo(video);
  }

  render() {
    return (
      <div>
        <h5>Add a video</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group">
              <label>Video Title
              </label>
              <input type="text" className="form-control" ref="title" placeholder="Enter Title..." />
            </div>
            <div className="form-group">
              <label>Video ID
              </label>
              <input type="text" className="form-control" ref="video_id" placeholder="Enter Id..." />
            </div>
            <div className="form-group">
              <label>Description
              </label>
              <textarea name="description" id="description" ref="description" className="form-control" cols="30" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}