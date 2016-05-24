'use strict';

import React from 'react';

export default class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render () {
    let { content, x, y } = this.props;
    let pinStyle = {
      left: x,
      top: y
    };
    let contentStyle = {
      display: this.state.show ? 'block' : 'none'
    };

    return (
      <div className="map-pin-wrapper">
        <div
            className="map-pin"
            style={pinStyle}
        ></div>
        <div
            className="pin-content"
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