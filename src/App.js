import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import Main from './components/main';
import Banner from './components/banner';
import TweetPicker from './components/tweetPicker';
import Result from './components/result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userId: 'user123',
      tweets: [
        {label: "Nice Day", text: "Hi there! I hope you're having a nice day!"},
        {label: "You're Great!", text: "Always remember, you're great!"},
        {label: "You're Loved", text: "No matter who you are, somebody loves you!"},
        {label: "Thanks!", text: "You're a meaningful part of the world! Thanks!"},
      ],
    }
  }
  twitterLogin() {
    this.setState({
      loggedIn: true,
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Match exactly pattern="/" component={() => (<Banner handleClick={() => this.twitterLogin()}/>)} />
          <Match pattern="/tweetPicker" component={() => (<TweetPicker tweets={this.state.tweets} />)} />
          <Match pattern="/result/:id" component={(props) => (<Result tweets={this.state.tweets} {...props}/>)} />
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
