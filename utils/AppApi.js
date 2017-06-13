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
    addWorkout: function (workout) {
        var workouts = JSON.parse(localStorage.getItem("workouts"));
        if (workouts == null) {
            workouts = [];
        }
        workouts.push(workout);
        console.log(workouts);
        localStorage.setItem("workouts", JSON.stringify(workouts));
    },
    getWorkouts: function () {
        var workouts = JSON.parse(localStorage.getItem("workouts"));
        if (workouts == null) {
            workouts = [];
        }
        AppActions.receivedWorkouts(workouts);
    },
    removeWorkout: function (id) {
        var workouts = JSON.parse(localStorage.getItem("workouts"));
        if (workouts == null) {
            workouts = [];
        }
        workouts = workouts.filter(t => t.id !== id);
        localStorage.setItem("workouts", JSON.stringify(workouts));

    },
}