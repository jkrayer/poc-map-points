'use strict';

import React from 'react';

export default class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleToggleContent = this.handleToggleContent.bind(this);
  }
  handleToggleContent () {
    this.setState({
      show: !this.state.show
    });
  }
  render () {
    let { content, x, y } = this.props;
    let pinStyle = {
      left: x,
      top: y
    };
    let contentStyle = {
      display: this.state.show ? 'block' : 'none',
      left: x,
      top: y
    };

    return (
      <div className="map-pin-wrapper">
        <div
            className="map-pin"
            onClick={this.handleToggleContent}
            style={pinStyle}
        ></div>
        <div
            className="map-pin-content"
            style={contentStyle}
        >{content}</div>
      </div>
    );
  }
}

Pin.propTypes = {
  _id: React.PropTypes.string,
  content: React.PropTypes.string,
  mapId: React.PropTypes.string,
  x: React.PropTypes.number,
  y: React.PropTypes.number
};
