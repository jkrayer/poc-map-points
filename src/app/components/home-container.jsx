'use strict';

import React from 'react';
import Home from './home.jsx'
import MapStore from '../../stores/map-store.jsx';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maps: MapStore.getMaps() };
  }
  componentDidMount () {
    var self = this;
    MapStore.onChange(function (data) {
      self.setState({maps: data});
    });
  }
  render () {
    return (
      <Home maps={this.state.maps} />
    );
  }
}
