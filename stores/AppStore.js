var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmiiter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeLister: function (callback) {
        this.removeListener('change', callback);
    }
});

appDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {

        default:
            break;
    }

    return true;
});

module.exports = AppStore;