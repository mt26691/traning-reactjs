/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Profile from './github/Profile';
import RepoList from './github/RepoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "stephengrider",
      userData: [],
      userRepo: [],
      perPage: 5
    }
  }

  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + "?client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({
          userData: data
        });
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ username: null });
      }.bind(this)
    });
  }

  //get user repo
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + "/repos?per_page" + this.state.perPage + "&client_id=" +
      this.props.clientId + "&client_secret=" + this.props.clientSecret + 'sort=created',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({
          userRepos: data
        });
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ username: null });
      }.bind(this)
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>);
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

App.defaultProps = {
  clientId: '239f7d66a60067e59c27',
  clientSecret: '99eb9910891c694f3d4f76c9b377ec556cfa5057'
}

export default App;