import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
//router components for react
//Route for render out components base on URLs
import {BrowserRouter as Router, Switch, Route} from ' react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/> 
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </div>
    </Router>
  ); 
}

export default App;
