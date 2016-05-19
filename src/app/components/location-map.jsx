'use strict';

import React from 'react';

export default class LocationMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { imagePath, mapName } = this.props.locationMap;
    return (
      <div>
        <h1>{"Location Map"}</h1>
        <img
            alt={mapName}
            src={imagePath}
        />
      </div>
    );
  }
}
