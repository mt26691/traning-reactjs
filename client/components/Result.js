/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';

export default class Result extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="content lead" dangerouslySetInnerHTML={{__html:this.props.result.Result}}>
        </p>
      </div>
    );
  }
}