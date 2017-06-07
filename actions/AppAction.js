var appDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    saveContact: function (contact) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        })
    },
    receivedContact: function (contacts) {
        appDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVED_CONTACTS,
            contacts: contacts
        })
    }
};

module.exports = AppActions;