import React, { Component } from 'react';
import './App.css';
import './assets/css/style.css'
import { Provider } from 'react-redux'
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Team from './components/LandingPage/Team'
import Dashboard from './components/Dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Daftar from './components/Daftar/Daftar';
import Login from './components/Login/Login';
import { setCurrentUser, logoutUser } from './actions/globalAction';
import jwt_decode from 'jwt-decode';

if(localStorage.jwToken){
  const decoded = jwt_decode(localStorage.jwToken)
  const currentTime = Date.now() / 1000
  store.dispatch(setCurrentUser(decoded))
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser())
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/team" component={Team} />
            <Route path="/daftar" component={Daftar} />
            <Route path="/login" component={Login} />
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
