var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    search: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH,
            keyword: data.keyword
        })
    },
    saveVideo: function (video) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_VIDEO,
            video: video
        })
    },

    receivedVideos: function (data) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_VIDEOS,
            videos: data
        })
    }

};

module.exports = AppActions;