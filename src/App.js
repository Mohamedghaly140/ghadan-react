import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Containers/Navigation/Navigation';
import Slider from './Components/Slider/Slider';
import Features from './Components/Features/Features';
import Partner from './Components/Partner/Partner';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
        <Slider />
        <Features />
        <Partner />
      </div>
    );
  }
}

export default App;
