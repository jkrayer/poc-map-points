'use strict';

import React from 'react';
import MapPin from './map-pin.jsx';

export default class MapPins extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let pins = this.props.pins.map( pin  => <MapPin key={pin._id} {...pin} /> );

    return (
      <div className="pins-wrapper">
        {pins}
      </div>
    );
  }
}

MapPin.propTypes = {
  pins: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      _id: React.PropTypes.string,
      content: React.PropTypes.string,
      mapId: React.PropTypes.string,
      x: React.PropTypes.number,
      y: React.PropTypes.number
    })
  )
};
