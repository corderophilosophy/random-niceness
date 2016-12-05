import React from 'react';

import Tweet from './tweet';

function TweetPicker(props) {
  const tweets = props.tweets.tweets.map((e, i) => {
    if (e.hidden === false) {
      return (
        <div key={i} className="fl w-50 w-25-l">
          <Tweet onClick={(evt) => props.selectTweet(evt, i)} text={e.text} id={i.toString()}/>
        </div>
      );
    }
  })
  return (
    <div className="mw8 center ph3 ph5-ns pv5 black-80 bg-pink">
      <section className="cf">
        {tweets}
      </section>
    </div>
  );
}

export default TweetPicker;
