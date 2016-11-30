import React from 'react'
import { Link } from 'react-router';

function Tweet(props) {
  return (
    <article className="center mw5 mw6-ns br3 hidden mv4">
      <Link to={`/result/${props.id}`}>{
        ({onClick}) => (
        <button type="button" onClick={onClick} className="f6 w-100 mh1 grow pointer bg-black-80 white bn">
          <p className="f6 f5-ns lh-copy measure tc">
            {props.text}
          </p>
        </button>
      )}</Link>
    </article>
  )
}

export default Tweet;
