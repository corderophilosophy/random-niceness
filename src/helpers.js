import base from './base';

const Auth = {
  authHandler(err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log(this);
      this._save({
        loggedIn: true,
      });
    }
  },
  logout() {
    base.unauth();
    console.log('logged out');
    this._save({loggedIn: false})
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
