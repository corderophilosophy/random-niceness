import { combineReducers } from 'redux';
import base from '../base';
import Auth from '../helpers';

const authState = {
  loggedIn: false,
  userId: '',
};

const authReducer = (state = authState, action) => {
  switch(action.type) {
    case 'AUTH':
      console.log('reached auth ' + state, action);

      base.authWithOAuthPopup('twitter', Auth.authHandler());

      return { userId: base.auth()};
    case 'LOGIN':
      return {
        loggedIn: true,
      };
    case 'LOGOUT':
      console.log('reached logout ' + state, action);
      return state;
    default:
      return state;
  }
};

const tweetState = {
  tweets: [
    {label: "Nice Day", text: "Hi there! I hope you're having a nice day!"},
    {label: "You're Great!", text: "Always remember, you're great!"},
    {label: "You're Loved", text: "No matter who you are, somebody loves you!"},
    {label: "Thanks!", text: "You're a meaningful part of the world! Thanks!"},
  ],
};

const tweetReducer = (state = tweetState, action) => {
  switch(action.type) {
    case 'TWEET':
      console.log('reached tweet ' + state, action);
      return state;
    default:
      return state;
  }
};

const Niceness = combineReducers({
  authReducer,
  tweetReducer
});

export default Niceness;
