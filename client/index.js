/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppApi from '../utils/AppApi';

AppApi.getVideos();
ReactDOM.render(<App />, document.getElementById('root'));