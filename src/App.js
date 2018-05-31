import React, { Component } from 'react';
import AddJob from './addJob'
import AcceptJob from './accept'
import {BrowserRouter as router}  from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddJob/>
      </div>
    );
  }
}

export default App;
