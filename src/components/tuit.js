import React from 'react';

function Tuit(props) {
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{props.label}</h1>
      <div className="pa3 bt b--black-10">
        <p className="f6 f5-ns lh-copy measure">
          Hi <code>placeholder</code>, a message from someone wishing you well: <br/>
          {props.text}
        </p>
        <p>From @<code>placeholder</code>, by @RndNice</p>
      </div>
    </article>
  );
}

export default Tuit;
