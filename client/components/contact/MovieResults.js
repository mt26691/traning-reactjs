/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import Movie from './Movie';

export default class MovieResults extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-center">
          Results
        </h3>
        {
          this.props.movies.map((movie,index)=>{
            return (
              <Movie movie={movie} key={index}/>
            )
          })
        }
      </div>
    );
  }
}