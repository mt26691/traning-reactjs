var AppActions = require("../actions/AppAction");

module.exports = {
    addNote: function (contact) {
        var ref = app.database().ref("contacts");
        var newPostRef = ref.push(contact);
    }
}