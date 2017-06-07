/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';

export default class Question extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

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

  onChange(e) {
    e.preventDefault();
    const { setCurrent, setScore, question } = this.props;
    let selected = e.target.value;

    if (selected == question.correct) {
      setScore(this.props.score + 1);
    }

    setCurrent(this.props.current + 1);
    
  }
  render() {
    const { question } = this.props;

    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            this.props.question.choices.map(choice => {
              return (
                <li className="list-group-item" key={choice.id}>
                  {choice.id} <input type="radio" onChange={this.onChange} name={question.id} value={choice.id} /> {choice.text}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}