var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    saveContact: function (contact) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        })
    },
    receiveMovieResults: function (movies) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_MOVIES,
            movies: movies
        })
    }
};

module.exports = AppActions;