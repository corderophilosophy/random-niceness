import React from 'react';

function Main(props) {
  return (
    <section className="vh-100 dt w-100 bg-purple white">
      {props.children}
    </section>
  );
}

export default Main;
