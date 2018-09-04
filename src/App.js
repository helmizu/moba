import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Team from './components/LandingPage/Team'
import Tes from './components/LandingPage/Tes'
import { Provider } from 'react-redux'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Tes} />
            <Route path="/team" component={Team} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
