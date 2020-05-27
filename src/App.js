import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <h2>Ghadan Website</h2>
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
