/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    
    let username = this.refs.username.value.trim();
    if (!username) {
      alert("please enter username");
    }
    else {
      this.props.search(username);
    }
    this.refs.username.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Search github user</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}