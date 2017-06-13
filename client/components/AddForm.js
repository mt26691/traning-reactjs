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
    var workout = {
      id: Date.now(),
      type: this.refs.type.value.trim(),
      minutes: this.refs.minutes.value.trim(),
      miles: this.refs.miles.value.trim(),
      date: new Date()
    }
    AppAcion.addWorkOut(workout);
  }

  render() {
    return (
      <div>
        <h5>Add a video</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group">
              <select className="form-control" ref="type">
                <option value="Jogging">Jogging</option>
                <option value="WeightLifting">Weight Lifting</option>
                <option value="Yoga">Yoga</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" ref="minutes" placeholder="minutes" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" ref="miles" placeholder="miles" />
            </div>
            <button className="btn btn-info btn-block" type="submit">Log Workout</button>
          </div>
        </form>
      </div>
    );
  }
}