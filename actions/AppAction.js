var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    addNote: function (note) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.ADD_NOTE,
            note: note
        })
    },
   
};

module.exports = AppActions;