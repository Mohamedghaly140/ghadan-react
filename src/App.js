import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { StyleRoot } from 'radium';
import Navigation from './Containers/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import NoMatch from './Components/NoMatch/NoMatch';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <BrowserRouter>
          <Navigation />
          <Products />
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route component={NoMatch} />
          <Footer />
        </BrowserRouter>
      </StyleRoot>
    );
  }
}

export default App;
