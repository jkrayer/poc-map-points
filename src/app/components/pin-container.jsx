'use strict';

import React from 'react';
import MapPins from './map-pins.jsx'
import PinStore from '../../stores/pin-store.jsx';

export default class PinContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pins: PinStore.getPins(mapId) };
  }
  componentDidMount () {
    var self = this;
    PinStore.onChange(function (data) {
      self.setState({pins: data});
    });
  }
  render () {
    return (
      <MapPins pins={this.state.pins} />
    );
  }
}

MapPin.propTypes = {
  mapId: React.PropTypes.string.isRequired
};
