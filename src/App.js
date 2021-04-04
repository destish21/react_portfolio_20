import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Nav/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Foot from './components/Foot/Footer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
      <About />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/portfolio'>
        <Portfolio />
      </Route>
      </Switch>
      </Router>
      < Foot />
    </div>
  );
}

export default App;
