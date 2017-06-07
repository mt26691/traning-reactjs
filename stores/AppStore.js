var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _selected = '';

var AppStore = assign({}, EventEmiiter.prototype, {
    saveContact: function (contact) {
        _contacts.push(contact);
    },
    getContacts: function () {
        return _contacts;
    },
    setContacts:function(contacts){
        _contacts = contacts;
    },
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
        case AppConstants.SAVE_CONTACT:
            AppStore.saveContact(action.contact);
            AppApi.saveContact(action.contact);

            // AppApi.saveContact(action.contact);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVED_CONTACTS:
            AppStore.setContacts(action.contacts);
            AppStore.emit(CHANGE_EVENT);
            break;
        default:
            break;
    }

    return true;
});

module.exports = AppStore;