/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppApi from '../utils/AppApi';
console.log("load again");
AppApi.getContacts();
ReactDOM.render(<App />, document.getElementById('root'));