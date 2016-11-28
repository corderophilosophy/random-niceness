import React from 'react';

function ShowLove(props) {
  return (
    <div onClick={() => props.showLove({scene:'tweetPicker'})} className="pointer white no-underline underline-hover dtc v-mid tc ph3 ph4-l">
      <h1 className="f6 f2-m fw6 tc">Spread Some Love!</h1>
    </div>
  );
}

export default ShowLove;
