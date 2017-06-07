var AppActions = require("../actions/AppAction");
var firebase = require("firebase");

var app = firebase.initializeApp({
    apiKey: "AIzaSyAW9iDg7L88N6BeQHQgzphYIadZrAXjUlY",
    authDomain: 'contact-list-2304e.firebaseio.com',
    databaseURL: 'https://contact-list-2304e.firebaseio.com',
    storageBucket: 'contact-list-2304e.appspot.com',
    messagingSenderId: "98769349109"
});

module.exports = {
    saveContact: function (contact) {
        var db = app.database();
        var ref = db.ref("contacts");
        var newPostRef = ref.push();

        newPostRef.push(contact);
    },
    getContacts: function () {
        var db = app.database();
        var ref = db.ref("contacts");

        ref.on("value", function (snapshot) {
            var contacts = [];
            snapshot.forEach(function (childSnapshot) {
                var contact = {
                    id: childSnapshot.key,
                    name: childSnapshot.val().name,
                    email: childSnapshot.val().email,
                    phone: childSnapshot.val().phone,
                };
                contacts.push(contact);
            });
            console.log(contacts);
            AppActions.receivedContact(contacts);

        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

    }
}