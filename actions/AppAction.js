var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchMovies: function (movie) {
        console.log("searching for movie "+movie.title);
        appDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie:movie
        })
    }
};

module.exports = AppActions;