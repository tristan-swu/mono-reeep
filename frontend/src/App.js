import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { greeting } from '@reep/tools'

// This works:
import { spoon } from '@reep/tools/dist/spoon'
// This does not:
// import { spoon } from '@reep/tools/spoon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p><b>Greeting:</b>{greeting}</p>
          <p><b>Spoon:</b>{spoon()}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
