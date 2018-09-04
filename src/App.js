import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Team from './components/LandingPage/Team'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/team" component={Team} />
        </div>
      </Router>
    );
  }
}

export default App;
