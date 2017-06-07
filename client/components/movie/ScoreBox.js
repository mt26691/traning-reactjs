/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';

export default class ScoreBox extends React.Component {
  render() {
    return (
      <div className="questions">

        {this.props.current <= this.props.questions.length && <div> Question = {this.props.current} out of {this.props.questions.length} |  <span className="pull-right"><strong>
          Score : {this.props.score}
        </strong></span>
        </div>}
        {this.props.current > this.props.questions.length &&
          <div>
            <h4>You got {this.props.score} out of{this.props.questions.length}</h4>
            <a href="/">Try Again</a>
          </div>
        }
      </div>
    );
  }
}