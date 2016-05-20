'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class GlobalToolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <nav className="global-navigation global-navigation-fixed">
        <div className="global-navigation-inner-wrapper">
          <Link to="/">{"Home"}</Link>
        </div>
      </nav>
    );
  }
}
