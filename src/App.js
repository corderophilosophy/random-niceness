import React, { Component } from 'react';

import Main from './components/main';
import Banner from './components/banner';
import TweetPicker from './components/tweetPicker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userId: 'corderophi678',
      tweets: [
        {label: "Nice Day", text: "Hi there! I hope you're having a nice day!"},
        {label: "You're Great!", text: "Always remember, you're great!"},
        {label: "You're Loved", text: "No matter who you are, somebody loves you!"},
        {label: "Thanks!", text: "You're a meaningful part of the world! Thanks!"},
      ],
      selection: null,
    }
  }
  twitterLogin() {
    this.setState({
      loggedIn: true,
    })
  }
  makeSelection(index) {
    console.log(index)
  }
  render() {
    return (
      <Main>
        <Banner handleClick={() => this.twitterLogin()}/>
        {this.state.loggedIn ? <TweetPicker tweets={this.state.tweets} makeSelection={(val) => this.makeSelection(val)}/> : ''}
      </Main>
    );
  }
}

export default App;
