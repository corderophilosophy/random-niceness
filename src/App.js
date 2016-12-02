import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import Main from './components/main';
import Banner from './components/banner';
import TweetPicker from './components/tweetPicker';
import Result from './components/result';
import base from './base';
import Auth from './helpers';
import {loadState, saveState} from './helpers';

const initialState = loadState() || {
  loggedIn: false,
  userId: '',
  tweets: [
    {label: "Nice Day", text: "Hi there! I hope you're having a nice day!"},
    {label: "You're Great!", text: "Always remember, you're great!"},
    {label: "You're Loved", text: "No matter who you are, somebody loves you!"},
    {label: "Thanks!", text: "You're a meaningful part of the world! Thanks!"},
  ],
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = Auth.authHandler;
    this.logout = Auth.logout.bind(this);
  }
  authenticate() {
    base.authWithOAuthRedirect('twitter', this.authHandler.bind(this));
  }
  _save(state) {
    saveState(state);
    this.setState({
      ...state
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Main>
          <button onClick={() => this.logout()}>Logout</button>
          <Match exactly pattern="/" component={() => (<Banner handleClick={() => this.authenticate()}/>)} />
          <Match pattern="/tweetPicker" component={() => (<TweetPicker tweets={this.state.tweets} />)} />
          <Match pattern="/result/:id" component={(props) => (<Result tweets={this.state.tweets} {...props}/>)} />
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
