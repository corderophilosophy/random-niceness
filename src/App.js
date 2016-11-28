import React, { Component } from 'react';

import Main from './components/main';
import Banner from './components/banner';
import TweetPicker from './components/tweetPicker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    }
  }
  twitterLogin() {
    this.setState({
      loggedIn: true,
    })
  }
  render() {
    return (
      <Main>
        <Banner handleClick={() => this.twitterLogin()}/>
        {this.state.loggedIn ? <TweetPicker /> : ''}
      </Main>
    );
  }
}

export default App;
