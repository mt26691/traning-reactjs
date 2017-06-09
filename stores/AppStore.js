var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmiiter.prototype, {
    addNote: function (note) {
        _notes.push(note);
    },
    setNotes: function (notes) {
        _notes = notes;
    },
    getNotes: function () {
        return _notes;
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
        case AppConstants.ADD_NOTE:
            console.log(action.note);
            AppStore.addNote(action.note);
            AppApi.addNote(action.note);
            break;
        case AppConstants.RECEIVED_NOTES:
            AppStore.setNotes(action.notes);
            break;
        default:
            return true;
    }

    AppStore.emit(CHANGE_EVENT);

    return true;
});

module.exports = AppStore;