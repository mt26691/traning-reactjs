var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    showForm: function () {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SHOW_FORM
        })
    },
    addWorkOut: function (workout) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.ADD_WORKOUT,
            workout: workout
        })
    },
    receivedWorkouts: function (workouts) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_WORKOUTS,
            workouts: workouts
        })
    },
    deleteWorkout: function (id) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.DELETE_WORKOUT,
            id: id
        })
    }

};

module.exports = AppActions;