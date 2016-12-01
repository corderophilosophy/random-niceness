import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  storageBucket: process.env.REACT_APP_STG_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
});

export default base;
