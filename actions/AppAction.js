var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    search: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH,
            keyword: data.keyword
        })
    },
    receivedNotes: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_NOTES,
            notes: data
        })
    }
  
};

module.exports = AppActions;