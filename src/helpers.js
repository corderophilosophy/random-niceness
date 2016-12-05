import base from './base';

const Auth = {
  authDataCallback(user) {
    if (user) {
      console.log('user ' + user.uid + ' is logged in');
    } else {
      console.log('user is logged out');
    }
  },
  authHandler(err, user) {
    if (err) {
      console.error(err);
      return;
    }
  },
  logout() {
    base.unauth();
    console.log('logged out');
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.err(err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('write error?');
  }
};

export default Auth;
