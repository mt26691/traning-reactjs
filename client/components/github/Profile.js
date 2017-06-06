/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';

export default class Profile extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.login}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{ width: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">
                    {this.props.userData.public_repos} Repos
                  </span>
                  <span className="label label-success">
                    {this.props.userData.public_gists} public gists
                  </span>
                  <span className="label label-info">
                    {this.props.userData.followers} foloowers
                  </span>
                  <span className="label label-danger">
                    {this.props.userData.following} following
                  </span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>
                        Username:
                    </strong>
                      {this.props.userData.login}
                    </li>
                    <li className="list-group-item">
                      <strong>
                        Location:
                    </strong>
                      {this.props.userData.location}
                    </li>
                    <li className="list-group-item">
                      <strong>
                        Email:
                    </strong>
                      {this.props.userData.email}
                    </li>
                    <li className="list-group-item">
                      <strong>
                        Profile:
                    </strong>
                      <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url} >Visit</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}