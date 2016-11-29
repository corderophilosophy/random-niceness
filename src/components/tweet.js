import React from 'react'

function Tweet(props) {
  return (
    <article className="center mw5 mw6-ns br3 hidden mv4">
      <button type="button" onClick={props.handleClick} className="f6 w-100 mh1 grow pointer bg-black-80 white bn">
        <p className="f6 f5-ns lh-copy measure tc">
          {props.text}
        </p>
      </button>
    </article>
  )
}

export default Tweet;
