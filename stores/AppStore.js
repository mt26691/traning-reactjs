var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmiiter = require('events').EventEmitter;
var assign = require("object-assign");

var AppApi = require('../utils/AppApi');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmiiter.prototype, {
    saveContact: function (contact) {
        _contacts.push(contact);
    },
    setContactForEdit: function (id) {
        editContact = _contacts.find(t => t.id == id);
    },
    getContactForEdit() {
        return editContact;
    },
    updateContact(contact) {
        var index = _contacts.findIndex(x => x.id === contact.id);
        _contacts.splice(index, 1,contact);
        editContact = null;

    },
    getContacts: function () {
        return _contacts;
    },
    removeContact: function (id) {
        var index = _contacts.findIndex(x => x.id === id);
        _contacts.splice(index, 1);
    },
    setContacts: function (contacts) {
        _contacts = contacts;
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
        case AppConstants.SAVE_CONTACT:
            AppStore.saveContact(action.contact);
            AppApi.saveContact(action.contact);
            break;
        default:
            return true;
    }

    AppStore.emit(CHANGE_EVENT);

    return true;
});

module.exports = AppStore;