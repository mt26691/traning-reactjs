/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';
import Workout from './Workout';

export default class WorkoutList extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>You have {this.props.workouts.length} Workouts</h1>
        <ul className="list-group">
          {
            this.props.workouts.map((workout, index) => {
              return <Workout workout={workout} key={index} />
            })
          }
        </ul>
      </div>
    );
  }
}