var AppActions = require("../actions/AppAction");

var apiKey = "H5w--wJOqxfNop0razFmOolkJeNqfEF8"
module.exports = {
    searchText: function (text) {
        var url = `http://api.duckduckgo.com/?q=${text}&format=json&pretty=1`;
        $.ajax({
            url: url,
            dataType: 'jsonp',
            cache: false,
            success: function (data) { 
                AppActions.receivedResults(data.RelatedTopics);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this),
        });
    }
}