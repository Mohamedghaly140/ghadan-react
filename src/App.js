import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Containers/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
        <h2>Ghadan Website</h2>
      </div>
    );
  }
}

export default App;
