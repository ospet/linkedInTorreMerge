import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Profile from './profile/profileContainer';
import { Provider } from 'react-redux';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <BrowserRouter>
          <Switch >
            <Route exact path="/linkedin" component={LinkedInPopUp} />
            <Route path="/" component={Profile} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
