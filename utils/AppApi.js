var AppActions = require("../actions/AppAction");

module.exports = {
    saveContact: function (contact) {
        $.ajax({
            url: "http://www.omdbapi.com/?apikey=ae6969ba&s=" + movie.title,
            dataType: "json",
            cache: false,
            success: function (data) {
                AppActions.receiveMovieResults(data.Search);
             }.bind(this),
            error: function (xhr, status, error) {
                alert(error);
            }.bind(this)
        })
    }
}