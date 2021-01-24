import React from 'react';

function Layout(props) {
  return (
    <div className="page-layout">
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
      {props.children}
    </div>
  )
}

export default Layout