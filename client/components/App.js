/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
var appActions = require('../../actions/AppAction');
var appStore = require("../../stores/AppStore");
import WorkoutList from './WorkoutList';
import AddForm from './AddForm';

function getAppState() {
  return {
    showForm: appStore.getShowForm(),
    workouts: appStore.getWorkouts()
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

  onShowFormClick(e) {
    e.preventDefault();
    appActions.showForm();
  }
  render() {
    console.log(this.state.workouts);
    var form = "";
    if (this.state.showForm) {
      var form = <AddForm />;
    }
    return (
      <div>
        <h1 className="text-center page-header">
          Workout logger
        </h1>
        <a href="#" className="btn btn-primary btn-block" onClick={this.onShowFormClick.bind(this)}>Add workout</a>
        <br />
        {form}
        Add
        <br />
        <WorkoutList workouts={this.state.workouts} />
      </div>
    );
  }

  _onChange() {
    this.setState(getAppState());
  }
}


export default App;