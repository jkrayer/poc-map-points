'use strict';

import React from 'react';
import MapPins from './map-pins.jsx'
import PinStore from '../../stores/pin-store.jsx';

export default class PinContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pins: PinStore.getMapPins(this.props.mapId) };
  }
  componentDidMount () {
console.log(13, this.props);
    var self = this;
    PinStore.onChange(function (data) {
      self.setState({
        pins: PinStore.getMapPins(self.props.mapId)
      });
    });
  }
  componentWillReceiveProps () {
    console.log(22);
  }
  render () {
    return (
      <MapPins pins={this.state.pins} />
    );
  }
}

PinContainer.propTypes = {
  mapId: React.PropTypes.string
};
