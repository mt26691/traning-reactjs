var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';
var videos = [];

var AppStore = assign({}, EventEmiiter.prototype, {
    setVideos: function (data) {
        videos = data;
    },
    setVideo:function(data){
        videos.push(data);
    },
    getVideos: function () {
        return videos;
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
        case AppConstants.SAVE_VIDEO:
            AppStore.setVideo(action.video);
            AppApi.saveVideo(action.video);
            break;
        case AppConstants.RECEIVED_VIDEOS:
            AppStore.setVideos(action.videos);
            break;
        default:
            return true;
    }

    AppStore.emit(CHANGE_EVENT);

    return true;
});

module.exports = AppStore;