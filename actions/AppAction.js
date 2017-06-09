var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    addNote: function (note) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.ADD_NOTE,
            note: note
        })
    },
    receivedNotes: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_NOTES,
            notes: data
        })
    },
    removeNote: function (id) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_NOTE,
            noteId: id
        })
    }
};

module.exports = AppActions;