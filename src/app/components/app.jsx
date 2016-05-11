'use strict';

import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this.props);
    let { data } = this.props;
    return (
      <div className="app-wrapper">
        {
          React.cloneElement(
            this.props.children,
            {}
          )
        }
      </div>
    );
  }
}
