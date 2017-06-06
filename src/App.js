import React, { Component } from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
