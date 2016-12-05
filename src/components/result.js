import React from 'react';
import Tuit from './tuit';

const Result = (props) => {
  let result = props.tweets.tweets.map((e, i) => {
    if (props.tweets.selectedTweet.toString() === i.toString()) {
      return (<Tuit text={e.text} label={e.label} key={i.toString()}/>)
    }
  });
  return (
    <div className="mw8 center ph3 ph5-ns pv5 bg-yellow black-80 tc">
      {result}
      <a className="f6 grow link dim br-pill ba bw1 ph3 pv2 mb2 dib red" href="#0">Send this Tweet to Somebody!</a>
    </div>
  );
}

export default Result;
