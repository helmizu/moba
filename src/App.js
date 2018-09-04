import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Team from './components/LandingPage/Team'
import Tes from './components/LandingPage/Tes'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/team" component={Team} />
            <PrivateRoute path="/tes" component={Tes} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
