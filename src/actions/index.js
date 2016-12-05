
export function authenticate() {
  return {
    type: 'AUTH',
  };
}

export function login() {
  return {
    type: 'LOGIN',
  }
}

export function logout() {
  return {
    type: 'LOGOUT',
  }
}

export function tweet(tweet) {
  return {
    type: 'TWEET',
    tweet
  }
}
