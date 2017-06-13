/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';

export default class Message extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { message } = this.props;
    var formattedTime = this.formatTime(message.timeStamp);
    console.log(message);
    return (
      <div className="message">
        <strong>
          {message.user}
        </strong>
        {formattedTime} - {message.text}
      </div>
    );
  }

  formatTime(timeStamp) {
    var dt = new Date(timeStamp * 1000);
    var hours = dt.getHours();
    var minutes = dt.getMinutes()
    var seconds = dt.getSeconds();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  }
}