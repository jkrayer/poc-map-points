'use strict';

import React from 'react';
import LocationMap from './location-map.jsx'
import MapStore from '../../stores/map-store.jsx';

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationMap: MapStore.getMap(props.params.urlString) };
  }
//  componentDidMount () {
//    var self = this;
//    MapStore.onChange(function (data) {
//      self.setState({maps: data});
//    });
//  }
  render () {
    return (
      <LocationMap locationMap={this.state.locationMap} />
    );
  }
}
