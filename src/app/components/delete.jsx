'use strict';

import React from 'react';
import MapActions from '../../actions/maps-action-creator.jsx';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      del: false
    };
  }
  handleClick () {
    if (this.state.del) {
      MapActions.delete(this.props.id);
      return;
    }
    this.setState({
      del: true
    });
  }
  render () {
    return (
      <button
          onClick={this.handleClick}
          type="button"
      >
        {this.state.del ? 'Confirm' : 'Delete'}
      </button>
    );
  }
}

Delete.propTypes = {
  id: React.PropTypes.string.isRequired
};
