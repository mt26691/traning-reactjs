var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchMovies: function (movie) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
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