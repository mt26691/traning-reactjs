var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _keyword = "";
var results = [];

var AppStore = assign({}, EventEmiiter.prototype, {
    setSearchText: function (keyword) {
        _keyword = keyword;
    },
    getSearchText: function () {
        return _keyword;
    },
    setResults: function (data) {
        results = data;
    },
    getResults: function () {
        return results;
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
        case AppConstants.SEARCH:
            AppApi.searchText(action.keyword);
            AppStore.setSearchText(action.keyword);
            break;
        case AppConstants.RECEIVED_RESULTS:
            AppStore.setResults(action.results);
            break;
        default:
            return true;
    }

    AppStore.emit(CHANGE_EVENT);

    return true;
});

module.exports = AppStore;