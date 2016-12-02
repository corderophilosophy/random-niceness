import React from 'react';
import { Link } from 'react-router';

function Banner(props) {
  return (
    <header className="mw8 center ph3 ph5-ns pv5 bg-yellow black-80 tc">
      <h1 className="fw6 f3 f2-l lh-title mt0 mb3">It's Nice To Be Nice, No?</h1>
      <h2 className="fw2 f4 lh-copy mt0 mb3">Sign in and send a nice tweet to a random person. You do something nice, which is nice, and maybe it'll brighten someone's day! And shucks, that's nice too!</h2>
      <ul className="list pl0 ml0 center">
        <li className="ph2 pv2">
          Sign in to your Twitter account to register.
        </li>
        <li className="ph2 pv2">
          Select a nice message to send.
        </li>
        <li className="ph2 pv2">
          And nice bot will send it to someone on your behalf :)
        </li>
      </ul>
      <div className="pv2 ph2 tc-l">
        <button type="button" className="pointer grow no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2 bn" title="Twitter" onClick={props.handleClick}>
          <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
          <span className="f6 ml3 pr2">Twitter</span>
        </button>
      </div>
    </header>
  );
}

export default Banner;
