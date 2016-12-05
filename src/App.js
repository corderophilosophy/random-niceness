import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './components/main';
import Banner from './components/banner';
import TweetPicker from './components/tweetPicker';
import Result from './components/result';
import base from './base';
import Auth from './helpers';
import {loadState, saveState} from './helpers';

import { authenticate, login, logout, tweet } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = Auth.authHandler;
    this.logout = Auth.logout.bind(this);
  }
  authenticate(e) {
    e.preventDefault();
    this.props.dispatch(authenticate());
  }
  _save(state) {
    console.log('state is ' + state);
    // saveState(state);
    // this.setState({
    //   ...state
    // })
  }
  tweetThis(e, idx) {
    let action = {};
    action.text = e.target.innerHTML;
    action.id = idx.toString();
    this.props.dispatch(tweet(action))
  }
  componentDidMount() {
    base.onAuth( (user) => {
      if (user) {
        Auth.authHandler(null, { user });
      }
    })
    this.unsubscribe = base.onAuth(Auth.authDataCallback);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    console.log(this.props);
    return (
        <Main>
          <button onClick={() => this.logout()}>Logout</button>
          <Banner handleClick={(e) => this.authenticate(e)}/>
          <TweetPicker tweets={this.props.tweets} selectTweet={(e, index) => this.tweetThis(e, index)}/>
          <Result tweets={this.props.tweets} {...this.props}/>
        </Main>
    );
  }
}
function mapStateToProps(state) {
  return {
    tweets: state.tweetReducer,
    auth: state.authReducer,
  }
}
export default connect(mapStateToProps)(App);
