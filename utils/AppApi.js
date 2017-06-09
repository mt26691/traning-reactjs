var AppActions = require("../actions/AppAction");

var apiKey = "H5w--wJOqxfNop0razFmOolkJeNqfEF8"
module.exports = {
    addNote: function (note) {
        $.ajax({
            url: `https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=${apiKey}`,
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },
    getNotes: function () {
        $.ajax({
            url: `https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=${apiKey}`,
            dataType: 'json',
            cache: false,
            success: function (data) {
                AppActions.receivedNotes(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    },
    removeNote: function (noteId) {
        $.ajax({
            url: `https://api.mlab.com/api/1/databases/stickypad/collections/notes/${noteId}?apiKey=${apiKey}`,
            type: "DELETE",
            async: true,
            timeout: 30000,
            success: function (data) {
                console.log("removed");
                console.log(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        });
    },
}