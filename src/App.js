import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Containers/Navigation/Navigation';
import Slider from './Components/Slider/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
        <Slider />
      </div>
    );
  }
}

export default App;
