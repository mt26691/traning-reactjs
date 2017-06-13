/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDom from 'react-dom';
import AppAcion from '../../../actions/AppAction';
import Message from './Message';

export default class MessageList extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="well">
        <h3>Messages</h3>
        {
          this.props.messages.map((message, index) => {
            return <Message message={message} key={index}/>
              })       
        }
      </div>
    );
  }
}