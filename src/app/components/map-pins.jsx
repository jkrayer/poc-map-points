'use strict';

import React from 'react';

export default class MapPins extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let pins = this.props.pins.map((pin) => {
      let style = {
        left: pin.x,
        top: pin.y
      };

      return (
        <div
            className="map-pin"
            key={pin._id}
            style={style}
        ></div>
      );
    });

    return (
      <div className="pins-wrapper">
        {pins}
      </div>
    );
  }
}

MapPins.propTypes = {
  pins: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      _id: React.PropTypes.string,
      mapId: React.PropTypes.string,
      x: React.PropTypes.number,
      y: React.PropTypes.number
    })
  ).isRequired
};
