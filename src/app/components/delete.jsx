'use strict';

import React from 'react';
import MapActions from '../../actions/maps-action-creator.jsx';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    MapActions.delete(this.props.id);
  }
  render () {
    return (
      <button
          onClick={this.handleClick}
          type="button"
      >
        {"Delete"}
      </button>
    );
  }
}
