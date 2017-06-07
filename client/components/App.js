/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import QuestionList from './quiz/QuestionList';
import ScoreBox from './quiz/ScoreBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: "what is your name?",
          choices: [
            { id: 'a', text: 'Tung' },
            { id: 'b', text: 'Leanrs' },
            { id: 'c', text: 'To' },
            { id: 'd', text: 'Code' },
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: "What is your phone number?",
          choices: [
            { id: 'a', text: 'Tung' },
            { id: 'b', text: '0985519599' },
            { id: 'c', text: 'To' },
            { id: 'd', text: 'Code' },
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: "How are you?",
          choices: [
            { id: 'a', text: 'Tung' },
            { id: 'b', text: 'Leanrs' },
            { id: 'c', text: "I'm fine" },
            { id: 'd', text: 'Code' },
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: "Who is monkey king?",
          choices: [
            { id: 'a', text: 'Test' },
            { id: 'b', text: 'SonTung' },
            { id: 'c', text: 'MTP' },
            { id: 'd', text: 'wukong' },
          ],
          correct: 'd'
        },
      ],
      score: 0,
      current: 1
    };

    this.setCurrent = this.setCurrent.bind(this);
    this.setScore = this.setScore.bind(this);

  }

  setCurrent(current) {
    this.setState({
      current: current
    })
  }

  setScore(score) {
    this.setState({
      score: score
    });
  }

  render() {
 

    return (
      <div>
        <ScoreBox {...this.state} />
        <QuestionList {...this.state} setCurrent={this.setCurrent} setScore={this.setScore} />
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