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
        <img
            alt={mapName}
            src={imagePath}
        />
      </div>
    );
  }
}
