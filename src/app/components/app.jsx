'use strict';

import React from 'react';
import GlobalToolbar from './global-toolbar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="app-wrapper">
        <GlobalToolbar location={this.props.location} />
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
