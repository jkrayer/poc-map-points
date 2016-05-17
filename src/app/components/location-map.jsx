'use strict';

import React from 'react';

export default class LocationMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { mapName, imagePath } = this.props;

    return (
      <img
          alt={mapName}
          src={imagePath}
      />
    );
  }
}
