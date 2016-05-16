'use strict';

import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.defaultVal || ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({
      input: event.target.value
    });
  }
  render () {
    return(
      <label>{this.props.label}
        <input
          name={this.props.name}
          onChange={this.handleChange}
          type="text"
          value={this.state.input}
        />
      </label>
    );
  }
}

Input.propTypes = {
  defaultVal: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};
