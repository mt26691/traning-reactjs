var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    saveContact: function (contact) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        })
    },
    updateContact: function (contact) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_CONTACT,
            contact: contact
        })
    },
    receivedContact: function (contacts) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_CONTACTS,
            contacts: contacts
        })
    },
    remove: function (id) {
        console.log(id);
        appDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_CONTACT,
            id: id
        })
    },
    editContact: function (id) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_CONTACT,
            id: id
        })
    }
};

module.exports = AppActions;