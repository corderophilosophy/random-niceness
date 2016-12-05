import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
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
    if (this.props.dispatch(authenticate())) {
      this.props.dispatch(login());
    }
  }
  _save(state) {
    console.log(state);
    // saveState(state);
    // this.setState({
    //   ...state
    // })
  }
  componentDidMount() {
    this.unsubscribe = base.onAuth(Auth.authDataCallback)
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <BrowserRouter>
        <Main>
          <button onClick={() => this.logout()}>Logout</button>
          <Match exactly pattern="/" component={() => (<Banner handleClick={(e) => this.authenticate(e)}/>)} />
          <Match pattern="/tweetPicker" component={() => (<TweetPicker tweets={this.state.tweets} />)} />
          <Match pattern="/result/:id" component={(props) => (<Result tweets={this.state.tweets} {...props}/>)} />
        </Main>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    tweets: state.tweetReducer
  }
}
export default connect(mapStateToProps)(App);
