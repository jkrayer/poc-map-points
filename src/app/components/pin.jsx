'use strict';

import React from 'react';

export default class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render () {
    let { content, x, y } = this.props;
    let style = {
      left: x,
      top: y,
      display: this.state.show ? 'block' : 'none'
    };

    return (
      <div
          className="map-pin"
          style={style}
      >
        {content}
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
