/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class Workout extends React.Component {

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    AppAcion.deleteWorkout(this.props.workout.id);
  }
  render() {
    return (
      <li className="list-group-item">
        {this.props.workout.type} - {this.props.workout.minutes} - {this.props.workout.miles}
        <a className="delete" href="#" onClick={this.onDelete}>X</a>
      </li>
    );
  }
}