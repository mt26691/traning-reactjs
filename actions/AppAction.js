var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    search: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH,
            keyword: data.keyword
        })
    },
    receivedResults: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_RESULTS,
            results: data
        })
    }

};

module.exports = AppActions;