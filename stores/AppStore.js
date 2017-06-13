var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';
var workouts = [];

var _showForm = false;
var AppStore = assign({}, EventEmiiter.prototype, {
    showForm: function () {
        _showForm = true;
    },
    getShowForm: function () {
        return _showForm;
    },
    addWorkout: function (workout) {
        workouts.push(workout);
    },
    removeWorkout: function (id) {
        workouts = workouts.filter(t => t.id !== id);
    },
    setWorkouts: function (newData) {
        workouts = newData;
    },
    getWorkouts: function () {
        return workouts;
    },
    emitChange: function () {
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppStore.dispatcherIndex = appDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case AppConstants.SHOW_FORM:
            AppStore.showForm();
            break;
        case AppConstants.ADD_WORKOUT:
            AppStore.addWorkout(action.workout);
            AppApi.addWorkout(action.workout);
            break;
        case AppConstants.RECEIVED_WORKOUTS:
            AppStore.setWorkouts(action.workouts);
            break;
        case AppConstants.DELETE_WORKOUT:
            AppStore.removeWorkout(action.id);
            AppApi.removeWorkout(action.id);
            break;
        default:
            return true;
    }

    AppStore.emit(CHANGE_EVENT);

    return true;
});

module.exports = AppStore;