
export function authenticate() {
  return {
    type: 'AUTH',
  };
}

export function login(user) {
  return {
    type: 'LOGIN',
    user: user.uid,
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
    text: tweet.text,
    id: tweet.id,
  }
}
