import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Containers/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Products />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;