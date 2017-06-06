/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import Repo from './Repo';

export default class RepoList extends React.Component {
  render() {
    return (
      <div>
        <h1>User Repositories</h1>
        {this.props.userRepos && <ul className="list-group">
          {
            this.props.userRepos.map(repo => {
              return <Repo repo={repo} key={repo.id} {...this.props} />
            })
          }
        </ul>
        }
      </div>
    );
  }
}