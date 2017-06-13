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
        var ref = app.database().ref("contacts");
        var newPostRef = ref.push(contact);
    },
    saveVideo: function (video) {
        var ref = app.database().ref("videos");
        var newPostRef = ref.push(video);
    },
    updateContact: function (contact) {
        var ref = app.database().ref("contacts");
        var newPostRef = ref.child(contact.id).update(contact);
    },
    getVideos: function () {
        var ref = app.database().ref("videos");
        ref.once("value", function (snapshot) {
            var videos = [];
            snapshot.forEach(function (childSnapshot) {
                var video = {
                    id: childSnapshot.key,
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description,
                };
                videos.push(video);
            });
            AppActions.receivedVideos(videos);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

    },
    removeVideo: function (id) {
        var ref = app.database().ref("videos");
        ref.child(id).remove();
    },
}