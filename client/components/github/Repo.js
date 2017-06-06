/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';

export default class Repo extends React.Component {
  render() {
    const { repo } = this.props;
    return (
      <li className="list-group-item">
        <a href={repo.html_url}>{repo.name}</a> : {repo.description}
      </li>
    );
  }
}