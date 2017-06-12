/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../actions/AppAction';
import Result from './Result';

export default class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div>
        {this.props.results.length > 0 && <h1 className="page-header">
          Results for {this.props.searchText}</h1>}
        {
          this.props.results.map((result,index) => {
            return <Result result={result} key={index} />
          })
        }
      </div>
    );
  }
}